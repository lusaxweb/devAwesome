<template>
  <nav :class="{'menuActive':menuActive}" class="con-nav">

    <div ref="links" class="links">

      <div class="con-logo">
        <router-link ref="btn1" to="/" exact>
          Wall-Space
        </router-link>
      </div>

      <router-link @mouseout.native="outLink" @mouseover.native="clickLink"  to="/wallpapers"><span>Wallpapers</span></router-link>
      <router-link @mouseout.native="outLink" @mouseover.native="clickLink" to="/Icons"><span>Icons</span></router-link>
      <router-link @mouseout.native="outLink" @mouseover.native="clickLink" to="/strikers"><span>Strikers</span></router-link>
      <router-link @mouseout.native="outLink" @mouseover.native="clickLink" to="/emoji"><span>Emoji</span></router-link>
      <router-link @mouseout.native="outLink" @mouseover.native="clickLink" to="/more"><span>More</span></router-link>
      <router-link class="icon" @mouseout.native="outLink" @mouseover.native="clickLink" to="/more">
        <span class="material-icons">
          more_horiz
        </span>
      </router-link>
      <span
        :style="{
          left: `${this.leftPoint}px`
        }"
        class="punto"></span>
    </div>
    <div class="nav-right">
      <button v-if="!$store.state.user" @click="logIn">Log In</button>
      <button v-else @click="signOut">Sign Out</button>

      <div v-if="$store.state.user" class="con-img-user">
        <img :src="$store.state.user.photoURL" alt="">
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data: () => ({
    leftPoint: 0,
    menuActive: false
  }),
  watch:{
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
    signOut () {
      this.$firebase.auth().signOut().then(function () {
        // Sign-out successful.
        console.log('salio')
      }).catch(function (error) {
        // An error happened.
        console.log('error al salir', error)
      })
    },
    logIn () {
      var provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // // The signed-in user info.
        // var user = result.user;
        // // ...
        console.log(result)
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
      });
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
      console.log(evt)
      let widthx = evt.target.closest('a').offsetWidth
      let leftx = evt.target.closest('a').offsetLeft
      this.leftPoint = leftx + (widthx / 2)
    },
    outLink () {
      let widthx = this.$refs.links.querySelector('.router-link-active').offsetWidth
      let leftx = this.$refs.links.querySelector('.router-link-active').offsetLeft
      this.leftPoint = leftx + (widthx / 2)
    }
  }
}
</script>
<style lang="stylus">
@require '../config'
.con-nav
  width 100%;
  overflow hidden
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
  &.menuActive
    background rgb(34, 30, 51)
    box-shadow 0px 5px 20px 0px rgba(0,0,0,.1)
    .con-logo
      font-size 1rem !important
      padding-top 0px !important
    a
      padding-top 15px !important
      padding-bottom 15px !important
      &.icon
        padding-top 10px !important
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
          color $primary !important
    .punto
      border-radius 0% 0% 0 0 !important
      width 30px !important;
      height 2px !important
      transform translate(-50%)
  .nav-right
    display flex
    align-items center
    justify-content flex-end
    padding-right 10px
    .con-img-user
      width 32px
      height 32px
      overflow hidden
      border-radius 5px
      img
        width 100%
    button
      margin 0px 5px
      padding 5px 10px
      border-radius 5px;
      color $primary
      background rgba(255,255,255,.05)
      transition all .3s ease
      &:hover
        background rgba(255,255,255,.1)
  .links
    position relative
    display flex
    align-items center
    justify-content flex-start
    padding-left 20px
    .con-logo
      font-weight bold
      padding-top 20px
      letter-spacing 1px
      margin-right 30px
      font-size 1.5rem
      transition all .3s ease
      a
        color rgb(255,255,255)
    .punto
      position absolute
      display block
      width 5px;
      height 5px;
      left 0px;
      background $primary
      border-radius 50%;
      bottom 0px
      transition all .2s ease
    > a
      padding 18px 20px
      // margin 0px 5px
      display block
      float left
      font-size .75rem
      color rgb(255,255,255)
      transition all .3s ease
      border-radius 0px 0px 10px 10px
      position relative
      font-weight bold
      letter-spacing 0.5px
      &.icon
        padding-top 23px
        padding-bottom 12px
      span
        padding-top 30px
        display block
        z-index 100
        position relative
        &.material-icons
          padding-top 20px
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
</style>
