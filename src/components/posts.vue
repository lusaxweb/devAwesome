<template>
  <div class="con-posts">
    <div
      :key="index"
      v-for="(post,index) in Object.keys(posts)"
      class="post">
      <div class="con-img-post">
        <button class="btn-like" @click="addlike(post,posts[post])"><3 {{ posts[post].likes }}</button>
        <img class="img-post" :src="posts[post].src" alt="">
      </div>
      <header>


      </header>
      <footer>
        <div>
        <h4>{{ posts[post].title }}</h4>
        <p>{{ posts[post].description }}</p>
        </div>
        <button class="btn-download" @click="addview(post,posts[post])">Download {{ posts[post].download }}</button>
      </footer>
    </div>
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
    addview (name, post) {
      console.log('view', post)

      this.$firebase.database().ref('posts/' + this.section).child(name).set({
        ...post,
        views: post.views + 1
      })
    },
    addlike (name, post) {
      console.log('like', post)

      this.$firebase.database().ref('posts/' + this.section).child(name).set({
        ...post,
        likes: post.likes + 1
      })
    }
  }
}
</script>
<style lang="stylus">

.con-posts
  padding 10px
  overflow hidden
  height 2000px
  .post
    background rgb(51, 46, 77)
    border-radius 8px;
    width 100%;
    max-width 300px;
    float left
    margin 8px;
    overflow hidden
    box-shadow 0px 4px 15px 0px rgba(0,0,0,.05)
    color rgb(255,255,255)
    footer
      display flex
      align-items center
      justify-content space-between
      padding 5px 10px
      h4
        font-size 1rem
        text-align left
      .btn-download
        padding 5px
        border-radius 5px;
        background rgba(255,255,255,.1)
        color rgb(255,255,255)
    .con-img-post
      overflow hidden
      width 300px;
      height 200px;
      display flex
      align-items center
      justify-content center
      background rgb(255,255,255)
      position relative
      .btn-like
        position absolute
        right 5px
        top 5px
        z-index 100
        padding 5px
        border-radius 10px
      img
        z-index 10
        height 100%
        max-height 200px
        position relative
        transform scale(1.3)
</style>
