<template>
  <transition name="uploadx">
    <div v-if="$store.state.openUpload" class="open-uploadx">
      <ul class="ul-uploadx">
        <vs-button @click="$store.state.openUpload = false" class="x-uploadx" color="primary" vs-type="border" vs-icon="clear"></vs-button>
        <li @click="openUploadPost" class="add-post">
          Add a Project
          <i class="material-icons">
            flip_to_front
          </i>
        </li>
        <li @click="openUploadArticle" class="add-article">
          Add a Article
          <i class="material-icons">
            library_books
          </i>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
export default {
  methods: {
    openUploadPost () {
      this.$router.push('/addPost/')
      this.$store.state.openUpload = false
    },
    openUploadArticle () {
      this.$router.push('/addPostBlog/')
      this.$store.state.openUpload = false
    },
  }
}
</script>
<style lang="stylus">
@require '../config'

.uploadx-enter-active, .uploadx-leave-active {
  transition: all .3s;
}
.uploadx-enter, .uploadx-leave-to
  opacity: 0;
  transform scale(1.1)

.x-uploadx
  position absolute !important
  right 0px
  top 0px
  padding 10px
  background $primary
  border-radius 10px
  cursor pointer
  transform translate(35px, -35px)

.open-uploadx
  position fixed
  left 0px
  top 0px
  z-index 10000
  width 100%
  height 100%
  background alpha($fondo, .85)
  display flex
  align-items center
  justify-content center
  .ul-uploadx
    position relative
    height auto
    display flex
    align-content center
    justify-content center

    li
      margin 15px
      width 200px
      height 200px
      border-radius 10px
      display flex
      align-items center
      justify-content center
      flex-direction column
      background var(--fondo2)
      cursor pointer
      transition all .25s ease
      &:hover
        background $verde
      i
        font-size 3rem

@media only screen and (max-width: 650px)
  .ul-uploadx
    flex-direction column
</style>
