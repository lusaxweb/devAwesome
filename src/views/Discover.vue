<template>
  <div id="app">
    <titlex title="DevAwesome" />
    <filters/>

    <menu-circles :tags="tags" />
    <posts :section="title" :posts="posts" />

    <vs-button class="btn-more" @click="maxPosts += 10" vs-color="#603aff" vs-type="filled">Load More Proyects ...</vs-button>
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
    tagsActive: [],
    maxPosts: 10
  }),
  computed: {
    isRoot () {
      return this.$store.state.user ? (this.$store.state.user.displayName === 'ldrovira' || this.$store.state.user.displayName === 'ManuelRoviraDesign') : false
    },
    explore () {
      return this.$store.state.filters.explore
    },
    section () {
      return this.$store.state.filters.section
    },
    lenguaje () {
      return this.$store.state.filters.lenguaje
    }
  },
  watch: {
    '$store.state.user': function () {
      this.getPosts()
    },
    maxPosts () {
      this.getPosts()
    },
    explore () {
      this.maxPosts = 10
      this.getPosts()
    },
    section () {
      this.maxPosts = 10
      this.getPosts()
    },
    lenguaje () {
      this.maxPosts = 10
      this.getPosts()
    },
    tagsActive () {
      // this.$firebase.database().ref('posts').off()
      let self = this
      let ref = this.$firebase.database().ref('posts')
      if (this.$store.state.filters.section) {
        ref = firebase.database().ref('posts').orderByChild('section').equalTo(this.$store.state.filters.section.toLowerCase()).limitToLast(self.maxPosts)
      } else {
        ref = firebase.database().ref('posts').limitToLast(self.maxPosts)
      }
      ref.on('value', function (snapshot) {
        let posts = snapshot.val()
        if (self.tagsActive.length > 0) {
          let arrayPosts = []
          for (const post in posts) {
            posts[post].key = post
            arrayPosts.push(posts[post])
          }

          let validArray = []
          arrayPosts = arrayPosts.forEach((post, index) => {
            self.tagsActive.forEach((tag) => {
              if (post.tags.toLowerCase().indexOf(tag.toLowerCase()) !== -1) {
                // if (index < self.maxPosts) {
                validArray.push(post)
                // }
              }
            })
          })

          let objectPosts = {}

          validArray.forEach((item, index) => {
            if (index < self.maxPosts) {
              objectPosts[item.key] = item
            }
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
    this.getPosts()
    document.querySelector('body').style = 'overflow: auto'

    this.$nextTick(() => {
      this.$store.state.openSidebar = false
    })
  },
  methods: {

    getPosts () {
      let self = this
      let explore = this.$store.state.filters.explore
      let lenguaje = this.$store.state.filters.lenguaje
      var starCountRef = firebase.database().ref('posts')
      if (this.$store.state.filters.section) {
        starCountRef = firebase.database().ref('posts').orderByChild('section').equalTo(this.$store.state.filters.section.toLowerCase())
      } else {
        starCountRef = firebase.database().ref('posts')
      }

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
          for (let index = 0; index < sortable.length; index++) {
            if (index >= self.maxPosts) {
              break
            }
            const element = sortable[index]
            if (self.isRoot ? true : element[1].active) {
              if (lenguaje ? element[1].lenguaje === lenguaje : true) {
                postsOrder[element[0]] = element[1]
              }
            }
          }
          self.posts = postsOrder
          self.getTags()
        })
      } else if (explore === 'valued') {
        starCountRef.on('value', function (snapshot) {
          let posts = snapshot.val()

          var sortable = []
          let index = 0
          for (var vehicle in posts) {
            if (index >= self.maxPosts) {
              break
            }
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
          for (let index = 0; index < sortable.length; index++) {
            if (index >= self.maxPosts) {
              break
            }
            const element = sortable[index]
            if (self.isRoot ? true : element[1].active) {
              if (lenguaje ? element[1].lenguaje === lenguaje : true) {
                postsOrder[element[0]] = element[1]
              }
            }
          }
          // console.log(sortable)
          // self.posts = self.reverseObject(posts)
          self.posts = postsOrder
          self.getTags()
        })
      } else if (explore === 'recent') {
        if (this.$store.state.filters.section) {
          starCountRef = firebase.database().ref('posts').orderByChild('section').equalTo(this.$store.state.filters.section.toLowerCase()).limitToLast(self.maxPosts)
        } else {
          starCountRef = firebase.database().ref('posts').limitToLast(self.maxPosts)
        }
        starCountRef.on('value', function (snapshot) {
          let posts = snapshot.val()
          if (self.$store.state.filters.lenguaje) {
            let postFilter = {}
            for (const key in posts) {
              let post = posts[key]
              if (post.lenguaje === self.$store.state.filters.lenguaje) {
                if (self.isRoot ? true : post.active) {
                  if (lenguaje ? post.lenguaje === lenguaje : true) {
                    postFilter[key] = post
                  }
                }
              }
            }
            self.posts = postFilter
          } else {
            self.posts = self.reverseObject(posts)
          }
          self.getTags()
        })
      }
    },
    reverseObject (object) {
      var newObject = {}
      var keys = []
      for (var key in object) {
        keys.push(key)
      }
      for (var i = keys.length - 1; i >= 0; i--) {
        var value = object[keys[i]]
        if (this.isRoot ? true : value.active) {
          newObject[keys[i]] = value
        }
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
.btn-more
  margin 30px
  margin-bottom 60px
</style>
