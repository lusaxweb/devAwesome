<template>
  <div class="home">
    <slide />
  </div>
</template>

<script>
import slide from '../components/Slide'
export default {
  name: 'home',
  components: {
    slide
  }
}
</script>

<style lang="stylus">
.home
  width 100%
  padding-top 100px
  position relative
</style>
