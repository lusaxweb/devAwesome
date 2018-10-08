<template>
  <div class="con-bubbles">
    <ul>
      <li :style="{background: bubble.color}" :key="index" v-for="(bubble, index) in bubbles">
        {{ bubble.title }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: () => ({
    bubbles: [
      {
        src: '',
        color: '#41b883',
        title: 'V',
        value: 'vuejs'
      },
      {
        src: '',
        color: '#61dafb',
        title: 'R',
        value: 'reactjs'
      },
      {
        src: '',
        color: '#e42939',
        title: 'A',
        value: 'angularjs'
      }
    ]
  })
}
</script>
<style lang="stylus">
@require '../config'
.con-bubbles
  position fixed
  left 5px
  width 40px
  padding 2px 0px
  max-height 60vh
  top 50%
  transform translate(0%, -50%)
  background var(--fondo3)
  z-index 2000
  border-radius 20px
  ul
    display flex
    align-items center
    flex-direction column
    justify-content center
    height 100%
    li
      width 34px
      height 34px
      background $primary
      display flex
      align-items center
      justify-content center
      border-radius 50%
      margin 3px 3px
      font-weight bold
      cursor pointer
      transition all .25s ease
      &:hover
        transform translate(5px)
</style>
