<template>
  <div>
    <titlex title="Assets" />
    <ul class="ul-assets">
      <li>
        <h3> 😊 List of github markdown Emoji 👋</h3>
      </li>
    </ul>
    <list-emoji />

    <Carbon />
  </div>
</template>
<script>
import titlex from '../components/titlex.vue'
import Carbon from '../components/Carbon.vue'
import listEmoji from './assets/listEmoji.vue'
export default {
  components: {
    titlex,
    listEmoji,
    Carbon
  },
  created () {
    this.$nextTick(() => {
      this.$store.state.openSidebar = false
    })
  }
}
</script>
<style lang="stylus">
.ul-assets
  width 100%
  // padding 10px
  display flex
  align-items center
  justify-content center
  flex-wrap wrap
  li
    cursor pointer
    padding 20px 10px
    background var(--fondo2)
    height auto
    width 100%
    // border-radius 10px
    display flex
    align-items center
    justify-content center
</style>
