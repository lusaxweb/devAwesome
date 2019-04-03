<template>
  <div :class="{'activeSidebar': $store.state.openSidebar}" class="con-sidebar">
    <div ref="links" class="con-links-sidebar">

      <div class="con-logo-sidebar">
        <router-link ref="btn1" to="/" exact>
          <img src="png/devAwesome.png" alt="">
          <span>DevAwesome</span>
        </router-link>
      </div>
      <div class="menu-sidebar">
        <!-- <router-link @mouseout.native="outLink" @mouseover.native="clickLink" exact to="/"><span>Discover</span></router-link> -->

        <router-link exact to="/"><span>Proyects</span></router-link>
        <router-link exact to="/articles"><span class="newx">Articles</span> </router-link>
        <router-link exact to="/topics"><span>Topics</span></router-link>
        <router-link exact to="/assets"><span>Assets</span></router-link>
        <!-- <router-link to="/front-end"><span>Front-end</span></router-link> -->
        <!-- <router-link to="/back-end"><span>Back-end</span></router-link> -->
        <!-- <router-link to="/mobile-app"><span>Mobile app</span></router-link> -->
        <!-- <router-link to="/more"><span>More</span></router-link> -->
        <span class="btn-puntos">
          <span class="material-icons">
            more_horiz
          </span>
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
            <router-link exact to="/About/afiliates"><span>Afiliates</span></router-link>
          </li>
        </ul>
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

.newx
  position relative
  &:after
    content: 'New'
    position absolute
    right 0px
    top 5px
    font-size .5rem
    background $verde
    padding 1px 5px
    border-radius 7px
    color rgb(255,255,255) !important

.con-sidebar
  width 100%
  max-width 300px;
  position fixed
  height 100%
  background var(--fondo)
  z-index 30000
  display none
  transform translate(-100%)
  transition all .3s ease
  .con-logo-sidebar
      font-weight bold
      padding 7px 0px
      padding-top 10px
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
    padding-top 10px
    a
      width 100%
      display block
      text-align left
      padding 10px
      color rgb(255,255,255)
      font-weight bold
      font-size .8rem
      transition all .25s ease
      border-left 0px solid $primary
      &:hover
        border-left 3px solid $primary
        color $primary
      span
        width 100%
        display block
      .material-icons
        font-size 1.5rem

.activeSidebar
  transform translate(0) !important

.btn-puntos
  span
    font-size 2rem !important

@media only screen and (max-width: 1160px)
  .con-sidebar
    display block

</style>
