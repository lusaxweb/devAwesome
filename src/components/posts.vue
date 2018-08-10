<template>
  <div class="con-posts">
    <transition-group name="posts">
      <div
        :key="index"
        v-for="(post,index) in Object.keys(posts)"
        class="post">
        <div class="con-img-post">
          <img class="img-post" :src="posts[post].src" alt="">
        </div>
        <header>
        </header>
        <footer>
          <div>
          <h4>{{ posts[post].title }}</h4>
          <p>{{ posts[post].description }}</p>
          <!-- <span> {{ posts[post].tags }} </span> -->

          </div>
          <div class="con-btns">
          <button class="btn-download" @click="downloadsAdd(post,posts[post])">
          <i class="material-icons">
            get_app
          </i>
          <span>{{ posts[post].downloads }}</span>

          </button>
          <button class="btn-like" @click="addlike(post,posts[post])">
              <i class="material-icons">
                favorite
              </i>
            <span>{{ posts[post].likes }}</span>
            </button>
          </div>
        </footer>
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  props: {
    posts: {
      default: () => { return [] }
    },
    section: {
      default: null,
      type: String
    }
  },
  methods: {
    downloadsAdd (name, post) {
      this.$firebase.database().ref('posts/' + this.section).child(name + '/downloads').set(post.downloads + 1)
    },
    addlike (name, post) {
      this.$firebase.database().ref('posts/' + this.section).child(name + '/likes').set(post.likes + 1)
    }
  }
}
</script>
<style lang="stylus">
@require '../config'

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
    background $fondo2
    border-radius 8px;
    width 100%;
    max-width calc(20% - 20px);
    float left
    margin 10px;
    box-shadow 0px 6px 20px 0px rgba(0,0,0,.1)
    color rgb(255,255,255)
    cursor pointer
    transition all .25s ease
    &:hover
      transform translate(0,5px)
      box-shadow 0px 0px 0px 0px rgba(0,0,0,.1) !important
      h4, p
        opacity 0
        transform translate(0,-10px)
      .con-img-post
        transform scale(1.07) translate(0,10px)
        box-shadow 0px 6px 20px 0px rgba(0,0,0,.1)
      .con-btns
        button
          span
            width auto
            opacity 1
            padding-left 4px
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
        button
          padding 8px
          border-radius 6px;
          background $fondo3
          color rgb(255,255,255)
          position relative
          margin 0px 3px
          display flex
          align-items center
          justify-content center
          box-shadow 0px 3px 15px 0px rgba(0,0,0,.05)
          transition all .25s ease
          z-index 200
          &:hover
            background $primary
          &.btn-download
            &:hover
              background $verde
          i
            font-size 1.05rem

          span
            position relative
            transition all .25s ease
            // top -5px
            // right -5px
            // background $primary
            // padding-left 3px
            // padding-right 3px
            // border-radius 3px
            opacity 0
            width 0px
            padding-left 0px
            font-size .6rem
    .con-img-post
      overflow hidden
      width calc(100% - 16px);
      height auto;
      display flex
      align-items center
      justify-content center
      background rgb(255,255,255)
      position relative
      margin 8px
      margin-bottom 3px
      border-radius 6px
      transition all .25s ease
      z-index 100
      backface-visibility visible
      background $fondo
      img
        z-index 10
        border-radius 6px
        width 100%
        backface-visibility visible
        position relative
        display block
        transform scale(1.3)

@media only screen and (max-width: 1400px)
  .post
    max-width calc(25% - 20px) !important

@media only screen and (max-width: 1200px)
  .post
    max-width calc(33% - 20px) !important

@media only screen and (max-width: 850px)
  .post
    max-width calc(50% - 20px) !important

@media only screen and (max-width: 600px)
  .post
    margin-left 20px !important
    margin-right 20px !important
    max-width calc(100% - 40px) !important

</style>
