<template>
  <nav :class="{'menuActive':menuActive}" class="con-nav">

    <div ref="links" class="links">
      <button class="btn-open-sidebar" @click="$store.state.openSidebar = true">
        <i class="material-icons">
          dehaze
        </i>
      </button>

      <div class="con-logo">
        <router-link @click.native="clickHome" ref="btn1" to="/" exact>
          <img src="png/devAwesome.png" alt="">
          <span>
            DevAwesome
            <b class="beta">BETA</b>
          </span>
        </router-link>
      </div>

      <router-link @click.native="clickHome" exact to="/"><span>Projects</span></router-link>
      <router-link to="/articles"><span class="new">Articles</span> </router-link>
      <router-link exact to="/topics"><span>Topics</span></router-link>
      <router-link exact to="/assets"><span>Assets</span></router-link>
      <!-- <router-link exact to="/developers"><span>Developers</span></router-link> -->

      <!-- <router-link to="/front-end"><span>Front-end</span></router-link> -->
      <!-- <router-link to="/back-end"><span>Back-end</span></router-link> -->
      <!-- <router-link to="/mobile-app"><span>Mobile app</span></router-link> -->
      <!-- <router-link to="/more"><span>More</span></router-link> -->
      <a href="#" class="icon con-sub-menu">
        <span class="material-icons">
          more_horiz
        </span>

        <ul class="sub-menu-ul">
          <li>
            <router-link exact to="/About/about"><span>About</span></router-link>
          </li>
          <li>
            <router-link exact to="/About/creators"><span>Creators</span></router-link>
          </li>
          <li>
            <router-link exact to="/About/sponsor"><span>Sponsor and Backers</span></router-link>
          </li>
          <li>
            <router-link exact to="/About/afiliates"><span>Affiliates</span></router-link>
          </li>
          <!-- <li>
            <router-link exact to="/About/brand"><span>Brand</span></router-link>
          </li> -->
        </ul>

      </a>
    </div>
    <div class="nav-right">
      <vs-input @keypress.enter.prevent="searchPosts" vs-color="success" vs-icon-after vs-icon="search" placeholder="Search" v-model="$store.state.search"/>
      <vs-button class="upload-btn" vs-icon-after @click="openUpload" vs-color="success" vs-type="filled" vs-icon="add">Add</vs-button>
      <vs-button class="btn-login" v-if="!$store.state.user" @click="logIn" vs-color="#603AFF" vs-type="filled">
        <span class="text-btn-inter">Log In</span>
        <i class="flaticon-github-logo"></i>
      </vs-button>

      <btnApps />

      <div v-if="$store.state.user" class="con-img-user">
        <div :class="{'activeMenu': dropDown}" class="img-user" @click="toggleDropDown" >
          <img :src="$store.state.user.photoURL" alt="">
          <i  class="material-icons">
            keyboard_arrow_down
          </i>
        </div>
        <transition name="fade-menu-user">
          <div v-if="dropDown" class="con-menu-user">
            <h6>
              {{ $store.state.user.displayName }}
            </h6>
            <ul>
              <li>
                <router-link exact :to="`/user/${$store.state.user.uid}`"><span>Profile of DevAwesome</span></router-link>
              </li>
              <li>
                <router-link exact to="/myValued"><span>My Valued</span></router-link>
              </li>
              <li>
                <router-link exact to="/myProyects"><span>My Projects</span></router-link>
              </li>
              <li class="btn-switchx">
                  <!-- <i class="material-icons">
                    {{this.$store.state.light? 'brightness_7' : 'brightness_5'}}
                  </i> -->
                  Light mode
                  <vs-switch @change="changeTheme" v-model="$store.state.light" vs-icon-off="brightness_3" vs-icon-on="brightness_7"  />
              </li>
              <!-- <li>
                <i class="material-icons">
                  wb_sunny
                </i>
                light mode
              </li> -->
            </ul>
            <vs-button @click="signOut" vs-color="primary" vs-icon="power_settings_new" vs-type="flat">Sign Out</vs-button>
          </div>
          </transition>
      </div>


    </div>
  </nav>
</template>
<script>
import btnApps from './btnApps.vue'
export default {
  components: {
    btnApps
  },
  data: () => ({
    dropDown: false,
    search: '',
    leftPoint: 0,
    menuActive: false,
    searchActive: true
  }),
  watch: {
    '$route': function () {
      this.searchActive = this.$router.currentRoute.name !== 'search'
    },
    menuActive () {
      setTimeout(() => {
        this.outLink()
      }, 100)
    }
  },
  mounted () {
    setTimeout(() => {
      this.outLink()
    }, 300)
    window.addEventListener('scroll', this.scrollApp)
  },
  methods: {
    clickHome () {
      this.$store.state.clickHome++
    },
    changeTheme () {
      this.$vs.loading({
        background: '#352F4E'
      })
      setTimeout(() => {
        if (!this.$store.state.light) {
          document.documentElement.style.setProperty('--fondo', '#231F34')
          document.documentElement.style.setProperty('--fondo2', '#2C2741')
          document.documentElement.style.setProperty('--fondo3', '#352F4E')
          document.documentElement.style.setProperty('--text-color', 'rgb(255,255,255)')
          document.documentElement.style.setProperty('--text-alpha', 'rgba(255,255,255,.6)')
          document.documentElement.style.setProperty('--text-alpha2', 'rgba(255,255,255, .2)')
        } else {
          document.documentElement.style.setProperty('--fondo', '#f6f9fc')
          document.documentElement.style.setProperty('--fondo2', 'rgb(255,255,255)')
          document.documentElement.style.setProperty('--fondo3', 'rgb(230,230,230)')
          document.documentElement.style.setProperty('--text-color', 'rgb(35, 31, 52)')
          document.documentElement.style.setProperty('--text-alpha', 'rgba(35, 31, 52, .6)')
          document.documentElement.style.setProperty('--text-alpha2', 'rgba(35, 31, 52, .2)')
        }
        setTimeout(() => {
          this.$vs.loading.close()
        }, 300)
      }, 300)
    },
    toggleDropDown () {
      let self = this
      self.dropDown = !self.dropDown
      setTimeout(() => {
        function closeDropDown (evt) {
          if (evt.target.closest('.con-img-user')) {
            // window.removeEventListener('click', closeDropDown)
          } else {
            self.dropDown = false
            window.removeEventListener('click', closeDropDown)
          }
        }

        window.addEventListener('click', closeDropDown)
      }, 100)
    },
    searchPosts () {
      if (this.$store.state.search) {
        this.$router.push('/search/' + this.$store.state.search)
      } else {
        this.$vs.notify({
          title: 'worthless search',
          text: 'The Search value can not be empty',
          color: 'danger',
          icon: 'search'
        })
      }
    },
    openUpload () {
      this.$store.state.openUpload = true
    },
    openUploadView () {
      this.$router.push('/addPost/')
    },
    signOut () {
      this.$firebase.auth().signOut().then(() => {
        // Sign-out successful.
        this.$store.state.likes = null
        this.$store.state.user = null
      }).catch(function (error) {
        // An error happened.
        console.log('error', error)
      })
    },
    logIn () {
      // var provider = new this.$firebase.auth.GoogleAuthProvider()
      let self = this
      var provider = new this.$firebase.auth.GithubAuthProvider()
      this.$firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // // The signed-in user info.
        // var user = result.user;
        // // ...
        self.$store.state.user = result.user



        if (result.user.displayName === 'ldrovira' || result.user.displayName === 'ManuelRoviraDesign' || result.user.email == 'luisrovirac@gmail.com' || this.$store.state.user.email === 'chait7conrom@gmail.com') {
          self.$store.state.admin = true
        }
      }).catch(function (error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // ...
        console.log('error', error)
      })
    },
    scrollApp () {
      let scrollTopx = document.documentElement.scrollTop
      if (scrollTopx > 40) {
        this.menuActive = true
      } else {
        this.menuActive = false
      }
    },
    clickLink (evt) {
      // let widthx = evt.target.closest('a').offsetWidth
      // let leftx = evt.target.closest('a').offsetLeft
      // this.leftPoint = leftx + (widthx / 2)
    },
    outLink () {
      this.$nextTick(() => {
        // let widthx = this.$refs.links.querySelector('.router-link-active').offsetWidth
        // let leftx = this.$refs.links.querySelector('.router-link-active').offsetLeft
        // this.leftPoint = leftx + (widthx / 2)
      })
    }
  }
}
</script>
<style lang="stylus">
@require '../config'

.new
  position relative
  &:after
    content: 'New'
    position absolute
    right -10px
    top 5px
    font-size .5rem
    background $verde
    padding 1px 5px
    border-radius 7px
    color rgb(255,255,255) !important

.fade-menu-user-enter-active, .fade-menu-user-leave-active
  transition: opacity .5s;

.fade-menu-user-enter, .fade-menu-user-leave-to
  opacity: 0;
  transform translate(-5px,calc(100% + 23px)) !important

.vs-input
  margin-right 7px
.vs-inputx
  background var(--fondo3)
  padding 8px !important
  border 1px solid var(--fondo3) !important

.input-span-placeholder
  text-align left
  color rgba(255,255,255,.3) !important

.icon-inputx
  color rgba(255,255,255,.3)

.con-nav
  width 100%;
  background transparent
  display flex
  align-items center;
  justify-content: space-between
  padding-left 10px;
  padding-right 10px;
  box-sizing border-box
  position fixed
  z-index 10000
  top 0px;
  left 0px;
  transition all .3s ease
  background var(--fondo)
  &.menuActive
    background var(--fondo)
    box-shadow 0px 5px 20px 0px rgba(0,0,0,.1)
    padding-right 0px
    .new
      &:after
        top -14px
    .con-sub-menu
      &:hover
        .sub-menu-ul
          top 0% !important
    .nav-right
      padding-right 0px
      margin-top 0px

    .con-logo
      font-size 1rem !important
      padding-top 0px !important

    a
      padding-top 15px !important
      padding-bottom 15px !important

      &.icon
        padding-top 12px !important
        padding-bottom 10px !important
      span
       padding-top 0px !important
      &.router-link-active:after
        height 2px !important
        top auto !important
        bottom 0px
        border-radius 0px !important
      &.router-link-active
        span
          color $primary
    .punto
      border-radius 0% 0% 0 0 !important
      width 30px !important;
      height 2px !important
      transform translate(-50%)
      bottom 0px !important
  .nav-right
    display flex
    align-items center
    justify-content flex-end
    padding-right 10px
    margin-top 20px
    .upload-btn
      .vs-button-icon
        font-size 1.1rem !important
    .vs-button-text
      display flex
      align-items center
      justify-content center
      i
        margin-left 7px
        font-weight normal !important
        font-size 17px
    .vs-button
      padding 8px 8px
      margin-right 5px
      font-weight bold
      .vs-button-icon
        font-size 1.3rem
      &.btn-login
        padding 6px 10px !important
        padding-bottom 7px !important
    .con-img-user
      border-radius 5px
      cursor pointer
      position relative

      .img-user
        display flex
        align-items center
        justify-content center
        &.activeMenu
          i
            transform rotate(180deg)
      i
        margin-left 2px
        transition all .2s ease
      .con-menu-user
        position absolute
        right 0px
        bottom 0px
        background var(--fondo3)
        box-sizing border-box
        transform translate(-5px, calc(100% + 13px))
        display block
        width 100px
        padding 5px
        transition all .3s ease
        border-radius 5px
        min-width 200px
        box-shadow 0px 5px 18px 0px rgba(0,0,0,.04)
        .vs-button
          padding 6px !important
          margin-top 10px
          .vs-button-text
            font-size .6rem !important
          .vs-button-icon
            font-size .9rem !important
        .vs-switch
          border-radius 12px !important
          height 18px
          width 30px !important
          &.vs-switch-active
            .vs-circle-switch
              margin-left: calc(100% - 18px)
          .vs-circle-switch
            height 14px !important
            width 14px !important
        &:after
          content ''
          position absolute
          right 25px
          top -5px
          transform rotate(45deg)
          width 10px
          height 10px
          background inherit
        h6
          margin-bottom 10px
        ul
          li
            padding 5px
            text-align left
            font-size .7rem
            &:hover
              a
                color $primary
            &.btn-switchx
              display flex
              align-items center
              justify-content flex-start
            i
              margin-right 5px
              font-size .9rem
            .vs-switch
              margin-left auto
            a
              color var(--text-color)
              transition all .25s ease
            .router-link-active
              color $primary !important
        button
          width 100%
      img
        width 36px
        height 36px
        border-radius 5px
  .links
    position relative
    display flex
    align-items center
    justify-content flex-start
    padding-left 10px
    .con-sub-menu
      border-radius 0px !important
      > span
        transition all .3s ease
      &:hover
        background var(--fondo3)
        > span
          opacity 0
          transform translate(0, -15px) scale(.7)
        .sub-menu-ul
          opacity 1
          top 35%
          visibility visible
    > a
      display block
      position relative
      &.router-link-active
        color rgb(255,255,255) !important
    .sub-menu-ul
      position absolute
      top 100%
      left 0px
      background var(--fondo3)
      padding 5px
      text-align left
      min-width 170px
      opacity 0
      transition all .25s ease
      border-radius 6px
      visibility hidden
      box-shadow 0px 8px 20px 0px rgba(0,0,0,.05)

      li
        a
          padding 10px !important
          display block
          transition all .25s ease
          position relative
          color var(--text-color)
          &:hover
            color $primary
    .btn-open-sidebar
      padding 5px
      display none
      align-items center
      justify-content center
      background transparent
      color var(--text-color)
      margin-right 10px
      i
        font-size 1.4rem
    .con-logo
      font-weight bold
      padding-top 20px
      letter-spacing 1px
      margin-right 25px
      font-size 1.5rem
      transition all .3s ease
      position relative
      .beta
        position absolute
        background $primary
        font-size .5rem
        bottom -5px
        right -5px
        padding 1px 2px
        border-radius 3px
        color rgb(255,255,255)
      img
        width 40px
      a
        color var(--text-color) !important
        padding 0px !important
        display flex
        align-items center
        justify-content center
        span
          display block
          padding-left 5px
          font-size 1.1rem
          padding-bottom 5px
          color var(--text-color)
    .punto
      position absolute
      display block
      width 5px;
      height 5px;
      left 0px;
      background $primary
      border-radius 50%;
      bottom 4px
      transition all .2s ease
    > a
      padding 14px 20px
      // margin 0px 5px
      display block
      float left
      font-size .75rem
      color var(--text-color)
      transition all .3s ease
      border-radius 0px 0px 10px 10px
      position relative
      font-weight bold
      letter-spacing 0.5px
      &.icon
        padding-top 21px
        padding-bottom 10px

      > span
        padding-top 20px
        display block
        z-index 100
        position relative
        &.material-icons
          padding-top 10px
          font-size 24px
      &:after
        content ''
        width calc(100% - 16px);
        height 0%;
        background $primary
        position absolute
        bottom 0px
        left 8px
        z-index 10
        transition all .3s ease
        border-radius 0px 0px 10px 10px
      &:not(.router-link-active):hover
        color $primary
      &.router-link-active:after
        height 100%

@media only screen and (max-width: 1160px)
  .con-nav
    padding 10px 5px
    .nav-right
      margin-top 0px !important
    .btn-open-sidebar
      display flex !important
    .con-logo
      padding-top 0px !important
   .links
    >a
      display none !important
  .punto
    display none !important
@media only screen and (max-width: 750px)
  .con-nav
    .con-logo
      margin-right 5px !important
    .nav-right
      .vs-con-input-label
        margin-right 4px !important
      .vs-button
        margin-right 0px !important
        padding 8px 6px !important
        border-radius 0px !important
      .btn-apps
        border-radius 0px 5px 5px 0px !important
      .upload-btn
        border-radius 5px 0px 0px 5px !important
        .vs-button-icon
          font-size 1.3rem !important
        .vs-button-text
          display none !important
      .vs-button-icon
        margin-left 0px !important
@media only screen and (max-width: 650px)
  .con-logo
    span
      display none !important
@media only screen and (max-width: 600px)
  .nav-right
    padding-right 10px !important
    .btn-login
      .text-btn-inter
        display none !important
      .flaticon-github-logo
        margin-left 0px !important
@media only screen and (max-width: 480px)
  .nav-right
    .vs-con-input-label
      width auto
    .vs-con-input
      width 130px
      margin-right 0px
@media only screen and (max-width: 480px)
  .nav-right
    padding-right 0px !important
</style>
