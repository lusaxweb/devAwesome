<template>
  <li @click="openArticle(article, index)" >
    <div class="con-img-article">
      <img :src="article.cover" alt="">
    </div>
    <div class="con-header-body">
      <header>
        <div class="con-userx">
          <a target="_blank" :href="article.user.githubUrl">
            <img v-if="article.user.photoURL !== 'devAwesome'" :src="article.user.photoURL" alt="">
            <img v-else class="devAwesome-logo" src="png/devAwesome.png" alt="">
            <span>{{ article.user.displayName }}</span>
          </a>
        </div>
        <h2 >{{ article.title }}</h2>
      </header>
      <div  class="body-articlex">
        <p>
          {{ article.description }}
        </p>
      </div>
    </div>

    <div class="values-article">
      <ul>
        <li>
          <i class="material-icons">
            visibility
          </i>

          <span>{{ article.views }}</span>
        </li>
        <li :class="{'is-like': getIsLike(article)}">
          <i class="material-icons">
            favorite
          </i>
          <span>{{ article.likes ? Object.keys(article.likes).length : 0}}</span>
        </li>
      </ul>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    article: {},
    index: {}
  },
  methods: {
    getIsLike (article) {
      if (article.hasOwnProperty('likes') && this.$store.state.user) {
        return article.likes.hasOwnProperty(this.$store.state.user.uid)
      } else {
        return false
      }
    },
    openArticle (article, name) {
      this.$router.push({
        path: `/article/${name}`
      })
    },
  }
}
</script>
<style lang="stylus">

.values-article
  position absolute
  right 10px
  top 50%
  transform translate(60%, -50%)
  li
    width auto
    height auto
    padding 8px
    display block
    display flex
    align-items center
    justify-content center
    border-radius 5px
    margin 7px 0px
    background var(--fondo3)
    display flex
    align-items center
    justify-content center
    cursor pointer
    &.is-like
      background $primary !important
    span
      font-size .6rem
      padding-left 5px
    i
      font-size 1rem

.con-articles
  width 100%

.ul-articles
  width 100%
  max-width 800px
  margin auto
  padding 10px
  padding-right 25px

.articlex
    width 100%
    height auto
    position relative
    background var(--fondo2)
    border-radius 8px
    margin 20px 0px
    display flex
    align-items stretch
    justify-content center
    cursor pointer
    transition all .25s ease
    box-shadow 0px 0px 0px 0px rgba(0,0,0,0)
    &:hover
      transform translate(0, -5px)
      box-shadow 0px 3px 10px 0px rgba(0,0,0,.05)
    .con-img-article
        width 140px
        max-width 140px
        overflow hidden
        flex-grow: 1 !important
        position relative
        display block
        cursor pointer
        img
          display block
          position relative
          width 100%
          border-radius 10px 0px 0px 10px
          background rgb(255,255,255)
    .con-header-body
      width calc(100% - 140px)
      display flex
      align-items center
      justify-content stretch
      flex-direction column
    .body-articlex
      width 100%
      display flex
      align-items stretch
      justify-content flex-start
      position relative
      padding 5px 10px
      cursor pointer
      p
        display block
        font-size .8rem
        padding 5px
        padding-top 0px
        text-align left
        flex-grow: 1 !important
        width calc(100% - 100px)
    header
      position relative
      width 100%
      h2
        text-align left
        padding 10px
        padding-bottom 0px
        padding-left 15px
        padding-right 50px
        font-size 1.2rem
        cursor pointer
    .con-userx
      position absolute
      right 0px
      top 0px
      display flex
      align-items center
      font-size .75rem
      justify-content flex-start
      background var(--fondo3)
      padding 4px
      padding-right 10px
      border-radius 5px
      transform translate(-10px, -15px)
      transition all .25s ease
      border 2px solid var(--fondo3)
      &:hover
        background var(--fondo2)
        border 2px solid var(--fondo3)
      a
        display flex
        align-items center
        color rgb(255,255,255)
      img
        width 35px
        border-radius 5px
        margin-right 6px
        &.devAwesome-logo
          padding 4px
</style>
