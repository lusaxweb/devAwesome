<template>
  <div id="app">
      <!-- <button @click="changebd" >hola mundo</button> -->
      <!-- <button @click="download" >Download</button> -->
      <!-- <h2>Wallpapers</h2> -->
      <titlex title="Discover" />
      <menu-circles :tags="tags" />
      <posts :section="title" :posts="posts" />
      <Carbon />
      <!-- <router-link class="btn-add-post" to="/addPost/">
        <i class="material-icons">
          add
        </i>
      </router-link> -->
    <!-- <router-view/> -->
  </div>
</template>
<script>
import Carbon from '../components/Carbon.vue'
import posts from '../components/posts.vue'
import titlex from '../components/titlex.vue'
import menuCircles from '../components/Menucircles.vue'

import firebase from 'firebase'

export default {
  components: {
    posts,
    titlex,
    menuCircles,
    Carbon
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
  watch: {
    tagsActive () {
      // this.$firebase.database().ref('posts').off()
      let self = this
      let ref = this.$firebase.database().ref('posts')
      ref.on('value', function (snapshot) {
        let posts = snapshot.val()
        if (self.tagsActive.length > 0) {
          let arrayPosts = []
          for (const post in posts) {
            posts[post].key = post
            arrayPosts.push(posts[post])
          }

          arrayPosts = arrayPosts.filter((post) => {
            let valid = false
            self.tagsActive.forEach((tag) => {
              valid = post.tags.toLowerCase().indexOf(tag.toLowerCase()) !== -1
            })
            return valid
          })

          let objectPosts = {}

          arrayPosts.forEach((item) => {
            objectPosts[item.key] = item
          })
          self.posts = self.reverseObject(objectPosts)
        } else {
          self.posts = self.reverseObject(posts)
        }
      })
      // this.$firebase.database().ref('posts').off()
    }
  },
  mounted () {
    let self = this
    var starCountRef = firebase.database().ref('posts')
    starCountRef.on('value', function (snapshot) {
      // let childRef = starCountRef.child(snapshot)
      let posts = snapshot.val()
      self.posts = self.reverseObject(posts)
      self.getTags()
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
    },
    getTags () {
      let posts = this.posts
      let tags = []
      for (const key in posts) {
        let tagsx = posts[key].tags.split(',')
        tagsx.forEach(item => {
          if (!tags.includes(item.trim())) {
            tags.unshift(item.trim())
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
