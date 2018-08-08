<template>
  <nav :class="{'menuActive':menuActive}" class="con-nav">
    <div class="con-logo">
      VueWell
    </div>
    <div ref="links" class="links">
      <router-link @click.native="clickLink" ref="btn1" to="/" exact>Home</router-link>
      <router-link @click.native="clickLink"  to="/wallpapers">Wallpapers</router-link>
      <router-link @click.native="clickLink" to="/strikers">Strikers</router-link>
      <router-link @click.native="clickLink" to="/emoji">Emoji</router-link>
      <router-link @click.native="clickLink" to="/more">More</router-link>
      <span
        :style="{
          left: `${this.leftPoint}px`
        }"
        class="punto"></span>
    </div>
    <div class="nav-right">
      <button>Log In</button>
      <button>Sign Up</button>
    </div>
  </nav>
</template>
<script>
export default {
  data: () => ({
    leftPoint: 0,
    menuActive: false
  }),
  mounted () {
    setTimeout(() => {
      let widthx = this.$refs.links.querySelector('.router-link-active').offsetWidth
      let leftx = this.$refs.links.querySelector('.router-link-active').offsetLeft
      this.leftPoint = leftx + (widthx / 2)
    }, 300)
    window.addEventListener('scroll', this.scrollApp)
  },
  methods: {
    scrollApp () {
      let scrollTopx = document.documentElement.scrollTop
      if (scrollTopx > 40) {
        this.menuActive = true
      } else {
        this.menuActive = false
      }
    },
    clickLink (evt) {
      let widthx = evt.target.offsetWidth
      let leftx = evt.target.offsetLeft
      this.leftPoint = leftx + (widthx / 2)
    }
  }
}
</script>
<style lang="stylus">
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
    a
      padding 12px 15px !important
    .punto
      border-radius 0% 0% 0 0 !important
      width 30px !important;
      height 2px !important
      transform translate(-50%)
  .nav-right
    button
      margin 0px 5px
      padding 5px 10px
      border-radius 5px;
  .links
    position relative
    .punto
      position absolute
      display block
      width 5px;
      height 5px;
      left 0px;
      background rgb(255, 60, 172)
      border-radius 50%;
      bottom 0px
      transition all .3s ease
    a
      padding 20px 15px
      display block
      float left
      font-size .8rem
      color rgb(255,255,255)
      transition all .3s ease
      &:hover
        color rgb(255, 60, 172)
      &.router-link-active
        color rgb(255, 60, 172)
</style>
