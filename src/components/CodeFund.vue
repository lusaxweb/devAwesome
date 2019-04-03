<template>
  <div class="codefund codefund-posts">
    <div v-if="ads" ref="codefund" class="codefundx">

      <a target="_black" :href="ads.campaignUrl">
        <img :src="ads.images[2].url" alt="">
        <h6>{{ ads.headline }}</h6>
        <p>
          {{ ads.body }}
        </p>
      </a>
      <a
        class="a-invite"
        href="https://codefund.io/invite/DKsKZqvuJko">
        Ethical ad by CodeFund
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodeFund',
  mounted () {
    this.getAds()
  },
  watch:{
    '$store.state.tagsActive': function () {
      this.getAds()
    },
    '$store.state.filters.section': function () {
      this.getAds()
    },
    '$store.state.filters.explore': function () {
      this.getAds()
    },
    '$store.state.filters.lenguaje': function () {
      this.getAds()
    }
  },
  props: {
    template: {
      type: String,
      default: 'default'
    },
    theme: {
      type: String,
      default: 'light'
    }
  },
  data: () => ({
    ads: null
  }),
  methods: {
    getAds () {
      fetch('https://codefund.app/properties/124/funder.json')
        .then(response => response.json())
        .then(json => {
          console.log(json)
          this.ads = json
        })
    }
  }
}
</script>
<style lang="stylus">
.codefund-posts
  .codefundx
    position absolute
    width 100%
    height 100%
    display flex
    align-items center
    justify-content center
    flex-direction column
    padding 10px
    box-sizing border-box
    top 0px
    left 0px
    .a-invite
      font-size .6rem
      padding-top 10px
      color rgb(255,255,255)
    h6
      font-size .7rem !important
      font-weight normal
      text-align center
      color rgb(255,255,255)
    p
      color rgb(255,255,255)
      font-size .7rem
      text-align center
    img
      max-width calc(100% - 70px)
      border-radius 5px
</style>
