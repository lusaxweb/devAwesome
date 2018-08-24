<template>
  <div id="app">
      <!-- <button @click="changebd" >hola mundo</button> -->
      <!-- <button @click="download" >Download</button> -->
      <!-- <h2>Wallpapers</h2> -->
      <titlex :title="title" />
      <menu-circles :tags="tags" />
      <posts :section="title" :posts="posts" />
      <Carbon />
      <router-link class="btn-add-post" to="/addPost/">
        <i class="material-icons">
          add
        </i>
      </router-link>
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
      default: 'Wall-space',
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
      console.log('tagsActive', this.tagsActive)
      let self = this
      var starCountRef = firebase.database().ref('posts/' + this.title.toLowerCase())
      starCountRef.once('value', function (snapshot) {
        console.log('snapshot.val()>>', snapshot.val())
        let posts = snapshot.val()
        if (self.tagsActive.length > 0) {
          for (const key in posts) {
            let tags = posts[key].tags.split(',')
            let valid = 0
            tags.forEach(item => {
              console.log('itemmmm', item)
              console.log('>>>', posts[key].tags, '____________', self.tagsActive.includes(item.trim()))
              if (self.tagsActive.includes(item.trim())) {
                valid++
              }
            })
            if (valid === 0) {
              delete posts[key]
            }
          }
        }
        console.log(posts)
        self.posts = posts
      })
    }
  },
  mounted () {
    let self = this
    var starCountRef = firebase.database().ref('posts/' + this.title.toLowerCase())
    starCountRef.on('value', function (snapshot) {
      let posts = snapshot.val()
      let reflikes = self.$firebase.database().ref('users/' + self.$store.state.user.uid).child('likes')

      reflikes.on('value', function (snapshot) {
        let likes = snapshot.val()
        self.$store.state.likes = likes
        for (const key in likes) {
          if (posts.hasOwnProperty(key)) {
            posts[key].isLike = true
          }
        }
        self.posts = posts
        self.getTags()
      })
    })
    document.querySelector('body').style = 'overflow: auto'
  },
  methods: {
    // filterPosts () {
    //   this.
    // },
    getTags () {
      let posts = this.posts
      let tags = []
      console.log('posts>>', posts)
      for (const key in posts) {
        let tagsx = posts[key].tags.split(',')
        tagsx.forEach(item => {
          if (!tags.includes(item.trim())) {
            tags.push(item.trim())
          }
        })
      }
      this.tags = tags
    },
    download () {
      // let self = this
      // var storage = firebase.storage()
      // var pathReference = storage.ref('images/logo.png')
      // pathReference.getDownloadURL().then(function (url) {
      //   // This can be downloaded directly:
      //   var xhr = new XMLHttpRequest();
      //   xhr.responseType = 'blob';
      //   xhr.onload = function (event) {
      //     var blob = xhr.response;
      //   };
      //   xhr.open('GET', url);
      //   xhr.send();

      //   // Or inserted into an <img> element:
      //   // var img = document.getElementById('myimg');
      //   // img.src = url;
      //   self.srcx = url
      // })
    },
    changebd () {
      firebase.database().ref('posts/vuejs').push({
        title: 'luis',
        description: 'email2',
        src: 'https://firebasestorage.googleapis.com/v0/b/lusaxweb-assets.appspot.com/o/images%2F1_mQoLJBfcrMvbInuu2U9qXA.jpeg?alt=media&token=65690707-102d-44a9-8207-149171b55bc6',
        likes: 0,
        views: 0,
        outstanding: false,
        downloads: 0
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
</style>
