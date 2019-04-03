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
    fetch('https://codefund.app/properties/124/funder.json')
      .then(response => response.json())
      .then(json => {
        this.ads = json
      })
  },
  data: () => ({
    ads: null
  })
}
</script>
<style lang="stylus" scoped>
.codefund-posts
  position relative
  // background rgb(100,0,200)
  width 300px
  height 300px
  margin auto
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
      max-width calc(100% - 80px)
      border-radius 5px
</style>
