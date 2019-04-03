<template>
  <div id="app">
    <!-- <titlex :title="$router.currentRoute.params.searching" /> -->
    <input ref="inputsearch" focus="true" placeholder="Search" class="input-search" @keypress.enter="searchx" v-model="$store.state.search" type="text">
    <h4 class="h4x">Results and Search: <b>{{ $router.currentRoute.params.searching }}</b></h4>
    <posts v-if="posts" :section="title" :posts="posts" />
    <div class="no-coincidence" v-else>
      No results were found
    </div>
    <!-- <Carbon /> -->
    <CodeFundView
            propertyId="8aed6e67-5cf6-4217-a805-d1713785b7e5"
           />
  </div>
</template>
<script>
import Carbon from '../components/Carbon.vue'
import posts from '../components/posts.vue'
import titlex from '../components/titlex.vue'
import menuCircles from '../components/Menucircles.vue'
import CodeFundView from '../components/CodeFundView.vue'
export default {
  components: {
    posts,
    titlex,
    menuCircles,
    Carbon,
    CodeFundView
  },
  props: {
    title: {
      default: 'devAwesome',
      type: String
    }
  },
  data: () => ({
    name: 'hola',
    posts: [],
    tags: [],
    tagsActive: []
  }),
  computed: {
    isRoot () {
      return this.$store.state.user ? (this.$store.state.user.displayName === 'ldrovira' || this.$store.state.user.displayName === 'ManuelRoviraDesign' || this.$store.state.user.email === 'luisrovirac@gmail.com' || this.$store.state.user.email === 'chait7conrom@gmail.com') : false
    }
  },
  watch: {
    '$route.params.searching': function () {
      this.searchPosts()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.searchPosts()
      this.$store.state.search = this.$router.currentRoute.params.searching
    })
    document.querySelector('body').style = 'overflow: auto'

    this.$nextTick(() => {
      this.$store.state.openSidebar = false
    })
  },
  beforeDestroy () {
    let ref = this.$firebase.database().ref('posts')
    ref.off()
    let reflikes = this.$firebase.database().ref('users')
    reflikes.off()
  },
  methods: {
    searchx () {
      this.$router.push('/search/' + this.$store.state.search)
    },
    reverseObject (object) {
      var newObject = {}
      var keys = []
      for (var key in object) {
        keys.push(key)
      }
      for (var i = keys.length - 1; i >= 0; i--) {
        var value = object[keys[i]]
        if (self.isRoot ? true : value.active) {
          newObject[keys[i]] = value
        }
      }
      return newObject
    },
    searchPosts () {
      let self = this
      let ref = this.$firebase.database().ref('posts')
      ref.on('value', function (snapshot) {
        let posts = snapshot.val()
        delete posts.undefined
        let arrayPosts = []
        for (const post in posts) {
          posts[post].key = post
          arrayPosts.push(posts[post])
        }

        arrayPosts = arrayPosts.filter((post) => {
          let postString = JSON.stringify(post)
          return postString.toLowerCase().indexOf(self.$router.currentRoute.params.searching.toLowerCase()) !== -1 || post.tags.toLowerCase().indexOf(self.$router.currentRoute.params.searching.toLowerCase()) !== -1
        })

        let objectPosts = {}

        arrayPosts.forEach((item) => {
          objectPosts[item.key] = item
        })
        self.$store.state.posts = self.posts = arrayPosts.length > 0 ? self.reverseObject(objectPosts) : null
      })
    },
    getTags () {
      let posts = this.posts
      let tags = []
      for (const key in posts) {
        let tagsx = posts[key].tags.split(',')
        tagsx.forEach(item => {
          if (!tags.hasOwnProperty(item.trim())) {
            tags.push(item.trim())
          }
        })
      }
      this.tags = tags
    }
  }
}
</script>
<style lang="stylus">
@require '../config'
.input-search
  padding 10px
  font-size 6rem
  margin-top 70px
  width 100%
  text-align center
  margin-bottom 10px
  color $fondo2
  background transparent
  border 0px
  transition all .25s ease
  &:focus
    color rgb(255,255,255)
  &::placeholder
    color $fondo2
.btn-add-post
  position fixed
  right 35px
  bottom 35px
  z-index 2000
  background $primary
  width 50px
  height 50px
  color rgb(255,255,255)
  border-radius 50%
  display flex
  align-items center
  justify-content center
  box-shadow 0px 5px 15px 0px rgba(0,0,0,.4)
  .material-icons
    font-size 24px

.no-coincidence
  width 100%
  text-align center
  font-size 3rem
  padding 100px 20px
  color rgba(0,0,0,.1)
  user-select none
  cursor default

.h4x
  text-align center
  width 100%
  font-weight normal
  letter-spacing 1px
  margin-bottom 20px
  b
    color $primary
    padding-left 5px

@media only screen and (max-width: 7068px)
  .input-search
    font-size 3rem
</style>
