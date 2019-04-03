<template>
  <div id="app">
    <titlex title="My Proyects" />
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
  watch: {
    '$store.state.user': function () {
      console.log('hay usuario', this.$store.state.user)
      this.getPosts()
    }
  },
  mounted () {
    if (this.$store.state.user) {
      this.getPosts()
    }
  },
  methods: {
    getPosts () {
      let self = this
      var starCountRef = firebase.database().ref('posts').orderByChild('user/displayName').equalTo(this.$store.state.user.displayName)
      console.log(starCountRef)
      starCountRef.on('value', function (snapshot) {
        // let childRef = starCountRef.child(snapshot)
        let posts = snapshot.val()
        delete posts.undefined
        self.posts = posts || {}
      })
      document.querySelector('body').style = 'overflow: auto'

      this.$nextTick(() => {
        this.$store.state.openSidebar = false
      })
    },
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
