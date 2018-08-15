<template>
  <transition name="view">
    <div v-if="postActive" class="con-view">
      <header>
        <h3>{{ post.title }}</h3>
        <button @click="close()">
          <i class="material-icons">
            clear
          </i>
        </button>
      </header>
      <div class="view">
        <div class="con-img-des">

        <div class="con-img-view">
          <div class="img-view">
            <img :src="post.src" alt="">
          </div>
        </div>

        <div class="con-description-view">
          <div class="con-user-view">
            <div class="text-user">
              <div class="con-img-user-view">
                <img :src="post.user.src" alt="">
              </div>
              <p>{{ post.user.name }}</p>
            </div>
            <a target="_blank" :href="`${post.website}?ref=lusaxweb.github.io`" class="btn-follow">
              WebSite
            </a>
          </div>

          <div class="con-interaction-view">
            <button @click="addlike">
              <i class="material-icons">
                favorite
              </i>
              Like
            </button>
            <button class="button-a">
              <a target="_blank" :href="`${post.github}?ref=lusaxweb.github.io`" class="btn-follow">
              Github
              </a>
            </button>
            <button class="button-a">
              <a target="_blank" :href="`${post.github}?ref=lusaxweb.github.io`" class="btn-follow">
              Twitter
              </a>
            </button>
            <button class="btn-share">
              <i class="material-icons">
                share
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
                {{ post.likes }}
              </li>
            </ul>
          </div>
          <Carbon-view />
          <div class="con-comments">
            <h5>Comments</h5>
            <div class="add-comment">
              <textarea
                v-model="commentx"
                @keypress.enter.prevent="sendComment(post)"
                placeholder="Your comment"></textarea>
            </div>

            <ul class="comments">
              <li
                :key="index"
                v-for="(comment, index) in post.comments">
                <header>
                  <img :src="comment.src" alt="">
                  <div>
                    <h5>{{ comment.name }}</h5>
                    <!-- <p>Berlin, alemania</p> -->
                  </div>
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
        <div class="con-similar-posts">
            <ul>
              <li
                :key="index"
                @click="openPost(morePosts[post], post)"
                v-for="(post, index) in Object.keys(morePosts)">
                <!-- hola soy similar :) -->
                <img :src="morePosts[post].src" alt="">
                <!-- {{ morePosts[post] }} -->
              </li>
            </ul>
          </div>
      </div>
    </div>
  </transition>
</template>

<script>
import CarbonView from '../components/CarbonView.vue'

export default {
  name: 'view',
  components: {
    CarbonView
  },
  data: () => ({
    commentx: '',
    post: {},
    postActive: false,
    morePosts: {}
  }),
  mounted () {
    console.log(this.$router.currentRoute.params)
    this.getPost()
    this.getPosts()
  },
  methods: {
    addlike () {
      let post = this.post
      this.$firebase.database().ref('posts/' + this.$router.currentRoute.name).child(post.namePost + '/likes').set(post.likes + 1)
      this.uploadPost(post)
    },
    sendComment (post) {
      let self = this

      this.$firebase.database().ref('posts/' + this.$router.currentRoute.name).child(post.namePost + '/comments').push({
        name: self.$store.state.user.displayName,
        src: self.$store.state.user.photoURL,
        comment: self.commentx
      })
      this.uploadPost(post)
      this.commentx = ''
    },
    uploadPost (post) {
      this.$firebase.database().ref('posts/' + this.$router.currentRoute.name).child(post.namePost).on('value', (snapshot) => {
        console.log(snapshot.val())
        this.$store.state.view.post = {
          ...snapshot.val(),
          namePost: post.namePost
        }
      })
    },
    getPost () {
      this.$firebase.database().ref('posts/' + this.$router.currentRoute.params.nameSection).child(this.$router.currentRoute.params.namePost).on('value', (snapshot) => {
        console.log(snapshot.val())
        this.post = {
          ...snapshot.val(),
          namePost: this.$router.currentRoute.params.name
        }
        this.postActive = true
      })
    },

    getPosts () {
      this.$firebase.database().ref('posts/' + this.$router.currentRoute.params.nameSection).on('value', (snapshot) => {
        console.log('>>>Posts>>', snapshot.val())
        this.morePosts = snapshot.val()
      })
    },

    openPost (post, namePost) {
      post.namePost = namePost
      this.$router.push({
        path: `/view/${this.$router.currentRoute.params.nameSection}/${namePost}`
      })

      this.getPost()
      this.getPosts()
    },

    close () {
      this.$router.push({
        path: `/${this.$router.currentRoute.params.nameSection}`
      })
      this.$store.state.view.active = false
      document.querySelector('body').style = 'overflow: auto'
    }
  }
}
</script>

<style lang="stylus">
@require '../config'

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
  background $fondo
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
    button
      width 50px
      height 50px
      display flex
      align-items center
      justify-content center
      border-radius 6px
      background transparent
      color rgb(255,255,255)
  .view
    position relative
    padding 20px
    box-sizing border-box
    padding-top 0px
    min-width 100%
    width 100%
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
    max-width 600px
    border-radius 8px;
    margin 10px
    margin-top 0px
    .img-view
      display flex
      align-items center
      justify-content center
      height calc(100% - 240px)
      overflow hidden
      background $fondo2
      border-radius 8px
      transition all .3s ease
      padding 20px
      img
        border-radius 8px
        width 100%
        max-width 100%
        max-height 100%
        left 0px
        top 0px
        right 0px
        bottom 0px
  .con-similar-posts
    position relative
    height auto;
    width 100%
    max-width 970px
    background $fondo2
    border-radius 8px
    transition all .3s ease
    overflow hidden
    margin auto
    padding 5px
    box-sizing border-box
    li
      width 25%
      float left
      border-radius 8px
      overflow hidden
      padding 5px
      cursor pointer
      img
        border-radius 8px
        width 100%
        display block

  .con-description-view
    float left
    width 350px
    background $fondo2
    border-radius 8px;
    margin 10px
    padding 10px
    box-sizing border-box
    margin-top 0px
    transition all .3s ease
    overflow auto
    max-height calc(100% - 80px)

    .con-comments
      padding 10px
      position relative
      display block
      .comments
        width 100%
        overflow auto
        position relative
        display block
        li
          padding 10px
          border-bottom 1px solid rgba(255,255,255,.05)
          &:last-child
            border-bottom 1px solid rgba(255,255,255,0)
          >p
            font-size .65rem
            color rgba(255,255,255,.5)
            text-align left
            padding 5px 0px
          header
            width 100%
            display flex
            align-items center
            justify-content flex-start
            h5
              font-size .6rem
              padding-left 5px
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
        background $fondo3
        border-radius 6px
        border 0px
        padding 10px
        color rgb(255,255,255)
        font-size .75rem
        &::placeholder
          color rgba(255,255,255,.15)

    .con-values
      width 100%
      ul
        width 100%
        position relative
        display flex
        align-items center
        justify-content center
        padding 20px 10px
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
          color rgba(255,255,255,.35)
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
        &.button-a
          padding 0px
          a
            padding 8px 16px
            display block
            color rgb(255,255,255)

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

    .con-user-view
      display flex
      align-items center
      padding 10px
      justify-content space-between
      .btn-follow
        padding 10px 40px
        border-radius 6px
        background $verde
        color rgb(255,255,255)
        font-weight bold
      .text-user
        display flex
        align-items center
        justify-content flex-start
        width 100%
      img
        height 100%
      p
        padding-left 10px
        font-size .8rem
        color rgba(255,255,255,.6)
      .con-img-user-view
        overflow hidden
        width 40px
        height 40px
        display flex
        align-items center
        justify-content center
        border-radius 10px;
@media only screen and (max-width: 1050px)
  .con-img-des
    display block !important
  .con-img-view, .con-description-view, .con-similar-posts
    width calc(100% - 20px) !important
    max-width calc(100% - 20px) !important
    margin 5px !important

@media only screen and (max-width: 600px)
  .img-view
    padding 5px !important
  .view
    padding 0px 5px !important
  .con-img-view, .con-description-view, .con-similar-posts
    width 100% !important
    max-width 100% !important
    margin 10px 0px !important
  .con-similar-posts
    li
      width 50% !important
</style>
