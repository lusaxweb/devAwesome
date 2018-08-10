<template>
  <div
    :style="{
      maxHeight: `${heightx}px`,
      opacity: opacityx
    }"
    class="con-title">
    <!-- <span
      :key="index"
      v-for="(effect,index) in 6"
      :style="{
        transform: `translate(${index%2?'+':'-'}${mousex / (index + 1) * 0.03}px, ${index%2?'-':'+'}${mousey / (index + 1) * 0.03}px)`
      }"
      :class="`effect-${index+1}`"
      class="effect"></span> -->
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
      let heightx = Math.trunc(250 - scrollTopx * 2.5)
      if (heightx > 0 && scrollTopx * 3 < 200) {
        this.heightx = heightx
      }
      if (scrollTopx !== 0) {
        this.opacityx = `${(100 - scrollTopx * 2) * 0.01}`
      } else {
        this.opacityx = 1
      }
    }
  }
}
</script>
<style lang="stylus">
.con-title
  height 18rem;
  padding-top 3rem
  font-size 2rem
  display flex
  align-items center
  justify-content flex-start
  position relative
  width 100%
  h3
    z-index 100
    position relative
    letter-spacing 2px
    font-size 9rem
    color rgba(255,255,255,.02)
    text-align left
    transform translate(-5%)
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
</style>
