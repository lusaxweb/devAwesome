<template>
  <div class="con-menu-circles">
    <button v-if="activeArrows" class="rightx" @click="scrollmoveLess()">
      <i class="material-icons">
        chevron_left
      </i>
    </button>
    <ul ref="ulx">
      <li
        :key="tag"
        v-for="tag in tags"
        @click="addTag(tag)"
        :class="{
          'activeTag':isActive(tag)
        }">
        {{ tag }}
      </li>
    </ul>
    <button v-if="activeArrows" class="leftx" @click="scrollmove()">
      <i class="material-icons">
        chevron_right
      </i>
    </button>
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
  props: {
    tags: {
      type: [Object, Array]
    }
  },
  data: () => ({
    activeArrows: false,
    tagsActive: []
  }),
  watch: {
    tagsActive () {
      this.$parent.tagsActive = this.tagsActive
    }
  },
  updated () {
    let ul = this.$refs.ulx
    this.$nextTick(()=>{
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
    addTag (tag) {
      if(this.tagsActive.includes(tag)) {
        let index = this.tagsActive.indexOf(tag)
        this.tagsActive.splice(index, 1)
      } else {
        this.tagsActive.push(tag)
      }
    },
    isActive (tag) {
      return this.tagsActive.includes(tag)
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
.con-menu-circles
  width 100%
  position relative
  padding-left 20px
  padding-right 20px
  box-sizing border-box
  max-height 90px
  overflow hidden
  display flex
  align-items flex-start
  &:after
      content ''
      position absolute
      left 0px
      background linear-gradient(90deg, $fondo 60%, rgba(0,0,0,0) 100%);
      top 0px
      height 100%
      width 5%
      display block
      z-index 150
  &:before
      content ''
      position absolute
      right 0px
      background linear-gradient(-90deg, $fondo 60%, rgba(0,0,0,0) 100%);
      top 0px
      height 100%
      width 5%
      display block
      z-index 150
  button
    padding-top 10px
    padding-bottom 30px
    padding-left 0px
    padding-right 0px
    background transparent
    color rgb(255,255,255)
    z-index 200
    transition all .25s ease
    &.rightx
      background-image: linear-gradient(90deg, $fondo 0%, rgba(0,0,0,0) 100%);
    &.leftx
      background-image: linear-gradient(-90deg, $fondo 0%, rgba(0,0,0,0) 100%);
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
    padding-bottom 40px
    transition all .3s ease
    z-index 100
    position relative

    li
      display inline-block
      padding 30px
      padding-top 15px
      padding-left 20px
      padding-right 20px
      font-size .8rem
      cursor pointer
      position relative
      color rgba(255,255,255,.23)
      border-bottom 1px solid $fondo3
      transition all .25s ease
      user-select none
      text-transform capitalize
      &:hover
        color rgba(255,255,255,1)
      &.activeTag
        color rgba(255,255,255,1)
        &:after
          background rgba(255,255,255,1) !important
          transform scale(1.2) translate(-50%, 50%)
      &:last-child,&:first-child
        border-bottom 1px solid rgba(0,0,0,0)
        &:before
          content '';
          left 0%
          bottom -1px
          height 1px
          width 50%
          background $fondo3
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
        background $fondo3
        position absolute
        transform translate(-50%, 50%)
        transition all .25s ease

</style>
