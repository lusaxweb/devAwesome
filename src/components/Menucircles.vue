<template>
  <div class="con-menu-circles">
    <button v-if="activeArrows" class="rightx" @click="scrollmoveLess()">
      <i class="material-icons">
        chevron_left
      </i>
    </button>
    <!-- {{ tags }} -->
    <ul v-show="tags.length != 0" ref="ulx">
      <li
        :key="tag.tag"
        v-for="tag in tags"
        @click="addTag(tag)"
        :class="{
          'activeTag':isActive(tag)
        }">
        <span>{{ tag.count }}</span>
        {{ tag.tag }}
      </li>
    </ul>
    <button v-if="activeArrows" class="leftx" @click="scrollmove()">
      <i class="material-icons">
        chevron_right
      </i>
    </button>

    <div v-if="tags.length == 0" class="con-circles-loading">
      <ul>
        <li class="loading-li" :style="`animation-delay: .${li}s`" :key="li" v-for="li in 5"></li>
      </ul>
    </div>
  </div>
</template>
<script>
// t = current time
// b = start value
// c = change in value
// d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2
  if (t < 1) return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}
export default {
  data: () => ({
    activeArrows: true
  }),
  computed: {
    tags () {
      return this.$store.state.tags
    }
  },
  updated () {
    let ul = this.$refs.ulx
    this.$nextTick(() => {
      if (ul.scrollWidth > ul.offsetWidth) {
        this.activeArrows = true
      } else {
        this.activeArrows = false
      }
    })
  },
  mounted () {
    let self = this
    let ul = self.$refs.ulx
    window.addEventListener('resize', () => {
      if (ul.scrollWidth > ul.offsetWidth) {
        self.activeArrows = true
      } else {
        self.activeArrows = false
      }
    })
  },
  methods: {
    changeAds () {
      // let _carbonads
      if (!document.querySelector('#carbonads')) return
      if (typeof _carbonads !== 'undefined') _carbonads.refresh()
    },
    addTag (tag) {
      this.changeAds()
      let arrayTags = JSON.stringify([...this.$store.state.tagsActive])
      if (arrayTags.indexOf(JSON.stringify(tag)) !== -1) {
        let index = this.$store.state.tagsActive.indexOf(tag)
        this.$store.state.tagsActive.splice(index, 1)
      } else {
        this.$store.state.tagsActive.push(tag)
      }
    },
    isActive (tag) {
      let arrayTags = JSON.stringify([...this.$store.state.tagsActive])
      return (arrayTags.indexOf(JSON.stringify(tag)) !== -1)
    },
    scrollmove () {
      this.scrollTo(this.$refs.ulx, this.$refs.ulx.scrollLeft + this.$refs.ulx.clientWidth / 1.5, 300)
    },
    scrollmoveLess () {
      this.scrollTo(this.$refs.ulx, this.$refs.ulx.scrollLeft - this.$refs.ulx.clientWidth / 1.5, 300)
    },
    scrollTo (element, to, duration) {
      var start = element.scrollLeft
      var change = to - start
      var currentTime = 0
      var increment = 20

      var animateScroll = function () {
        currentTime += increment
        var val = Math.easeInOutQuad(currentTime, start, change, duration)
        element.scrollLeft = val
        if (currentTime < duration) {
          setTimeout(animateScroll, increment)
        }
      }
      animateScroll()
    }
  }
}
</script>
<style lang="stylus">
@require '../config'

.con-circles-loading
  width 100%
  height 80px
  position relative
  ul
    width auto
    li
      border-bottom 1px solid var(--fondo) !important
      animation circlesLoading ease infinite 1.2s
      transition all .3s ease
      &:after
        animation colors ease infinite 4.8s
        background $primary !important
      &:before
        background var(--fondo) !important

@keyframes colors
  0%
    background $primary
  24%
    background $primary
  25%
    background $morado
  49%
    background $morado
  50%
    background $verde
  74%
    background $verde
  75%
    background $amarillo
  99%
    background $amarillo
  100%
    background $primary

@keyframes circlesLoading
  0%
    transform translate(0)
  33%
    transform translate(-10px, -10px)
  50%
    transform translate(0px, 10px)
  66%
    transform translate(10px, -10px)
  100%
    transform translate(0)

.con-menu-circles
  width 100%
  position relative
  padding-left 10px
  padding-right 10px
  box-sizing border-box
  max-height 70px
  overflow hidden
  display flex
  align-items flex-start
  z-index 200
  &:after
      content ''
      position absolute
      left 0px
      background linear-gradient(90deg, var(--fondo) 60%, rgba(0,0,0,0) 100%);
      top 0px
      height 100%
      width 5%
      display block
      z-index 150
  &:before
      content ''
      position absolute
      right 0px
      background linear-gradient(-90deg, var(--fondo) 60%, rgba(0,0,0,0) 100%);
      top 0px
      height 100%
      width 5%
      display block
      z-index 150
  button
    padding-top 10px
    padding-bottom 30px
    padding-left 10px
    padding-right 10px
    background transparent
    color var(--text-color)
    z-index 200
    transition all .25s ease
    display block
    &.rightx
      background-image: linear-gradient(90deg, var(--fondo) 0%, rgba(0,0,0,0) 100%);
    &.leftx
      background-image: linear-gradient(-90deg, var(--fondo) 0%, rgba(0,0,0,0) 100%);
    &:hover
      color $primary

  ul
    // display flex
    // align-items center
    // justify-content center
    padding-left 10px
    padding-right 10px
    margin 0 auto
    white-space: nowrap
    overflow-x auto
    overflow-y hidden
    padding-bottom 30px
    transition all .3s ease
    z-index 100
    position relative

    li
      display inline-block
      padding 25px
      padding-top 15px
      padding-left 20px
      padding-right 20px
      font-size .8rem
      cursor pointer
      position relative
      color var(--text-color)
      border-bottom 1px solid var(--fondo3)
      transition all .25s ease
      user-select none
      text-transform capitalize
      opacity .5
      backface-visibility hidden
      &.loading-li
        opacity 1 !important
      span
        position absolute
        background var(--fondo3)
        top 7px
        right 9px
        padding 0px 4px
        font-size .6rem
        border-radius 4px
        transition all .25s ease
        // opacity .5
      &:hover
        // color $primary
        opacity 1
        // font-weight bold
        span
          // background $primary
          opacity 1
          color rgb(255,255,255)
      &.activeTag
        // color var(--text-color)
        color $primary
        opacity 1 !important
        span
          background $primary
          color rgb(255,255,255)
        &:after
          // background var(--text-color) !important
          background $primary
          transform scale(1.2) translate(-50%, 50%)
      &:last-child,&:first-child
        border-bottom 1px solid rgba(0,0,0,0)
        &:before
          content '';
          left 0%
          bottom -1px
          height 1px
          width 50%
          background var(--fondo3)
          position absolute
      &:first-child
        &:before
          left 50%
      &:after
        content '';
        left 50%
        bottom 0px
        height 6px
        border-radius 50%
        width 6px
        background var(--fondo3)
        position absolute
        transform translate(-50%, 50%)
        transition all .25s ease

</style>
