<template>
  <div class="con-slide">
    <div class="slides">

      <div class="con-slides">
        <div class="con-lines con-lines-slide">
          <button @click="activeSlide == 0 ? activeSlide = slides.length - 1 : activeSlide --" class="btn-prev btn">
            <i class="material-icons">
              keyboard_arrow_left
            </i>
          </button>
          <div
            class="line"
            :class="{
              'activeLine':index == activeSlide
            }"
            :key="index"
            @click="activeSlide = index"
            v-for="(line, index) in slides" >
          </div>
          <button @click="activeSlide < slides.length - 1? activeSlide ++ : activeSlide = 0 " class="btn-next btn">
            <i class="material-icons">
              keyboard_arrow_right
            </i>
          </button>
        </div>
        <div
          :key="index"
          v-for="(slide, index) in slides"
          v-if="activeSlide == index"
          class="slide">
          <div class="con-text">
            <h3>{{ slide.title }}</h3>
            <p>{{ slide.description }}</p>
          </div>
          <img :src="slide.src" alt="">
        </div>
      </div>

    </div>
    <div class="con-ads-mini-slide">
      <div class="con-ads">
        <carbon />
      </div>
      <div class="con-mini-slide">
        <h3>Last uploaded projects</h3>
        <div class="con-slides">

          <ul class="con-lines">
            <li
              class="line"
              :class="{
                'activeLine':index == activeSlideMini
              }"
              :key="index"
              @click="changeMiniSlide(index)"
              v-for="(line, index) in miniSlides" >
            </li>
          </ul>

          <div
            @click="openMiniSlidePost(slide.key)"
            :key="index"
            v-for="(slide, index) in miniSlides"
            v-show="activeSlideMini == index"
            class="slide">
            <img :src="slide.miniImage" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import carbon from './Carbon'
export default {
  components: {
    carbon
  },
  data: () => ({
    activeSlide: 0,
    activeSlideMini: 0,
    slides: [
      {
        src: 'https://firebasestorage.googleapis.com/v0/b/lusaxweb-assets.appspot.com/o/slide%2Fwallpaper1.jpg?alt=media&token=0c36987e-e570-4d38-b9d2-0e7ff162f666',
        title: 'New Event For Vuejs',
        description: 'Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!'
      },
      {
        src: 'https://firebasestorage.googleapis.com/v0/b/lusaxweb-assets.appspot.com/o/slide%2Fwallpaper2.jpg?alt=media&token=d484ef73-5d9d-4261-9623-d05bfaba2359',
        title: 'nuevo slide',
        description: 'hola mundo'
      },
      {
        src: 'https://firebasestorage.googleapis.com/v0/b/lusaxweb-assets.appspot.com/o/slide%2Fwallpaper3.jpg?alt=media&token=fbfc6c08-3746-4358-9660-a3d07c6ffb43',
        title: 'nuevo slide',
        description: 'hola mundo'
      }
    ],
    miniSlides: []
  }),
  mounted () {
    this.getItemsSlideMini()
  },
  methods: {
    openMiniSlidePost (key) {
      this.$router.push({
        path: `/view/${key}`
      })
      document.querySelector('body').style = 'overflow: hidden'
    },
    changeMiniSlide (index) {
      this.activeSlideMini = index
    },
    getItemsSlideMini () {
      let ref = this.$firebase.database().ref('posts')
      ref.on('value', (snapshot) => {
        let posts = snapshot.val()
        let miniPosts = []
        let index = 0
        let lengthx = Object.keys(posts).length
        for (const post in posts) {
          if (index >= lengthx - 5) {
            posts[post].key = post
            miniPosts.unshift(posts[post])
          }
          index++
        }
        this.miniSlides = miniPosts
      })
    }
  }
}
</script>
<style lang="stylus">
@require '../config'
.con-slide
  width 100%
  display flex
  align-items center
  justify-content center
  padding 10px
  overflow hidden
  .slides
    width calc(100% - 410px)
    margin-right 10px
    position relative
    &:after
      content ''
      position absolute
      left 0px
      bottom 0px
      bottom 0px
      height 40%
      background: linear-gradient(0deg, alpha($fondo,1) 0%, rgba(0,0,0,0) 100%) !important
      z-index 150
      width 100%
    .con-slides
      position relative
      display block
      overflow hidden
      height 600px
    .slide
      position absolute
      left 0px
      top 0px
      width 100%
      background $fondo2
      overflow hidden
      border-radius 10px
      height 100%
      .con-text
        position absolute
        bottom 50px
        left 0px
        z-index 400
        padding 10px
        text-align left
        h3
          font-size 3.5rem
          font-weight normal
          font-family OpenSans !important
          text-transform capitalize
        p
          padding 10px
          padding-top 0px
          font-size .8rem
          color rgba(255,255,255,.6)
      img
        min-width 100%
        position relative
        border-radius 10px
  .con-ads-mini-slide
    width 400px
    height 100%
    position relative
    display flex
    flex-direction column
    .con-ads
      width 100%
      position relative
      height auto
      height 200px
      display flex
      align-items center
      justify-content center
    .con-mini-slide
      width 100%
      height calc(100% - 200px)
      padding-top 10px
      .con-slides
        width 100%
        height 100%
        overflow hidden
        border-radius 10px
        position relative
        .slide
          height 100%
          cursor pointer
          img
            width 100%
            border-radius 10px
            display block

.con-lines
  width 100%
  background: linear-gradient(0deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,0) 100%);
  position absolute
  left 0px
  bottom 0px
  z-index 200
  display flex
  align-items center
  justify-content flex-start
  padding 20px
  &.con-lines-slide
    justify-content center !important
    background transparent
  .btn
    position absolute
    z-index 100
    padding 10px
    border-radius 5px
    background $fondo2
    color rgb(255,255,255)
    display flex
    align-items center
    justify-content center
    transition all .25s ease
    &:hover
      background $primary
  .btn-prev
    left 10px
  .btn-next
    right 10px
  .line
    display block
    width 22px
    height 4px
    border-radius 5px
    background rgba(255,255,255,.3)
    margin 5px
    cursor pointer
    transition all .3s ease
    &.activeLine
      background rgb(255,255,255)

@media only screen and (max-width: 1160px)
  .con-slide
    display block
    .slides, .con-ads-mini-slide
      width 100% !important
      flex-direction row
  .con-ads-mini-slide
    align-items center
    justify-content center
  .con-ads
    width 50% !important
  .con-mini-slide
    width 50% !important
    position relative
@media only screen and (max-width: 850px)
  .con-ads-mini-slide
    flex-direction column !important
  .con-ads, .con-mini-slide
    width 80% !important
    margin 0px 10%
  .con-mini-slide
    order 1
  .con-ads
    order 3
@media only screen and (max-width: 600px)
  .con-ads, .con-mini-slide
    width 100% !important
</style>
