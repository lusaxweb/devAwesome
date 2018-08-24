<template>
  <div :class="{'activeSidebar': $store.state.openSidebar}" class="con-sidebar">
    <div ref="links" class="con-links-sidebar">

      <div class="con-logo">
        <router-link ref="btn1" to="/" exact>
          <img src="png/devAwesome.png" alt="">
          <span>DevAwesome</span>
        </router-link>
      </div>
      <div class="menu-sidebar">
        <router-link @mouseout.native="outLink" @mouseover.native="clickLink"  to="/front-end"><span>Front-end</span></router-link>
        <router-link @mouseout.native="outLink" @mouseover.native="clickLink"  to="/back-end"><span>Back-end</span></router-link>
        <router-link @mouseout.native="outLink" @mouseover.native="clickLink"  to="/mobile-app"><span>Mobile app</span></router-link>
        <router-link @mouseout.native="outLink" @mouseover.native="clickLink" to="/more"><span>More</span></router-link>
        <router-link class="icon" @mouseout.native="outLink" @mouseover.native="clickLink" to="/points">
          <span class="material-icons">
            more_horiz
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('touchstart', this.onTouchStart)
      window.addEventListener('touchend', this.onTouchEnd)
    })
  },
  data: () => ({
    touchStart: {}
  }),
  methods: {
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },
    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.$store.state.openSidebar = true
        } else {
          this.$store.state.openSidebar = false
        }
      }
    }
  }
}
</script>
<style lang="stylus">
@require '../config'
.con-sidebar
  width 100%
  max-width 300px;
  position fixed
  height 100%
  background $fondo2
  z-index 30000
  display none
  transform translate(-100%)
  transition all .3s ease
  .con-logo
      font-weight bold
      padding 15px 0px
      width 100%
      letter-spacing 1px
      font-size 1.5rem
      transition all .3s ease
      box-shadow 0px 4px 15px 0px rgba(0,0,0,.1)
      img
        width 40px
      a
        color rgb(255,255,255)
        padding 0px !important
        display flex
        align-items center
        justify-content center
        span
          display block
          padding-left 5px
          font-size 1.1rem
          padding-bottom 5px
  .menu-sidebar
    width 100%
    position relative
    a
      width 100%
      display block
      text-align left
      padding 15px 15px
      color rgb(255,255,255)

.activeSidebar
  transform translate(0) !important

@media only screen and (max-width: 800px)
  .con-sidebar
    display block

</style>
