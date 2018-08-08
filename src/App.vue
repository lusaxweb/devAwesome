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
    console.log('hola')
    window.addEventListener('scroll', this.scrollApp)
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
* {
  margin 0px;
  padding 0px
  list-style none
  outline none
  text-decoration none
}
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
