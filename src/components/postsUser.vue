<template>
  <div class="con-posts">
    <transition-group name="posts">
      <div
        :key="index"
        v-if="$parent.maxPosts? index < $parent.maxPosts : true"
        v-for="(post,index) in Object.keys(posts)"
        :class="[{'postInactive': !posts[post].active }]"
        class="post">
        <div class="con-postx">
          <button v-if="$store.state.admin" @click="openEditPost(posts[post], post)" class="edit-post-btn">
            <i class="material-icons">
              edit
            </i>
          </button>

          <button
            @click="deletePost(posts[post], post)"
            v-if="deletex"
            class="btn-delete-item">
              <i class="material-icons">
                delete_forever
              </i>
            </button>

            <div @click="openPost(posts[post], post)" class="con-img-post">
              <img class="img-post" :src="posts[post].miniImage" alt="">

              <button class="open-text">
                <i class="material-icons">
                  speaker_notes
                </i>
              </button>

              <div class="con-textx">
                <h4>{{ posts[post].title }}</h4>
                <!-- <p>{{ getTextCort(posts[post].description) }}</p> -->
              </div>
            </div>
            <footer>
              <div @click="openPost(posts[post], post)" class="con-title-description">
              <h4>{{ posts[post].title }}</h4>
              <p>{{ posts[post].description }}</p>
              <!-- <span> {{ posts[post].tags }} </span> -->

              </div>
              <div class="con-btns">
              <button class="btn-link">
                <a target="_blank" :href="`${posts[post].website}?ref=lusaxweb.github.io`">
                  <i class="material-icons">
                    link
                  </i>
                </a>
              </button>
              <button class="btn-download" @click="openPost(posts[post], post)">
                <i class="material-icons">
                  remove_red_eye
                </i>
                <span>{{ posts[post].views }}</span>
              </button>
              <button :class="{'disabledx':!$store.state.user, 'activeLike': getActiveLike(posts[post])}" class="btn-like" @click="addlike(post, posts[post])">
                  <i class="material-icons">
                    favorite
                  </i>
                <span v-if="posts[post].likes" >{{ Object.keys(posts[post].likes).length }}</span>
                </button>
              </div>
            </footer>
          </div>
      </div>
    </transition-group>

    <div v-if="Object.keys(posts).length == 0" class="con-loading-posts">
      <ul>
        <li  :key="li" v-for="li in numberRamdom">
          <div :style="`animation-delay: .${li}s`" class="card">
            <div class="imgx"></div>
            <ul class="ul-loading">
              <li>
                <i class="material-icons">
                  link
                </i>
              </li>
              <li>
                <i class="material-icons">
                  remove_red_eye
                </i>
              </li>
              <li>
                <i class="material-icons">
                  favorite
                </i>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import announcements from '../components/announcements.vue'
import Carbon from '../components/CarbonPosts.vue'
import CodeFund from '../components/CodeFund.vue'
export default {
  components: {
    Carbon,
    announcements,
    CodeFund
  },
  props: {
    deletex: {
      default: false,
      type: Boolean
    },
    posts: {
      default: () => { return {} }
    },
    section: {
      default: null,
      type: String
    }
  },
  data: () => ({
    likes: [],
    displayx: 1
  }),
  created () {
    this.displayx = this.$store.state.display
  },
  computed: {
    display () {
      return this.$store.state.display
    },
    numberRamdom () {
      return Math.floor(Math.random() * (8 - 3 + 1) + 3) + 1
    }
  },
  watch: {
    display () {
      this.displayx = this.$store.state.display
    }
  },
  methods: {
    getTextCort (text) {
      let newText = text.slice(0, 300) + (text.length > 300 ? ' ...' : '')
      return newText
    },
    deletePost (post, namePost) {
      let self = this
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: `Confirm Deleted`,
        text: 'You are sure to eliminate this Project, By doing so you will not be able to have it again and it will be eliminated',
        accept: function () {
          self.$firebase.database().ref('posts').child(namePost).remove()
        }
      })
    },
    getActiveLike (post) {
      if (post.hasOwnProperty('likes') && this.$store.state.user) {
        return post.likes.hasOwnProperty(this.$store.state.user.uid)
      } else {
        return false
      }
    },
    openPost (post, namePost) {
      post.namePost = namePost
      this.$router.push({
        path: `/view/${namePost}`
      })
      document.querySelector('body').style = 'overflow: hidden'
    },
    openEditPost (post, namePost) {
      post.namePost = namePost
      this.$router.push({
        path: `/edit/${namePost}`
      })
    },
    addlike (name, post) {
      let idx = null
      if (!this.$store.state.user) {
        this.$vs.notify({
          title: 'Necessary Login User',
          text: 'To be able to do this action you need a user in login',
          color: 'danger',
          icon: 'lock'
        })
      } else if (this.getActiveLike(post)) {
        idx = this.$store.state.user.uid
        this.$store.commit('removePostLike', name, idx)
        this.$firebase.database().ref('posts').child(name + '/likes/' + this.$store.state.user.uid).remove()
      } else {
        idx = this.$store.state.user.uid
        this.$store.commit('addPostLike', name, 'idx')
        this.$firebase.database().ref('posts').child(name + '/likes/' + this.$store.state.user.uid).set({
          uid: this.$store.state.user.uid
        })
      }
      // this.$set(this.posts[post.key], 'likes', newPost.likes)
    }
  }
}
</script>
<style lang="stylus">
@require '../config'

// user - admin

.edit-post-btn
  position absolute
  top 15px
  right 15px
  z-index 1000
  padding 7px
  border-radius 5px
  background $verde
  color rgb(255,255,255)
  i
    font-size 1.3rem

.con-loading-posts
  position relative
  width 100%
  // background $primary
  > ul
    > li
      width 100%
      max-width calc(20% - 10px)
      margin 5px
      position relative
      float left
      .card
        border-radius 10px
        background var(--fondo2)
        display block
        animation example ease infinite 2.5s
        overflow hidden
        .imgx
          border-radius 10px
          content ''
          left 7px
          top 7px
          width calc(100% - 14px)
          height 80%
          background var(--fondo)
          position relative
          padding-bottom 75%
        .ul-loading
          position relative
          width 100%
          display flex
          justify-content flex-end
          &:after
            border-radius 10px
            content ''
            position absolute
            left 10px
            top 15px
            width 30%
            height 5px
            background var(--fondo)
          &:before
            border-radius 10px
            content ''
            position absolute
            left 10px
            top 25px
            width 50%
            height 3px
            background var(--fondo)
          li
            padding 10px
            display block
            color var(--fondo)
            user-select none

@keyframes example
  0%
    opacity 1
  70%
    opacity 0
    // transform scale(.9)
    transform scale(.9) translate(0, -20px)
  100%
    opacity 1

.posts-enter-active, .posts-leave-active {
  transition: all ease .3s;
}
.posts-enter, .posts-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform scale(.8) translate(0,30px)
}

.con-posts
  padding 10px
  overflow hidden
  // height 2000px
  .post
    background var(--fondo2)
    border-radius 8px;
    width 100%;
    max-width calc(33% - 14px);
    float left
    margin 7px;
    box-shadow 0px 6px 20px 0px rgba(0,0,0,.1)
    color var(--text-color)
    cursor pointer
    transition all .25s ease
    position relative
    .open-text
      position absolute
      left 2%
      top 2%
      z-index 200
      width 30px
      height 30px
      border-radius 7px
      display flex
      align-items center
      justify-content center
      font-size 1.3rem
      background var(--fondo3)
      color var(--text-color)
      opacity 0
      visibility hidden
      transition all .25s ease
      &:hover
        left 3%
        top 3%
        ~ .con-textx
          opacity 1
          visibility visible
          transform scale(1)
    .con-textx
      z-index 100
      position absolute
      left 2.5%
      top 2.5%
      background var(--fondo3)
      backface-visibility visible
      height 95%
      overflow hidden
      width 95%
      opacity 0
      visibility hidden
      transition all .25s ease
      border-radius 10px
      transform scale(0)
      transform-origin left top
      padding-bottom 5px
      // background-color: transparent
      // background-image: linear-gradient(180deg, var(--fondo2) 25%, transparent 100%);
      h4
        padding 10px
      p
        font-size .65rem
        text-align left
        padding 8px
        padding-top 0px
    &.postInactive
      background $primary !important
    .btn-delete-item
      position absolute
      top 15px
      right 15px
      width 35px
      height 35px
      z-index 1000
      border-radius 5px
      background $primary
      color rgb(255,255,255)
      transition all .25s ease
      i
        font-size 1.5rem
      &:hover
        ~.con-img-post
          background $primary
          img
            opacity .5
    .con-title-description
      width calc(100% - 140px)
      p
        width 100%
        display block
        text-overflow:ellipsis
        white-space:nowrap
        overflow:hidden
    &:hover:not(.post-display-3):not(.post-display-4)
      transform translate(0,5px)
      box-shadow 0px 0px 0px 0px rgba(0,0,0,.1) !important
      background var(--fondo)
      .open-text
        opacity 1
        visibility visible
      .btn-delete-item
        top 22px
        right 0%
      footer
        h4, p
          opacity 0
          transform translate(0,-10px)
      .con-img-post
        transform translate(0,20px) scale(1.1)
        // transform scale(1.07) translate(0,10px)
        box-shadow 0px 6px 20px 0px rgba(0,0,0,.3)
      .con-btns
        button
          span
            width auto
            opacity 1
            padding-left 4px
            transform translate(0)
          i
            text-shadow 0px 4px 20px rgba(0,0,0,.5)
    footer
      display flex
      align-items center
      justify-content space-between
      padding 5px 5px
      padding-left 10px
      h4
        font-size .8rem
        text-align left
        position relative
        transition all .3s ease
        z-index 10
        text-overflow:ellipsis
        white-space:nowrap
        overflow:hidden
      p
        transition all .3s ease
        font-size .6rem
        position relative
        z-index 10
        text-align left
      .con-btns
        display flex
        align-items center
        justify-content center
        transition all .3s ease
        button
          padding 8px
          border-radius 6px;
          background var(--fondo3)
          color var(--text-color)
          position relative
          margin 0px 3px
          display flex
          align-items center
          justify-content center
          box-shadow 0px 3px 15px 0px rgba(0,0,0,.05)
          transition all .25s ease
          z-index 200
          &.activeLike
            background $primary !important
            color rgb(255,255,255)
          &.disabledx
            color rgba(255,255,255,.5)
            // opacity .5 !important
          &.btn-link
            padding 0px !important
            &:hover
              background $morado
              a
                color rgb(255,255,255) !important
            a
              padding 8px
              display flex
              align-items center
              justify-content center
              padding-top 9px
              padding-bottom 7px
              color var(--text-color)
          &:hover
            background $primary
            color rgb(255,255,255)
          &.btn-download
            &:hover
              background $verde
          i
            font-size 1.05rem
            text-shadow 0px 4px 20px rgba(0,0,0,.5)
          span
            position relative
            transition all .25s ease
            transform translate(10px)
            opacity 0
            width 0px
            padding-left 0px
            font-size .6rem
            overflow hidden
            width auto
            opacity 1
            padding-left 4px
            transform translate(0)
    .con-img-post
      overflow hidden
      width calc(100% - 16px);
      height 0px;
      display flex
      align-items center
      justify-content center
      position relative
      margin 8px
      margin-bottom 3px
      border-radius 6px
      transition all .25s ease
      z-index 100
      backface-visibility visible
      background var(--fondo)
      padding-bottom calc(75% - 16px)
      img
        z-index 10
        border-radius 6px
        width 100%
        backface-visibility visible
        position absolute
        left 0px
        top 0px
        display block
        // transform scale(1.3)
        transition opacity .3s ease
        // background #fff

.post-display-2
  max-width calc(14.28% - 14px) !important

  .con-carbon
    padding-top: calc(75% + 78px) !important
  .con-annuncement
    padding-bottom: calc(75% + 78px) !important

  footer
    flex-direction column
    .con-title-description
      width 100% !important
    .con-btns
      padding-top 10px

.post-display-3, .post-display-4
  max-width calc(50% - 14px) !important
  display flex
  align-items center
  justify-content flex-start
  .con-img-post
    margin 0px !important
  .con-carbon
    padding-top 0px
    position relative
    width 100%
    height 85px
    .carbon
      position relative
      >>>.carbon-wrap
        display flex
        align-items center
        justify-content center
        flex-direction row !important
        width 100% !important
        max-width 100% !important
        img
          width 75px !important

  >>>div[id*="carbonads"]
    width 100% !important
    max-width 100% !important
  .carbon-wrap
    width 100% !important
    background rgb(0,0,250)
    .con-carbon
      position absolute !important
  .con-postx
    display flex
    align-items center
    justify-content flex-start
    width 100%
  footer
    width calc(100% - 130px)
  .con-img-post
    width 100px !important
    padding-bottom 75px !important
    margin 5px !important

.post-display-4
  max-width calc(80% - 14px) !important
  margin-left 10% !important
  display flex
  align-items center
  justify-content flex-start
  footer
    width 100%
  .con-img-post
    display none !important

@media only screen and (max-width: 1400px)
  .post:not(.post-display-3):not(.post-display-4)
    max-width calc(33% - 12px) !important
  .con-loading-posts
    li
      max-width calc(33% - 12px) !important
// @media only screen and (max-width: 1200px)
//   .post:not(.post-display-3):not(.post-display-4)
//     max-width calc(33% - 14px) !important
//   .con-loading-posts
//     li
//       max-width calc(33% - 14px) !important
@media only screen and (max-width: 1200px)
  .post:not(.post-display-3):not(.post-display-4)
    max-width calc(50% - 14px) !important
  .con-loading-posts
    li
      max-width calc(50% - 14px) !important
  .post-display-3
    max-width calc(100% - 14px) !important
  .post-display-4
    max-width calc(100% - 14px) !important
    margin-left 0px !important
@media only screen and (max-width: 900px)
  .con-posts
    padding 20px !important
  .con-loading-posts
    li
      max-width 100% !important
      margin 5px 0px !important
  .post:not(.post-display-4):not(.post-display-3)
    margin-left 0px !important
    margin-right 0px !important
    max-width 100% !important
    background var(--fondo2) !important
  .post-display-3
    footer
      flex-direction column !important
      align-items flex-start !important
      justify-content flex-start !important
      .con-title-description
        width 100% !important
      .con-btns
        margin-top 5px
    h4, p
        opacity 1 !important
        transform translate(0,0) !important
      .con-img-post
        transform translate(0,0px) scale(1) !important
        // transform scale(1.07) translate(0,10px)
        box-shadow 0px 6px 20px 0px rgba(0,0,0,.3)
      .con-btns
        button
          span
            width auto !important
            opacity 1 !important
            padding-left 4px !important
            transform translate(0) !important
          i
            text-shadow 0px 4px 20px rgba(0,0,0,.5) !important

</style>
