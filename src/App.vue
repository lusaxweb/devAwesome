<template>
  <div
    :class="{
      'hiddenScroll': $store.state.view.active
    }"
    id="app">
    <div v-if="$store.state.openSidebar" @click="$store.state.openSidebar = false" class="dark">
    </div>
    <navx />
    <sidebarx />
    <div class="con-app">
      <router-view/>
    </div>
    <footerx />
  </div>
</template>
<script>
import navx from './components/nav.vue'
import footerx from './components/Footer.vue'
import sidebarx from './components/Sidebar.vue'
export default {
  components: {
    navx,
    footerx,
    sidebarx
  },
  mounted () {
    window.addEventListener('scroll', this.scrollApp)

    this.$firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log(user)
        if (user.displayName === 'ldrovira' || user.displayName === 'ManuelRoviraDesign') {
          this.$store.state.admin = true
        }
        this.$store.state.user = user
        let userRef = this.$firebase.database().ref('users/' + user.uid)
        userRef.update({
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL
        })

        fetch(`https://api.github.com/search/users?q=${user.displayName}`)
          .then(response => response.json())
          .then(json => {
            this.$store.state.githubUrl = json.items[0].html_url
          })
      } else {
        this.$store.state.githubUrl = null
        this.$store.state.admin = false
        // No user is signed in.
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
@require './config'
.con-chips input
  background transparent
  color rgb(255,255,255)

.vs-select-options
  background $fondo3 !important
.vs-select-item-btn
  background $fondo3 !important
  color rgb(255,255,255) !important
  border-top 1px solid $fondo3 !important
  border-bottom 1px solid $fondo3 !important
  &:hover
    background $fondo2 !important
  &.activex
    background $primary !important
.input-select
  background $fondo2
  color rgb(255,255,255)
  padding 10px !important
.input-select-label
  text-align left !important
  width 100% !important
  color rgb(255,255,255) !important
  display block
  padding-bottom 5px

*::-webkit-scrollbar
  width: 5px;
  height: 5px;
  background: $fondo

*::-webkit-scrollbar-thumb
  background: $fondo3
  border-radius: 5px;

*::-webkit-scrollbar-thumb:hover
  background $primary

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
  box-sizing border-box

h1,h2,h3,h4,h5,h6
  font-family Poppins-semi-bold !important
  // font-weight bold !important
button
  border 0px;
  cursor pointer

body
  background $fondo

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(255,255,255)
  background $fondo
  width 100%
  overflow auto
  overflow-x hidden
  // height 100vh
  &.hiddenScroll
    overflow hidden !important

.dark
  position fixed
  left 0px
  top 0px
  z-index 30000
  width 100%
  height 100%
  background rgba(0,0,0,.5)

for number in (1..10)
  #carbonads_{number}
    display none !important

</style>
