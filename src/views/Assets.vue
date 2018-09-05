<template>
  <div>
    <titlex title="Assets" />
    <ul class="ul-assets">
      <li>
        <h3> 😊 List of github markdown Emoji 👋</h3>
      </li>
    </ul>
    <list-emoji />
  </div>
</template>
<script>
import titlex from '../components/titlex.vue'
import listEmoji from './assets/listEmoji.vue'
export default {
  components: {
    titlex,
    listEmoji
  }
}
</script>
<style lang="stylus">
.ul-assets
  width 100%
  padding 10px
  display flex
  align-items center
  justify-content center
  flex-wrap wrap
  li
    cursor pointer
    padding 10px
    background var(--fondo2)
    height 400px
    width 400px
    border-radius 10px
    display flex
    align-items center
    justify-content center
</style>
