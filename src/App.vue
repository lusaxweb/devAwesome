<template>
  <div id="app">
    <navx />
    <div class="con-app">
      <router-view/>
    </div>
  </div>
</template>
<script>
import navx from './components/nav.vue'
export default {
  components:{
    navx
  },
  mounted () {
    window.addEventListener('scroll', this.scrollApp)
  },
  updated () {
    this.$firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.$store.state.user = user
      } else {
        // No user is signed in.
        this.$store.state.user = null
      }
    })
  },
  methods: {
    scrollApp (evt) {
      let posts = document.querySelectorAll('.post')
      let scrollTopx = document.documentElement.scrollTop
      // if (st > lastScrollTop) {
      posts.forEach(item => {
        let img = item.querySelector('img')
        let top = item.getBoundingClientRect().top
        let percent = -((scrollTopx - top - 50) / 28)
        percent = -(percent)
        img.style.transform = `translate(0,${percent.toFixed()}px) scale(1.3)`
      })
    }
  }
}
</script>
<style lang="stylus">
@font-face {
  font-family: "Poppins-bold";
  src: url("./assets/fonts/Poppins-Bold.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Poppins-semi-bold";
  src: url("./assets/fonts/Poppins-SemiBold.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "OpenSans";
  src: url("./assets/fonts/OpenSans-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
*
  margin 0px;
  padding 0px
  list-style none
  outline none
  text-decoration none
  font-family OpenSans

h1,h2,h3
  font-family Poppins-semi-bold !important
  // font-weight bold !important
button
  border 0px;
  cursor pointer
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(255,255,255)
  background rgb(34, 30, 51)
</style>
