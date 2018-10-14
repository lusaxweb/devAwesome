<template>
  <div ref="btnapps" :class="{'active': active}" class="con-btn-apps">
    <button @click="active = !active" title="Lusaxweb Apps" class="btn-apps">
      <i class="material-icons">
        {{ active? 'chevron_left' : 'apps' }}
      </i>
    </button>
    <div class="con-ul">
      <ul>
        <li>
          <a title="Vuesax" target="_blank" href="https://lusaxweb.github.io/vuesax/">
            <img src="apps/vuesax.png" alt="">
          </a>
        </li>
        <li>
          <a title="DevAwesome" target="_blank" href="https://lusaxweb.github.io/devAwesome/#/">
            <img src="apps/devawesome-blanco.png" alt="">
          </a>
        </li>
        <li>
          <a title="Vue-share" target="_blank" href="https://lusaxweb.github.io/vue-share/">
            <img src="apps/vueshare.png" alt="">
          </a>
        </li>
        <li>
          <a title="Vuenut" target="_blank" href="https://lusaxweb.github.io/vuenut.org/">
            <img src="apps/vuenut.png" alt="">
          </a>
        </li>
        <li>
          <a title="Lusaxweb" target="_blank" href="https://lusaxweb.com">
            <img src="apps/lusaxweb-blanco.png" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: false
  }),
  watch: {
    active () {
      if (this.active) {
        window.addEventListener('click', this.clickClose)
      } else {
        window.removeEventListener('click', this.clickClose)
      }
    }
  },
  methods: {
    clickClose (evt) {
      if (!evt.target.closest('.con-btn-apps')) {
        this.active = false
      }
    }
  }
}
</script>
<style lang="stylus">
@require '../config'

.con-btn-apps
  position relative
  margin-right 5px

  .btn-apps
    width 36px
    height 36px
    border-radius 5px
    background var(--fondo2)
    color var(--text-color)
    display flex
    align-content center
    justify-content center

    i
      font-size 1.45rem
      transition all .25s ease
  &.active
    .btn-apps
      i
        transform rotate(90deg)
    .con-ul
      opacity 1 !important
      visibility visible !important
      transform translate(0px, 0px) !important

  .con-ul
    width 230px
    height auto
    padding-top 8px
    position absolute
    right 0px
    opacity 0
    visibility hidden
    transform translate(0px, -10px)
    transition all .25s ease

  ul
    width 100%
    background var(--fondo2)
    display block
    position relative
    border-radius 5px
    box-shadow 0px 3px 10px 0px rgba(0,0,0,.1)
    display flex
    align-items flex-start
    justify-content flex-start
    padding 3px
    flex-wrap wrap

    &:after
      content ''
      position absolute
      width 8px
      height 8px
      background inherit
      right 15px
      top -4px
      // background rgb(255,255,255)
      transform rotate(45deg)
    li
      display block
      position relative
      margin 3px
      background var(--fondo3)
      border-radius 14px
      font-size .4rem
      cursor pointer
      transition all .25s ease
      &:hover
        background transparent
      a
        width 50px
        height 50px
        display block
        display flex
        align-items center
        justify-content center
        color var(--text-color)
        img
          width 80%

</style>
