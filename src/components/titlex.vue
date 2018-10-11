<template>
      <!-- maxHeight: `${heightx}px`, -->
  <div
    :style="{
      opacity: opacityx
    }"
    class="con-title">
    <h3>{{ title }}</h3>

  </div>
</template>
<script>

export default {
  props: {
    title: {
      default: 'title',
      type: String
    }
  },
  data: () => ({
    heightx: 250,
    opacityx: 1,
    mousex: 0,
    mousey: 0
  }),
  mounted () {
    window.addEventListener('scroll', this.scrollApp)
    window.addEventListener('mousemove', this.moseMove)
  },
  methods: {
    moseMove (evt) {
      let x = evt.clientX
      let y = evt.clientY
      this.mousex = x
      this.mousey = y
    },
    scrollApp () {
      let scrollTopx = document.documentElement.scrollTop
      // let heightx = Math.trunc(250 - scrollTopx * 2.5)
      // if (heightx > 0 && scrollTopx * 3 < 200) {
      //   this.heightx = heightx
      // }
      if (scrollTopx !== 0) {
        this.opacityx = `${(100 - scrollTopx) * 0.01}`
      } else {
        this.opacityx = 1
      }
    }
  }
}
</script>
<style lang="stylus">
@require '../config'
.con-title
  padding-top 3rem
  font-size 2rem
  display flex
  align-items center
  justify-content flex-start
  position relative
  width 100%
  overflow hidden
  clear both
  h3
    z-index 100
    position relative
    letter-spacing 2px
    font-size 5.5rem
    color rgba(0,0,0,.1)
    text-align left
    transform translate(-4%)
    text-overflow:ellipsis
    white-space:nowrap
    overflow:hidden
    cursor default
    user-select none
  .effect
    position absolute
    left 0px;
    top 0px
    display block
    width 20px;
    height 100%;
    border-radius 20px;
    z-index 10
    transform translate(-50%)
    // background-color: #08AEEA;
    // background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
    &.effect-1
      left 25%
      background-image: linear-gradient(0deg, #08AEEA 0%, rgba(0,0,0,0) 100%);
      height 80%;
    &.effect-2
      left 34%
      background-image: linear-gradient(0deg, #FC00FF 0%, rgba(0,0,0,0) 100%);
      height 55%;
    &.effect-3
      left 46%
      background-image: linear-gradient(1deg, #FF3CAC 0%, #784BA0 50%, rgba(0,0,0,0) 100%);
      height 96%;
    &.effect-4
      left 57%
      background-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, #2BD2FF 62%, #2BFF88 100%);
      height 87%;
    &.effect-5
      left 62%
      background-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, #C850C0 46%, #FFCC70 100%);
      height 45%;

    &.effect-6
      left 78%
      background-image: linear-gradient(185deg, rgba(0,0,0,0) 0%, #9FACE6 100%);
      height 79%;

@media only screen and (max-width: 800px)
  .con-title
    h3
      font-size 6rem !important
@media only screen and (max-width: 600px)
  .con-title
    h3
      font-size 2rem !important
      text-align center
      width 100%
      transform translate(0)
      color rgb(255,255,255)
      padding-top 30px
      padding-bottom 10px

</style>
