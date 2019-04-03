<template>
  <div>
    <titlex title="Assets" />
    <ul class="ul-assets">
      <li>
        <h3> 😊 List of github markdown Emoji 👋</h3>
      </li>
    </ul>
    <list-emoji />

    <!-- <Carbon /> -->
    <CodeFundView
      propertyId="8aed6e67-5cf6-4217-a805-d1713785b7e5"
      />
  </div>
</template>
<script>
import titlex from '../components/titlex.vue'
import Carbon from '../components/Carbon.vue'
import listEmoji from './assets/listEmoji.vue'
import CodeFundView from '../components/CodeFundView.vue'
export default {
  components: {
    titlex,
    listEmoji,
    Carbon,
    CodeFundView
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
