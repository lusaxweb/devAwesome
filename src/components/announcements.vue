<template>
  <div class="con-annuncement">
    <div v-if="ramdom == 1" class="sponsored conx">
      <div>
        <h4>💰 Sponsor with DevAwesome 🙏</h4>
        <p>
          DevAwesome is an open source MIT project if you want to contribute to keep improving, If you are interested in supporting this project, please consider becoming a patron.
        </p>
        <span class="btns-patreon">
          <a target="_blank" href="https://www.patreon.com/bePatron?c=1567892">Sponsor the <b>Development</b> 💻</a>
          <a target="_blank" href="https://www.patreon.com/manuelrovira">Sponsor the <b>Design</b> 🎨</a>
        </span>
      </div>
    </div>
    <div v-if="ramdom == 2" class="partner conx">
      <div>
        <h4>Partner with DevAwesome 🚀</h4>
        <p>
          DevAwesome is a project created for the community we want to improve and that everyone does it, it is always a good hand we are partners
        </p>
        <span class="become-partner">
          👍 Become a partners <b>dev.awesome.app@gmail.com</b>
        </span>
      </div>
    </div>
    <div v-if="ramdom == 3" class="vuesax conx">
      <a target="_blank" href="https://lusaxweb.github.io/vuesax/">
        <img src="vuesax-logo-vertical.png" alt="">
        <h4>New Framework components for Vuejs</h4>
        <p>
          The framework is focused on facilitating the development of applications, improving the design of the same without removing the necessary functionality (This site was created with <b>Vuesax</b>)
        </p>
      </a>
    </div>
    <div v-if="ramdom == 4" class="stars conx">
      <div>
        <img src="png/devAwesome.png" alt="">
        <h4>DevAwesome is an open source project</h4>
        <p>
          If you feel awesome and want to support us in a small way, please consider starring and sharing the repo! This helps us getting known and grow the community 🙏
        </p>
        <a href="https://github.com/lusaxweb/devAwesome" target="_blank" class="btn-star">👍 Support us with a <b>Star</b> 🌟</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    ramdom: 1
  }),
  watch: {
    '$store.state.posts': function () {
      this.ramdom = this.numeroAleatorio(1, 4)
    }
  },
  mounted () {
    this.ramdom = this.numeroAleatorio(1, 4)
  },
  updated () {
    this.ramdom = this.numeroAleatorio(1, 4)
  },
  methods: {
    numeroAleatorio (min, max) {
      return Math.round(Math.random() * (max - min) + min)
    }
  }
}
</script>
<style lang="stylus">
@require '../config'
.con-annuncement
    padding-bottom calc(75% + 37px)
  .conx
    width 100%
    height 100%
    position absolute
    display flex
    align-items center
    justify-content center
    color rgb(255,255,255)
    h4
      font-size .9rem
      padding 10px
    p
      font-size .7rem
      padding 10px
    .btn-star
      padding 8px 10px
      border-radius 10px
      background $verde
      color rgb(255,255,255)
      display inline-block
      font-size .8rem
    &.stars
      img
        width 40px
    &.vuesax
      a
        color rgb(255,255,255)
      img
        width 85%
    &.partner
      .become-partner
        padding 6px
        b
          cursor text
    &.sponsored
      .btns-patreon
        display flex
        align-items center
        justify-content center
        flex-direction column
        a
          padding 5px 10px
          display block
          background #f96854
          color rgb(255,255,255)
          border-radius 10px
          margin 3px 0px
          font-size .8rem

</style>
