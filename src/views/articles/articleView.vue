<template>
  <div v-if="article" class="con-article-view">
    <!-- <titlex :title="article.title" /> -->
    <header class="headerx_">
      <h2 class="h2x">
        {{ article.title }}
      </h2>

      <div class="con-user-article">
        <a target="_blank" :href="article.user.githubUrl">
          <img v-if="article.user.photoURL !== 'devAwesome'" :src="article.user.photoURL" alt="">
          <img v-else class="devAwesome-logo" src="png/devAwesome.png" alt="">
          <span>{{ article.user.displayName }}</span>
        </a>
      </div>
    </header>
    <div class="con-valuesx">
      <ul class="ul-valuesx">
        <li class="viewsx">
          <i class="material-icons">
            visibility
          </i>
          <span>{{ article.views }}</span>
        </li>

        <li :class="{'isLike': getIsLike}" @click="addlike" class="likex">
          <i class="material-icons">
            favorite
          </i>
          <span>{{ article.likes ? Object.keys(article.likes).length : 0 }}</span>
        </li>

        <li @click="copyLink" class="linkx">
          <i class="material-icons">
            link
          </i>
        </li>
      </ul>
    </div>
    <div class="con-article-html">
      <div class="con-htmlx" v-html="getHtml"></div>
    </div>

    <!-- <Carbon />
     -->
     <CodeFundView
      propertyId="8aed6e67-5cf6-4217-a805-d1713785b7e5"
      />
  </div>
</template>
<script>
import Carbon from '../../components/Carbon.vue'
import titlex from '../../components/titlex.vue'
import CodeFundView from '../../components/CodeFundView.vue'
import 'highlight.js/styles/hybrid.css'
import hljs from 'highlight.js'
var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }

    return '' // use external default escaping
  }
})

md.use(require('markdown-it-container'), 'warning')

export default {
  components: {
    titlex,
    Carbon,
    CodeFundView
  },
  data: () => ({
    article: null
  }),
  mounted () {
    this.$nextTick(() => {
      this.getArticle()
      if (!localStorage.hasOwnProperty('articleViews')) {
        localStorage.articleViews = '[]'
      }
      let arrayArticlesViews = JSON.parse(localStorage.getItem('articleViews'))
      console.log('arrayArticlesViews', arrayArticlesViews)
      if (!arrayArticlesViews.includes(this.$router.currentRoute.params.nameArticle)) {
        arrayArticlesViews.push(this.$router.currentRoute.params.nameArticle)
        this.addView()
      }
      localStorage.setItem('articleViews', JSON.stringify(arrayArticlesViews))
      // localStorage.setItem('articleViews', '[]')
    })
  },
  computed: {
    getIsLike () {
      let article = this.article
      if (article.hasOwnProperty('likes') && this.$store.state.user) {
        return article.likes.hasOwnProperty(this.$store.state.user.uid)
      } else {
        return false
      }
    },
    getHtml () {
      if (this.article) {
        let render = md.render(this.article.markdown)
        return render
      }
    }
  },
  methods: {
    copyLink () {
      let link = 'https://lusaxweb.github.io/devAwesome/#' + this.$router.currentRoute.fullPath
      let textTitle = this.article.title
      // Crea un campo de texto "oculto"
      var aux = document.createElement('input')
      aux.classList.add('no-input')
      // Asigna el contenido del elemento especificado al valor del campo
      aux.setAttribute('value', link)

      // Añade el campo a la página
      document.body.appendChild(aux)

      // Selecciona el contenido del campo
      aux.select()

      // Copia el texto seleccionado
      document.execCommand('copy')

      // Elimina el campo de la página
      document.body.removeChild(aux)
      this.$vs.notify({
        title: 'Link copied',
        text: textTitle,
        color: 'success',
        icon: 'link'
      })
    },
    addlike () {
      if (!this.$store.state.user) {
        this.$vs.notify({
          title: 'Necessary Login User',
          text: 'To be able to do this action you need a user in login',
          color: 'danger',
          icon: 'lock'
        })
      } else if (this.getIsLike) {
        this.$firebase.database().ref('articles').child(this.$router.currentRoute.params.nameArticle + '/likes/' + this.$store.state.user.uid).remove()
      } else {
        this.$firebase.database().ref('articles').child(this.$router.currentRoute.params.nameArticle + '/likes/' + this.$store.state.user.uid).set(true)
      }
    },
    addView () {
      let article = this.article
      this.$firebase.database().ref('articles').child(this.$router.currentRoute.params.nameArticle + '/views').set(article.views + 1)
    },
    getArticle () {
      this.$firebase.database().ref('articles').child(this.$router.currentRoute.params.nameArticle).on('value', (snapshot) => {
        let article = snapshot.val()
        this.article = article
      })
    }
  }
}
</script>
<style lang="stylus">
@require '../../config'
.headerx_
  width 100%
  margin auto
  max-width 1000px
  position relative
  display block
  z-index 1000
.con-user-article
  position absolute
  right -10px
  bottom -15px
  span
    background var(--fondo3)
    padding 3px 6px
    border-radius 5px
    position relative
    &:after
      position absolute
      left -10px
      top 50%
      content ''
      width 10px
      height 4px
      background var(--fondo3)
  a
    display flex
    align-items center
    justify-content center
    color rgb(255,255,255)
    img
      margin-right 6px
      width 50px
      border-radius 10px
      padding 10px
      background var(--fondo3)

.con-valuesx
  position fixed
  left calc(50% - 1200px / 2)
  top 40%
  transform translate(0, -50%)
  z-index 100
  .ul-valuesx
    li
      width 45px
      height 45px
      background var(--fondo)
      border 2px solid var(--fondo2)
      margin 8px
      border-radius 10px
      position relative
      display flex
      align-items center
      justify-content center
      cursor default
      transition all .25s ease

      &.likex
        cursor pointer
        background var(--fondo2)
        &.isLike
          border 2px solid $primary
          color $primary
          span
            background $primary
            color rgb(255,255,255)
        &:hover
          background $primary
          border 2px solid $primary
          color rgb(255,255,255)
          span
            background $primary
            transform translate(140%, -50%)
      &.linkx
        cursor pointer
        background var(--fondo2)
        &:hover
          background $morado
          border 2px solid $morado
      i
        font-size 1.3rem

      span
        position absolute
        right 0px
        top 50%
        background var(--fondo3)
        transform translate(100%, -50%)
        padding 2px 4px
        padding-left 7px
        border-radius 5px
        font-size .75rem
        font-weight bold
        transition all .25s ease
        &:after
          content ''
          left -4px
          top 6px
          position absolute
          background inherit
          width 8px
          height 8px
          transform rotate(45deg)
.con-article-view
  padding 0px 20px
  margin-bottom 20px
  .h2x
    // margin-top 90px
    padding 20px
    padding-bottom 15px
    padding-top 90px
    text-align left
    max-width 1000px
    margin 0px auto

.con-article-html
  position relative
  display block
  width 100%
  max-width 1000px
  margin auto
  overflow hidden
  clear both
  margin-bottom 30px

@media only screen and (max-width: 1250px)
  .con-valuesx
    left 3px !important
</style>
