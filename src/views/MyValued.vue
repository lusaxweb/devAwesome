<template>
  <div id="app">
    <titlex title="My Valued" />
    <!-- <menu-circles :tags="tags" /> -->
    <posts :section="title" :posts="posts" />
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
import firebase from 'firebase'

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
    posts: []
  }),
  mounted () {
    let self = this
    var starCountRef = firebase.database().ref('posts')
    console.log(starCountRef)
    starCountRef.on('value', function (snapshot) {

      // let childRef = starCountRef.child(snapshot)
      let posts = snapshot.val()
      delete posts.undefined
      let arrayPosts = []
      for (const post in posts) {
        posts[post].key = post
        arrayPosts.push(posts[post])
      }

      arrayPosts = arrayPosts.filter((post) => {
        console.log('post', post)
        if (post.likes) {
          return post.likes.hasOwnProperty(self.$store.state.user.uid)
        } else {
          return false
        }
      })

      if (arrayPosts.length === 0) {
        console.log('entro aqui en el null')
        self.posts = {}
        return
      }

      let objectPosts = {}

      arrayPosts.forEach((item) => {
        objectPosts[item.key] = item
      })

      self.posts = arrayPosts.length > 0 ? self.reverseObject(objectPosts) : {}
    })
    document.querySelector('body').style = 'overflow: auto'

    this.$nextTick(() => {
      this.$store.state.openSidebar = false
    })
  },
  methods: {
    reverseObject (object) {
      var newObject = {}
      var keys = []
      for (var key in object) {
        keys.push(key)
      }
      for (var i = keys.length - 1; i >= 0; i--) {
        var value = object[keys[i]]
        newObject[keys[i]] = value
      }

      return newObject
    }
  }
}
</script>
<style lang="stylus">
@require '../config'
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
</style>
