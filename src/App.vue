<template>
  <div
    :class="{
      'hiddenScroll': $store.state.view.active
    }"
    id="app">
    <div v-if="$store.state.openSidebar" @click="$store.state.openSidebar = false" class="dark">
    </div>
    <!-- <bubbles /> -->
    <navx :class="{'blurx': $store.state.openUpload}" />
    <sidebarx />

    <openUpload />

    <div :class="{'blurx': $store.state.openUpload}" class="con-app">
      <router-view/>
    </div>
    <!-- <div class="con-ups">
      <h3>Ups! we are currently in maintenance
          <br>
      WOW thanks to your visits we are making a change of servers
          <br>
          <br>

      Thanks for your understanding and support
      </h3>
    </div> -->
    <footerx :class="{'blurx': $store.state.openUpload}" />
  </div>
</template>
<script>
import openUpload from './components/openUpload.vue'
import navx from './components/nav.vue'
import footerx from './components/Footer.vue'
import sidebarx from './components/Sidebar.vue'
import bubbles from './components/bubbles.vue'
export default {
  components: {
    navx,
    footerx,
    sidebarx,
    bubbles,
    openUpload
  },
  data: () => ({
    user: {
      bio: '',
      skills: [],
      email: '',
      views: 0,
      likes: 0,
      followers: {},
      follow: {},
      web: '',
      cover: '',
      social: {
        twitter: '',
        facebook: '',
        linkedin: '',
        github: '',
        instagram: '',
        codepen: '',
        medium: ''
      }
    }
  }),
  mounted () {

    // this.getHot()
    /*
    * s
    * scroll efect
    * s
    */
    // window.addEventListener('scroll', this.scrollApp)

    this.$firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log(user)
        console.log(user.email == 'luisrovirac@gmail.com')

        if (user.displayName === 'ldrovira' || user.displayName === 'ManuelRoviraDesign' || user.email === 'luisrovirac@gmail.com' || this.$store.state.user.email === 'chait7conrom@gmail.com') {
          this.$store.state.admin = true
          console.log('entro aqui', this.$store.state.admin)
        }
        this.$store.state.user = user

        this.$firebase.database().ref('users').once('value', snap => {
          let users = snap.val()
          let userRef = this.$firebase.database().ref('users/' + user.uid)
          if (!users.hasOwnProperty(user.uid)) {
            userRef.update({
              ...this.user,
              name: user.displayName,
              email: user.email,
              uid: user.uid,
              emailVerified: user.emailVerified,
              photoURL: user.photoURL
            })
          } else {
            let userRef = this.$firebase.database().ref('users/' + user.uid)
            userRef.once('value', snap => {
              let bduser = snap.val()
              this.user = {
                ...this.user,
                ...bduser
              }
              userRef.update(this.user)
            })
          }
        })

        fetch(`https://api.github.com/search/users?q=${user.displayName || user.email}`)
          .then(response => response.json())
          .then(json => {
            let userRef = this.$firebase.database().ref('users/' + user.uid + '/githubUrl')
            userRef.set(json.items[0].html_url)
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
    getHot () {
      (function (h, o, t, j, a, r) {
        h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) }
        h._hjSettings = {hjid: 1004130, hjsv: 6}
        a = o.getElementsByTagName('head')[0]
        r = o.createElement('script')
        r.async = 1
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
        a.appendChild(r)
      })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
    },
    scrollApp (evt) {
      let posts = document.querySelectorAll('.post')
      // let scrollTopx = document.documentElement.scrollTop
      // if (st > lastScrollTop) {
      posts.forEach(item => {
        let img = item.querySelector('img')
        let top = item.getBoundingClientRect().top
        let percent = -((top) / 24)
        percent = -(percent)
        img.style.transform = `translate(0,${percent.toFixed()}px) scale(1.3)`
      })
    }
  }
}
</script>
<style lang="stylus">
@require './config'
// $fondo = #231F34
// $fondo2 = #2C2741
// $fondo3 = #352F4E

:root {
  --fondo: $fondo
  --fondo2: $fondo2
  --fondo3: $fondo3
  --text-color: rgb(255,255,255)
  --text-alpha: rgba(255,255,255,.6)
  --text-alpha2: rgba(255,255,255,.2)
}

.blurx
  filter blur(10px)

.con-ups
  width 100%
  height 600px
  display flex
  align-items center
  justify-content center
  font-weight normal
  font-size 1.3rem

.con-chips input
  background transparent
  color rgb(255,255,255)

.vs-select-options
  background var(--fondo3) !important
.vs-select-item-btn
  background var(--fondo3) !important
  color var(--text-color) !important
  border-top 1px solid var(--fondo3) !important
  border-bottom 1px solid var(--fondo3) !important
  &:hover
    background var(--fondo2) !important
  &.activex
    background $primary !important
    color rgb(255,255,255) !important
.input-select
  background var(--fondo2)
  color var(--text-color) !important
  padding 10px !important
  border 0px !important
.input-select-label
  text-align left !important
  width 100% !important
  color var(--text-color) !important
  display block
  padding-bottom 5px
  margin-top 6px
.icon-select
  right 10px !important
.x-global
  padding 10px !important
.input-span-placeholder
  color var(--text-alpha2) !important
  padding-left .7rem !important
.icon-inputx
  color var(--text-alpha2) !important

.con-chips
  box-shadow none !important
  input
    padding 6px 9px !important

input
  &::placeholder
    color var(--text-alpha2) !important

*::-webkit-scrollbar
  width: 5px;
  height: 5px;
  background: var(--fondo)

*::-webkit-scrollbar-thumb
  background: rgba(255,255,255, .2)
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
  font-family OpenSans
  box-sizing border-box
  a
    text-decoration none

h1,h2,h3,h4,h5,h6
  font-family Poppins-semi-bold !important
  // font-weight bold !important
button
  border 0px;
  cursor pointer

body
  background var(--fondo)

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color)
  background var(--fondo)
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

// for number in (1..10)
//   #carbonads_{number}
//     display none !important
.vs-dialog
  color rgb(255,255,255) !important
  background var(--fondo2) !important
  .vs-button-text
    color rgb(255,255,255) !important
  header
    background var(--fondo3) !important
    h3
      font-weight normal !important




</style>
