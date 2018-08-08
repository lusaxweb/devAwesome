<template>
  <div id="app">
    <div id="nav">
      <!-- <button @click="changebd" >hola mundo</button> -->
      <!-- <button @click="download" >Download</button> -->
      <!-- <h2>Wallpapers</h2> -->
      <titlex title="Wallpapers" />
      <posts section="vuejs" :posts="posts" />

    </div>
    <router-view/>
  </div>
</template>
<script>
import posts from '../components/posts.vue'
import titlex from '../components/titlex.vue'
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyBURF6gU0jbqODrtH68DRWhJ1DK0Az_LTU',
  authDomain: 'lusaxweb-assets.firebaseapp.com',
  databaseURL: 'https://lusaxweb-assets.firebaseio.com',
  projectId: 'lusaxweb-assets',
  storageBucket: 'lusaxweb-assets.appspot.com',
  messagingSenderId: '591909134078'
}
firebase.initializeApp(config)
export default {
  components: {
    posts,
    titlex
  },
  data: () => ({
    name: 'hola',
    posts: [],
    srcx: ''
  }),
  mounted () {
    let self = this
    var starCountRef = firebase.database().ref('posts/vuejs')
    starCountRef.on('value', function (snapshot) {
      console.log(snapshot.val())
      self.posts = snapshot.val()
    })
  },
  methods: {
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
</style>
