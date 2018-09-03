<template>
  <div id="app">
    <titlex title="DevAwesome" />
    <filters/>

    <menu-circles :tags="tags" />
    <posts :section="title" :posts="posts" />
    <Carbon />
  </div>
</template>
<script>
import Carbon from '../components/Carbon.vue'
import posts from '../components/posts.vue'
import titlex from '../components/titlex.vue'
import menuCircles from '../components/Menucircles.vue'
import filters from '../components/filters.vue'

import firebase from 'firebase'

export default {
  components: {
    posts,
    titlex,
    menuCircles,
    Carbon,
    filters
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
    explore () {
      return this.$store.state.filters.explore
    }
  },
  watch: {
    explore () {
      console.log(this.$store.state.filters.explore)
      let self = this
      let explore = this.$store.state.filters.explore
      var starCountRef = firebase.database().ref('posts')

      if (explore === 'viewed') {
        starCountRef.on('value', function (snapshot) {
          let posts = snapshot.val()

          var sortable = []
          for (var vehicle in posts) {
            sortable.push([vehicle, posts[vehicle]])
          }

          sortable.sort(function (a, b) {
            return b[1].views - a[1].views
          })

          let postsOrder = {}
          sortable.forEach((item) => {
            postsOrder[item[0]] = item[1]
          })
          // console.log(sortable)
          // self.posts = self.reverseObject(posts)
          self.posts = postsOrder
          self.getTags()
        })
      } else if (explore === 'valued') {
        starCountRef.on('value', function (snapshot) {
          let posts = snapshot.val()

          var sortable = []
          for (var vehicle in posts) {
            sortable.push([vehicle, posts[vehicle]])
          }

          sortable.sort(function (a, b) {
            if (!b[1].hasOwnProperty('likes')) {
              b[1].likes = {}
            }
            if (!a[1].hasOwnProperty('likes')) {
              a[1].likes = {}
            }
            return Object.keys(b[1].likes).length - Object.keys(a[1].likes).length
          })

          let postsOrder = {}
          sortable.forEach((item) => {
            postsOrder[item[0]] = item[1]
          })
          // console.log(sortable)
          // self.posts = self.reverseObject(posts)
          self.posts = postsOrder
          self.getTags()
        })
      } else if (explore === 'recent') {
        starCountRef.on('value', function (snapshot) {
          let posts = snapshot.val()
          self.posts = self.reverseObject(posts)
          self.getTags()
        })
      }
    },
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
          if (!tags.includes(item.trim().toLowerCase())) {
            tags.push(item.trim().toLowerCase())
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
