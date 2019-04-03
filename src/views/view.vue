<template>
  <transition name="view">
    <div v-if="postActive" class="con-view">
      <button title="Prev Post" @click="prevPost" class="prev-btn" >
        <i class="material-icons">
          chevron_left
        </i>
      </button>
      <button title="Next Post" @click="nextPost" class="next-btn" >
        <i class="material-icons">
          chevron_right
        </i>
      </button>
      <header>
        <h3>{{ post.title }}</h3>
        <button class="btn-close" @click="close()">
          <i class="material-icons">
            clear
          </i>
        </button>
      </header>
      <div class="view">
        <div class="con-img-des">

        <div class="con-img-view">
          <div class="content-view">
            <div v-if="readmeActive" class="readmex" v-html="readme"></div>
            <div id="div-with-loading" class="img-view">
              <a target="_blank" :href="`${post.website}?ref=lusaxweb.github.io`">
                <img :class="{'imageLoaded':imageLoaded}" v-show="imageLoaded" :src="post.image" alt="">
                <div class="loadingx"></div>
              </a>
            </div>

            <footer class="footer-content">
              <button v-if="post.github" @click="getReadme(post) ,readmeActive =! readmeActive" >Readme</button>
            </footer>
          </div>
          <div class="con-similar-posts">
            <ul>
              <li
                :key="index"
                v-if="index < maxSimilar"
                :title="morePosts[post].title"
                @click="openPost(morePosts[post], post)"
                v-for="(post, index) in Object.keys(morePosts)">
                <img :src="morePosts[post].miniImage" alt="">
              </li>
            </ul>

            <button class="expand-similar-btn" @click="maxSimilar == 4 ? maxSimilar = 12 : maxSimilar = 4">
              <i class="material-icons">
                {{ maxSimilar == 4 ? 'add' : 'remove' }}
              </i>
            </button>
          </div>
        </div>

        <div class="con-description-view">
          <div class="con-user-view">
            <div v-if="post.user" class="text-user">

              <router-link v-if="post.user.photoURL !== 'devAwesome'" :to="`/user/${post.user.uid}`">
                <div class="con-img-user-view">
                  <img v-if="post.user.photoURL !== 'devAwesome'" :src="post.user.photoURL" alt="">
                  <img v-else class="devAwesome-logo" src="png/devAwesome.png" alt="">
                </div>
                <p>{{ post.user.displayName }}</p>
              </router-link>

              <a v-else target="_blank" :href="post.user.githubUrl">
                <div class="con-img-user-view">
                  <img v-if="post.user.photoURL !== 'devAwesome'" :src="post.user.photoURL" alt="">
                  <img v-else class="devAwesome-logo" src="png/devAwesome.png" alt="">
                </div>
                <p>{{ post.user.displayName }}</p>
              </a>

            </div>
            <a target="_blank" :href="`${post.website}?ref=lusaxweb.github.io`" class="btn-follow">
              WebSite
            </a>
          </div>

          <p class="descriptionx">
            {{ post.description }}
          </p>

          <div class="con-tags">
            <span :title="`Search ${tag}`" @click="openTag(tag)" :key="tag" v-for="tag in tags">
              {{ tag }}
            </span>
          </div>

          <div class="con-interaction-view">
            <button :class="{'disabledx':!$store.state.user, 'activeLike': getIsLike()}" @click="addlike">
              <i class="material-icons">
                favorite
              </i>
              Like
            </button>
            <button v-if="post.github" class="button-a">
              <a target="_blank" :href="`${post.github}?ref=lusaxweb.github.io`" class="btn-follow">
              Github
              <span class="star">
                <i class="material-icons">
                  star
                </i>
                {{ star }}
              </span>

              </a>
            </button>
            <button v-if="post.twitter" class="button-a">
              <a target="_blank" :href="`https://twitter.com/${post.twitter}?ref=lusaxweb.github.io`" class="btn-follow">
              Twitter
              </a>
            </button>
            <button @click="copyLink" title="Copy Link" class="btn-share">
              <i class="material-icons">
                link
              </i>
            </button>
          </div>

          <div class="con-values">
            <ul>
              <li>
                <i class="material-icons">
                  visibility
                </i>
                {{ post.views }}
              </li>
              <li>
                <i class="material-icons">
                  favorite
                </i>
                {{ post.likes ? Object.keys(post.likes).length : 0 }}
              </li>
            </ul>
          </div>
          <!-- <Carbon-view /> -->
          <CodeFundView
            v-if="renderComponent"
           />
          <div class="con-comments">
            <h5>Comments</h5>
            <div class="add-comment">
              <textarea
                v-model="commentx"
                @keypress.enter.prevent="sendComment(post)"
                placeholder="Your comment"></textarea>
                <vs-button @click="sendComment(post)" vs-color="success" vs-type="filled">Comment</vs-button>

            </div>

            <ul class="comments">
              <li
                :key="index"
                v-for="(comment, index) in post.comments">
                <header>
                  <a target="_blank" :href="comment.githubUrl">
                  <img :src="comment.src" alt="">

                  <div>
                    <h5>{{ comment.name }}</h5>
                    <!-- <p>Berlin, alemania</p> -->
                  </div>
                  </a>
                </header>
                <p>
                  {{ comment.comment }}
                </p>
              </li>
            </ul>
          </div>
          <!-- {{ post }} -->
           </div>
        </div>

      </div>
    </div>
  </transition>
</template>

<script>

import CarbonView from '../components/CarbonView.vue'
import CodeFundView from '../components/CodeFundView.vue'
// import hljs from 'highlight.js/lib/index.js'
// import 'highlight.js/styles/default.css'
// import 'vuesax/dist/vuesax.css'

export default {
  name: 'viewx',
  components: {
    CarbonView,
    CodeFundView
  },
  data: () => ({
    renderComponent: true,
    star: 0,
    tags: [],
    goLess: -1,
    imageLoaded: false,
    commentx: '',
    post: {},
    postActive: true,
    morePosts: {},
    namePost: '',
    readme: null,
    readmeActive: false,
    maxSimilar: 4
  }),
  computed: {
    getUrlTwitter () {
      return 'http://twitter.com/home?status=https://lusaxweb.github.io/devAwesome/#view/-LOHXwbw4sWDwftqxGiH'
    }
  },
  watch: {
    '$route.params.namePost': function () {
      this.goLess--
      this.getPost()
      // this.getPosts()
      this.changeAds()
      this.readmeActive = false
    }
  },
  mounted () {

    this.$nextTick(() => {

      this.$vs.loading({
        container: '#div-with-loading',
        scale: 0.8,
        background: '#352F4E'
      })
    })
    this.namePost = this.$router.currentRoute.params.namePost
    this.getPost()
    this.getPosts()
  },
  beforeDestroy () {
    this.$firebase.database().ref('posts').child(this.namePost).off()
    this.$firebase.database().ref('posts').off()
  },
  methods: {
    forceRerender () {
      // Remove my-component from the DOM
      this.renderComponent = false

      // If you like promises better you can
      // also use nextTick this way
      this.$nextTick().then(() => {
        // Add the component back in
        this.renderComponent = true
      })
    },
    prevPost () {
      // console.log('hola mundo', Object.values(this.$store.state.posts))
      let keys = Object.keys(this.$store.state.posts)
      let index = keys.indexOf(this.$router.currentRoute.params.namePost)

      if (index > 0) {
        let newKey = keys[index - 1]
        let postx = this.$store.state.posts[newKey]
        this.openPost(postx, newKey)
      }
    },
    nextPost () {
      // console.log('hola mundo', Object.values(this.$store.state.posts))
      let keys = Object.keys(this.$store.state.posts)
      let index = keys.indexOf(this.$router.currentRoute.params.namePost)

      if (index < keys.length) {
        let newKey = keys[index + 1]
        let postx = this.$store.state.posts[newKey]
        this.openPost(postx, newKey)
      }
    },
    copyLink () {
      let link = 'https://lusaxweb.github.io/devAwesome/#' + this.$router.currentRoute.fullPath
      let textTitle = this.post.title
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
    openTag (tag) {
      this.$router.push('/search/' + tag)
    },
    changeAds () {
      // let _carbonads
      this.$nextTick(() => {
        if (!document.querySelector('#carbonads')) return
        if (typeof _carbonads !== 'undefined') _carbonads.refresh()
        // _codefund.serve()
      })
    },
    getActiveLike (post) {
      if (post.hasOwnProperty('likes')) {
        return post.likes.hasOwnProperty(this.$store.state.user.uid)
      } else {
        return false
      }
      // return likes.hasOwnProperty(this.$store.state.user.uid)
    },
    getIsLike () {
      let post = this.post
      if (post.hasOwnProperty('likes') && this.$store.state.user) {
        return post.likes.hasOwnProperty(this.$store.state.user.uid)
      } else {
        return false
      }
    },
    addView () {
      let post = this.post
      this.$firebase.database().ref('posts').child(this.$router.currentRoute.params.namePost + '/views').set(post.views + 1)
      this.uploadPost(post)
    },
    addlike () {
      let post = this.post
      if (!this.$store.state.user) {
        this.$vs.notify({
          title: 'Necessary Login User',
          text: 'To be able to do this action you need a user in login',
          color: 'danger',
          icon: 'lock'
        })
      } else if (this.getIsLike()) {
        this.$firebase.database().ref('posts').child(this.$router.currentRoute.params.namePost + '/likes/' + this.$store.state.user.uid).remove()
      } else {
        this.$firebase.database().ref('posts').child(this.$router.currentRoute.params.namePost + '/likes/' + this.$store.state.user.uid).set(true)
        this.uploadPost(post)
      }
    },
    sendComment (post) {
      let self = this
      if (!this.$store.state.user) {
        this.$vs.notify({
          title: 'Necessary Login User',
          text: 'To be able to do this action you need a user in login',
          color: 'danger',
          icon: 'lock'
        })
      } else {
        this.$firebase.database().ref('posts').child(this.$router.currentRoute.params.namePost + '/comments').push({
          name: self.$store.state.user.displayName,
          src: self.$store.state.user.photoURL,
          comment: self.commentx,
          githubUrl: this.$store.state.githubUrl
        })
        this.uploadPost(post)
        this.commentx = ''
      }
    },
    uploadPost (post) {
      this.$firebase.database().ref('posts').child(this.$router.currentRoute.params.namePost).once('value', (snapshot) => {
        this.$store.state.view.post = {
          ...snapshot.val(),
          namePost: this.$router.currentRoute.params.namePost
        }
      })
    },
    getPost () {
      let self = this
      this.$firebase.database().ref('posts').child(this.$router.currentRoute.params.namePost).on('value', (snapshot) => {
        this.forceRerender()
        let post = snapshot.val()
        this.post = {
          ...post,
          namePost: this.$router.currentRoute.params.name
        }

        self.getStars(post)

        var img = new Image()

        img.onload = function () {
          // the image is ready
          self.imageLoaded = true
          self.$vs.loading.close('#div-with-loading > .con-vs-loading')

          if (!localStorage.hasOwnProperty('postViews')) {
            localStorage.postViews = '[]'
          }
          let arrayPostsViews = JSON.parse(localStorage.getItem('postViews'))
          if (!arrayPostsViews.includes(self.$router.currentRoute.params.namePost)) {
            arrayPostsViews.push(self.$router.currentRoute.params.namePost)
            self.addView()
          }
          localStorage.setItem('postViews', JSON.stringify(arrayPostsViews))
        }
        img.src = this.post.image
        self.tags = post.tags.split(',')
      })
    },
    shuffle (array) {
      var currentIndex = array.length
      var temporaryValue
      var randomIndex

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    },
    getPosts () {
      this.$firebase.database().ref('posts').once('value', (snapshot) => {
        // this.morePosts = snapshot.val()
        let arrayPosts = []
        snapshot.forEach(element => {
          if (element.val().active && this.$router.currentRoute.params.namePost !== element.key) {
            arrayPosts.push({key: element.key, ...element.val()})
          }
        })

        let shuffle = this.shuffle(arrayPosts)

        shuffle = shuffle.slice(0, 12)

        let objectPosts = {}

        shuffle.forEach((item) => {
          if (item.active) {
            objectPosts[item.key] = item
          }
        })

        this.morePosts = objectPosts
      })
    },

    getStars (post) {
      if (!post.github) {
        return
      }
      let github = post.github.replace('https://github.com/', '')
      // https://github.com/vuejs/vue
      // let readme = null
      fetch(`https://api.github.com/repos/${github}`)
        .then(response => response.json())
        .then(json => {
          this.star = json.stargazers_count || 0
        })
    },

    getReadme (post) {
      if (!post.github) {
        return
      }
      let github = post.github.replace('https://github.com/', '')
      fetch(`https://api.github.com/repos/${github}/readme`, {
        headers: {
          'Accept': 'application/vnd.github.html',
        }
      })
        .then((res) => {
          return res.text()
        })
        .then((data) => {

          this.readme = data
        })
    },

    openPost (post, namePost) {
      this.imageLoaded = false
      post.namePost = namePost
      this.$router.push({
        path: `/view/${namePost}`
      })

      this.getPost()

      var img = new Image()
      let self = this
      img.onload = function () {
        // the image is ready
        self.imageLoaded = true
        self.$vs.loading.close('#div-with-loading > .con-vs-loading')
      }
      img.src = this.post.image
    },

    close () {
      this.$router.push({
        path: '/'
      })
      // this.$router.go(this.goLess)
      this.$store.state.view.active = false
      document.querySelector('body').style = 'overflow: auto'
    }
  }
}
</script>

<style lang="stylus">
@require '../config'

.prev-btn
  position absolute
  left 0px
  top 20%
  background $morado
  padding 10px
  cursor pointer
  color rgb(255,255,255)
  border-radius 0px 10px 10px 0px
  z-index 500

.next-btn
  z-index 500
  position absolute
  right 0px
  top 20%
  background $morado
  padding 10px
  cursor pointer
  color rgb(255,255,255)
  border-radius 10px 0px 0px 10px

.content-view
  position relative
  .footer-content
    position absolute
    bottom 0px
    left 0px
    padding 0px 10px 0px 10px
    z-index 200
    width 100%
    button
      padding 10px
      background $morado
      color rgb(255,255,255)
      border-radius 15px 15px 0px 0px
      position relative
      transition all .25s ease
      box-shadow 0px 0px 0px -2px alpha($morado, 0)
      &:hover
        box-shadow 0px 5px 10px -2px alpha($morado, .6)

.readmex
  width 100%
  height 100%
  position absolute
  background var(--fondo2)
  overflow auto
  z-index 200
  text-align left
  padding 10px
  font-size .8rem
  border-radius 8px
  table
    width 100%
    background var(--fondo3)
    padding 10px
    thead
      border 1px solid var(--text-color) !important
      background var(--fondo)
  details
    padding 10px

  h1, h2, h3, h4, h5, h6
    padding 10px
    a
      margin-right 10px
    svg
      fill var(--text-color)
  a
    color var(--text-color)
    font-weight bold
    &:hover
      text-decoration: underline;
  ul
    padding 10px 30px
    li
      list-style-type disc
      padding 2px 0px
      color var(--text-color)
  p
    padding 10px
    color var(--text-color)
  pre
    background var(--fondo)
    border-radius 10px
    padding 10px

.con-tags
  width 100%
  position relative
  padding 10px
  clear both
  overflow hidden
  span
    padding 6px 12px
    border-radius 20px
    background var(--fondo3)
    font-size .7rem
    margin 3px 2px
    display block
    float left
    cursor pointer
    transition all .3s ease
    &:hover
      background $primary
      color rgb(255,255,255)
    &:first-child
      margin-left 0px !important

.disabledx
  color rgba(255,255,255,.5) !important
.loadingx
  width 100%
  height 100%
  border-radius 10px
  animation loading 3s ease infinite
  position absolute
  left 0px
  top 0px

@keyframes loading
  0%
    background var(--fondo)
    transform scale(1)
  33%
    background var(--fondo3)
    transform scale(.9)
  66%
    background var(--fondo2)
    transform scale(1.1)
  100%
    background var(--fondo)
    transform scale(1)

.view-enter-active, .view-leave-active {
  transition: all .3s;
}
.view-enter, .view-leave-to
  opacity: 0;
  .img-view
    transform scale(.7)
  .con-description-view
    transform scale(.7)
  .con-similar-posts
    transform scale(.7)
.con-view
  position fixed
  left 0px
  top 0px
  background var(--fondo)
  width 100%
  height 100%
  z-index 20000
  overflow auto

  >header
    padding 10px 40px
    display flex
    align-items center
    justify-content space-between
    padding-right 30px
    button.btn-close
      width 45px
      height 45px
      display flex
      align-items center
      justify-content center
      border-radius 6px
      background transparent
      color var(--text-color)
      transition all .25s ease
      &:hover
        background var(--fondo2)
      i
        font-size 1.4rem
  .view
    position relative
    padding 20px
    box-sizing border-box
    padding-top 0px
    min-width 100%
    width 100%
    // height 600px
    .con-img-des
      display flex
      align-items flex-start
      justify-content center
      width 100%
      margin 10px 0px
      overflow hidden
  .con-img-view
    float left
    width 100%
    max-width 800px
    border-radius 8px;
    margin 10px
    margin-top 0px
    .img-view
      display flex
      align-items center
      justify-content center
      height calc(100% - 240px)
      overflow hidden
      background var(--fondo2)
      border-radius 8px
      transition all .3s ease
      // padding 20px
      padding-bottom 75%
      position relative
      .con-vs-loading
        position absolute
        z-index 200
        .effects
          z-index 200

      img
        border-radius 8px
        width 100%
        max-width 100%
        max-height 100%
        left 0px
        top 0px
        right 0px
        bottom 0px
        z-index 300
        position absolute
        background transparent
        z-index 100
        &.imageLoaded
          background #fff
  .con-similar-posts
    position relative
    height auto;
    width 100%
    // max-width 1170px
    background var(--fondo2)
    border-radius 8px
    transition all .3s ease
    // overflow hidden
    margin auto
    padding 5px
    box-sizing border-box
    margin-top 10px
    .expand-similar-btn
      position absolute
      bottom -10px
      left 50%
      transform translate(-50%)
      width 40px
      height 40px
      display flex
      align-items center
      justify-content center
      border-radius 50%
      background $primary
      color rgb(255,255,255)
      box-shadow 0px 0px 0px -2px alpha($primary, 0)
      transition all .25s ease
      &:hover
        box-shadow 0px 5px 10px -2px alpha($primary, .6)
    ul
      display flex
      align-items center
      justify-content center
      flex-wrap wrap
    li
      width 25%
      border-radius 8px
      overflow hidden
      padding 5px
      cursor pointer
      display block
      position relative
      transition all .25s ease
      &:hover
        box-shadow 0px 5px 20px 0px rgba(0,0,0,.1)
        opacity .6
      img
        border-radius 8px
        width 100%
        display block
        transition all .3s ease
        // background #fff
  .con-description-view
    float left
    width 350px
    background var(--fondo2)
    border-radius 8px;
    margin 10px
    padding 10px
    box-sizing border-box
    margin-top 0px
    transition all .3s ease
    overflow auto
    max-height calc(100% - 80px)

    .descriptionx
      text-align left
      padding 10px 12px
      font-size .75rem
      color var(--text-color)
    .con-comments
      padding 8px
      padding-top 0px
      position relative
      display block
      .add-comment
        display flex
        align-items flex-start
        justify-content flex-start
        flex-direction column
        button
          margin-top 8px
      .comments
        width 100%
        overflow auto
        position relative
        display block
        margin-top 10px
        li
          padding 5px 0px
          border-bottom 1px solid rgba(255,255,255,.05)
          &:last-child
            border-bottom 1px solid rgba(255,255,255,0)
          >p
            font-size .7rem
            color var(--text-color)
            text-align left
            padding 5px 0px
          header
            width 100%
            a
              display flex
              align-items center
              justify-content flex-start
            h5
              font-size .75rem
              padding-left 5px
              color var(--text-color)
            img
              width 35px;
              height 35px;
              border-radius 8px;
      h5
        text-align left
        padding 5px 0px
      textarea
        width 100%
        max-height 80px
        resize none
        background var(--fondo3)
        border-radius 6px
        border 0px
        padding 10px
        color var(--text-color)
        font-size .75rem
        &::placeholder
          color var(--text-color)

    .con-values
      width 100%
      ul
        width 100%
        position relative
        display flex
        align-items center
        justify-content center
        padding 10px
        box-sizing border-box
        li
          padding 5px 15px
          border-left 2px solid rgba(255,255,255,.1)
          display block
          position relative
          font-size .8rem
          display flex
          align-items center
          justify-content center
          color var(--text-color)
          user-select none
          cursor default
          i
            font-size 1rem
            margin-right 4px
          &:first-child
            border-left 0px solid rgba(255,255,255,.1)

    .con-interaction-view
      display flex
      align-items center
      flex-wrap wrap
      padding 10px 4px
      .star
        background $morado
        font-weight bold
        position absolute
        font-size .6rem
        padding 3px 5px
        display flex
        align-items center
        justify-content center
        border-radius 5px
        top -17px
        right -8px
        box-shadow 0px 3px 10px 0px rgba(0,0,0,.1)
        color rgb(255,255,255)
        i
          font-size .7rem !important
      button
        padding 8px 16px
        border-radius 6px
        background transparent
        margin 5px 5px
        border 2px solid rgba(255,255,255,.15)
        color rgb(255,255,255)
        font-weight bold
        // width 100%
        display flex
        align-items center
        box-sizing border-box
        justify-content center
        transition all .3s ease
        position relative
        &:hover
          color rgb(255,255,255)
          background rgba(255,255,255,.15)
          border 2px solid rgba(255,255,255,0)
        &.activeLike
          background $primary
          border 2px solid $primary
        &.button-a
          padding 0px
          a
            padding 8px 16px
            display block
            color var(--text-color)

        i
          font-size 1.1rem
          margin-right 4px
        &.btn-share,&.btn-mark
          width 38px
          height 38px
          display flex
          align-items center
          justify-content center
          i
            margin-right 0px

        &.btn-share
          &:hover
            ul
              opacity 1
              visibility visible
          ul
            opacity 0
            visibility hidden
            position: absolute
            top 0px
            transform translate(0, -100%)
            transition all .25s ease
            padding 5px
            li
              padding 10px
              background var(--fondo)
              margin 2px 0px
              border-radius 4px
              &:hover
                background $success
    .con-user-view
      display flex
      align-items center
      padding 10px
      justify-content space-between
      .btn-follow
        padding 9px 20px
        border-radius 6px
        background $verde
        color rgb(255,255,255)
        font-weight bold
        font-size .9rem
        opacity 1
        transition all .25s ease
        box-shadow 0px 0px 0px 0px alpha($verde, 0)
        &:hover
          box-shadow 0px 5px 10px -2px alpha($verde, .5)
      .text-user
        width 100%
        a
          display flex
          align-items center
          justify-content flex-start

      img
        height 100%
      p
        padding-left 10px
        font-size .8rem
        color var(--text-color)
      .con-img-user-view
        overflow hidden
        width 40px
        height 40px
        display flex
        align-items center
        justify-content center
        border-radius 10px;
        .devAwesome-logo
          width 100% !important
          height auto !important
@media only screen and (max-width: 1270px)
  .view
    width 100% !important
    min-width auto !important
    max-width 900px !important
    margin auto
  .con-img-des
    display block !important
  .con-img-view, .con-description-view
    width 100% !important
    max-width 100% !important
    margin 0px !important

@media only screen and (max-width: 600px)
  .con-img-des
    margin-top 0px !important
  .con-view
      header
        padding 10px 15px !important
  .view
    padding 5px !important
  .con-img-view, .con-description-view, .con-similar-posts
    width 100% !important
    max-width 100% !important
    margin 10px 0px !important
  .con-img-view
    margin-top 0px !important
  .con-description-view
    margin-top 0px !important
  .con-similar-posts
    margin-bottom 0px !important
    li
      padding 2px !important
</style>
