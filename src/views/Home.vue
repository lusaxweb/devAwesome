<template>
  <div class="home">
    <h1>Wall-Space</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
}
</script>

<style lang="stylus">
.home
  height 100vh
  display flex
  align-items center
  justify-content center
  font-size 7rem
  color rgba(255,255,255,.02)
  user-select none
</style>
