<template>
  <transition name="view">
    <div class="con-view">
      <header>
        <h3>{{ post.title }}</h3>
        <button @click="close()">
          <i class="material-icons">
            clear
          </i>
        </button>
      </header>
      <div class="view">
        <div class="con-img-view">
          <div class="img-view">
            <img :src="post.src" alt="">
          </div>

          <div class="con-similar-posts">
            <ul>
              <li>
                <!-- hola soy similar :) -->
              </li>
            </ul>
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
            <button class="btn-follow">Follow</button>
          </div>

          <div class="con-interaction-view">
            <button>
              <i class="material-icons">
                favorite
              </i>
              Like
            </button>
            <button>
              <i class="material-icons">
                get_app
              </i>
              Download
            </button>
            <button class="btn-share">
              <i class="material-icons">
                share
              </i>
            </button>
            <button class="btn-mark">
              <i class="material-icons">
                bookmark_border
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
              <li>
                <i class="material-icons">
                  get_app
                </i>
                {{ post.downloads }}
              </li>
            </ul>
          </div>

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
    </div>
  </transition>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    commentx: ''
  }),
  computed: {
    post () {
      return this.$store.state.view.post
    }
  },
  methods: {
    sendComment (post) {

      let self = this
      console.log('post>>>', this.$store.state.user)

      this.$firebase.database().ref('posts/' + this.$router.currentRoute.name).child(post.namePost + '/comments').push({
        name: self.$store.state.user.displayName,
        src: self.$store.state.user.photoURL,
        comment: self.commentx
      })
      this.$firebase.database().ref('posts/' + this.$router.currentRoute.name).child(post.namePost).on('value', (snapshot) => {
        console.log(snapshot.val())
        this.$store.state.view.post = {
          ...snapshot.val(),
          namePost: post.namePost
        }
      })
      this.commentx = ''
    },
    close () {
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
    height 100%
    padding 20px
    box-sizing border-box
    padding-top 0px
  .con-img-view
    float left
    height calc(100% - 20px)
    width calc(100% - 390px)
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
      margin-bottom 20px
      border-radius 8px
      transition all .3s ease
      img
        border-radius 8px
        min-width 800px
        max-width 100%
        max-height 100%
        left 0px
        top 0px
        right 0px
        bottom 0px
    .con-similar-posts
      height 160px;
      background $fondo2
      border-radius 8px
      transition all .3s ease

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
      padding 10px 4px
      button
        padding 8px 16px
        border-radius 6px
        background transparent
        margin 0px 5px
        border 2px solid rgba(255,255,255,.15)
        color rgb(255,255,255)
        font-weight bold
        width 100%
        display flex
        align-items center
        box-sizing border-box
        justify-content center
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

</style>
