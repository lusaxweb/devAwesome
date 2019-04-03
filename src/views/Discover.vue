<template>
  <div id="app">
    <titlex title="DevAwesome" />
    <filters/>
    <menu-circles />
    <posts :section="title" :posts="this.$store.state.posts" />

    <vs-button class="btn-more" @click="maxPosts += 10" vs-color="#603aff" vs-type="filled">Load More Proyects ...</vs-button>

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
    maxPosts: 15,
    baseMaxPosts: 15
  }),
  computed: {
    postsCarbon () {
      let posts = this.$store.state.posts
      let arrayPosts = []
      for (const key in posts) {
        arrayPosts.push({
          key,
          ...posts[key]
        })
      }
      // let indexCarbon = this.maxPosts - (this.maxPosts / 2)
      // if (arrayPosts.length > 0) {
      //   arrayPosts.splice(this.maxPosts - 4, 0, {carbon: true, key: this.maxPosts - 4})
      // }

      let postObject = {}

      arrayPosts.forEach((item) => {
        postObject[item.key] = item
      })

      return postObject
    },
    isRoot () {
      return this.$store.state.user ? (this.$store.state.user.displayName === 'ldrovira' || this.$store.state.user.displayName === 'ManuelRoviraDesign' || this.$store.state.user.email === 'luisrovirac@gmail.com' || this.$store.state.user.email === 'chait7conrom@gmail.com') : false
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
    '$store.state.display': function () {
      this.getPosts()
    },
    '$store.state.clickHome': function () {
      this.getPosts()
      this.$store.state.tagsActive = []
      this.$store.state.filters.section = null
      this.$store.state.filters.lenguaje = null
      this.$store.state.filters.explore = 'recent'
    },
    '$store.state.filters.section': function () {
      this.$store.state.filters.lenguaje = null
      this.$store.state.tagsActive = []
      this.getPosts()
    },
    '$store.state.filters.lenguaje': function () {
      this.$store.state.tagsActive = []
      this.getPosts()
    },
    '$store.state.user': function () {
      this.getPosts()
    },
    maxPosts () {
      this.getPosts()
    },
    explore () {
      this.maxPosts = this.baseMaxPosts
      this.getPosts()
    },
    section () {
      this.maxPosts = this.baseMaxPosts
      this.getPosts()
    },
    lenguaje () {
      this.maxPosts = this.baseMaxPosts
      this.getPosts()
    },
    '$store.state.tagsActive': function () {
      this.getPostsTagsActive()
      // this.$firebase.database().ref('posts').off()
    }
  },
  mounted () {
    this.getTags()
    document.querySelector('body').style = 'overflow: auto'

    this.$nextTick(() => {
      this.$store.state.posts = []
      this.getPosts()
      this.changeAds()
      this.$store.state.openSidebar = false
    })
  },
  methods: {
    changeAds () {
      // let _carbonads
      this.$nextTick(() => {
        if (!document.querySelector('#carbonads')) return
        if (typeof _carbonads !== 'undefined') _carbonads.refresh()
      })
    },
    getPostsTagsActive () {
      this.maxPosts = this.baseMaxPosts
      // this.$firebase.database().ref('posts').off()
      let self = this
      self.$store.state.posts = []
      let ref = this.$firebase.database().ref('posts')
      if (this.$store.state.filters.section) {
        ref = firebase.database().ref('posts').orderByChild('section').equalTo(this.$store.state.filters.section.toLowerCase())
      } else {
        ref = firebase.database().ref('posts')
      }
      ref.on('value', function (snapshot) {
        let posts = snapshot.val()
        delete posts.undefined

        if (self.$store.state.tagsActive.length > 0) {
          let arrayPosts = []
          for (const post in posts) {
            posts[post].key = post
            arrayPosts.push(posts[post])
          }

          let validArray = []
          arrayPosts = arrayPosts.forEach((post, index) => {
            self.$store.state.tagsActive.forEach((tag) => {
              let tagsx = post.tags.split(',')
              tagsx = tagsx.map(item => item.toLowerCase())
              if (tagsx.indexOf(tag.tag.toLowerCase()) !== -1) {
                validArray.push(post)
              }
            })
          })

          let objectPosts = {}

          validArray.forEach((item, index) => {
            objectPosts[item.key] = item
          })

          self.$store.state.posts = self.reverseObject(objectPosts)
        } else {
          self.$store.state.posts = self.reverseObject(posts)
        }
      })
    },
    getPosts () {
      this.changeAds()
      if (this.$store.state.tagsActive.length !== 0) {
        this.getPostsTagsActive()
        return
      }
      let self = this
      let explore = this.$store.state.filters.explore
      let lenguaje = this.$store.state.filters.lenguaje ? this.$store.state.filters.lenguaje.toLowerCase() : null
      var starCountRef = firebase.database().ref('posts')
      if (this.$store.state.filters.section) {
        starCountRef = firebase.database().ref('posts').orderByChild('section').equalTo(this.$store.state.filters.section.toLowerCase())
      }

      if (explore === 'viewed') {
        starCountRef.on('value', function (snapshot) {
          let posts = snapshot.val()
          delete posts.undefined
          var sortable = []

          for (var post in posts) {
            sortable.push([post, posts[post]])
          }

          sortable.sort(function (a, b) {
            return b[1].views - a[1].views
          })

          let postsOrder = {}
          for (let index = 0; index < sortable.length; index++) {
            // if (index >= self.maxPosts) {
            //   break
            // }
            const element = sortable[index]
            if (self.isRoot ? true : element[1].active) {
              if (lenguaje ? element[1].lenguaje.toLowerCase() === lenguaje : true) {
                postsOrder[element[0]] = element[1]
              }
            }
          }
          self.$store.state.posts = postsOrder
          // self.getTags()
        })
      } else if (explore === 'valued') {
        starCountRef.on('value', function (snapshot) {
          let posts = snapshot.val()
          delete posts.undefined
          var sortable = []
          // let index = 0
          for (var post in posts) {
            // if (index >= self.maxPosts) {
            //   break
            // }
            sortable.push([post, posts[post]])
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
            // if (index >= self.maxPosts) {
            //   break
            // }
            const element = sortable[index]
            if (self.isRoot ? true : element[1].active) {
              if (lenguaje ? element[1].lenguaje.toLowerCase() === lenguaje : true) {
                postsOrder[element[0]] = element[1]
              }
            }
          }
          // self.posts = self.reverseObject(posts)
          self.$store.state.posts = postsOrder
          // self.getTags()
        })
      } else if (explore === 'recent') {
        // if (this.$store.state.filters.section) {
        //   starCountRef = firebase.database().ref('posts').orderByChild('section').equalTo(this.$store.state.filters.section.toLowerCase()).limitToLast(self.maxPosts)
        // } else {
        //   starCountRef = firebase.database().ref('posts').limitToLast(self.maxPosts)
        // }
        starCountRef.on('value', function (snapshot) {
          let posts = snapshot.val()
          delete posts.undefined

          if (self.$store.state.filters.lenguaje) {
            let postFilter = {}
            for (const key in posts) {
              let post = posts[key]
              if (post.lenguaje === self.$store.state.filters.lenguaje.toLowerCase()) {
                if (self.isRoot ? true : post.active) {
                  if (lenguaje ? post.lenguaje === lenguaje : true) {
                    postFilter[key] = post
                  }
                }
              }
            }
            self.$store.state.posts = postFilter
          } else {
            self.$store.state.posts = self.reverseObject(posts)
          }
          // self.getTags()
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
      let starCountRef = firebase.database().ref('posts')

      starCountRef.once('value',  (snapshot) => {
        let posts = snapshot.val()
        delete posts.undefined
        let tags = {}
        for (const key in posts) {
          let tagsx = posts[key].tags.split(',')
          tagsx.forEach(item => {
            if (this.isRoot ? true : posts[key].active) {
              let tag = item.trim().toLowerCase()
              if (!tags.hasOwnProperty(tag)) {
                tags[tag] = 1
              } else {
                let number = Number(tags[tag])
                number++
                tags[tag] = number
              }
            }
          })
        }

        var sortable = []

        for (var tag in tags) {
          if (tags[tag] > 1) {
            sortable.push({
              tag,
              count: tags[tag]
            })
          }
        }

        sortable.sort(function (a, b) {
          return b.count - a.count
        })

        sortable = sortable.slice(0, 20)

        this.$store.state.tags = sortable
      })

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
