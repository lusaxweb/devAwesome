<template>
  <div class="con-about">
    <figurex v-if="!$store.state.light" />
    <section ref="about" class="section-about" id="about">
      <h1>About</h1>

      <p>
        We are a curated list of everything related to development with a visual representation, our goal is to get the programmers to find the best for their projects and developments, the projects are purified by a minimum of 1000 stars in github and a critique to have the best projects in our network
      </p>

       <h3>
        DevAwesome Updated in
      </h3>

      <ul class="list">
        <li>New projects</li>
        <li>Frameworks</li>
        <li>Apps</li>
        <li>Open source</li>
        <li>Web Sites</li>
        <li>Most popular Github projects</li>
        <li>others</li>
      </ul>
    </section>
    <section ref="creators" class="creators-list" id="creators">
      <h2>Creators of DevAwesome</h2>
      <div class="con-creators">
        <div class="creator">
          <div class="creator-img">
            <div class="img-creator">
              <img src="Luis-Daniel-Rovira-Contreras.jpg" alt="">
            </div>
            <ul>
              <li>
                <a target="_blank" href="https://github.com/luisDanielRoviraContreras">
                  <i class="flaticon-github-logo"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/luisdfly">
                  <i class="flaticon-twitter-logo-silhouette"></i>
                </a>
              </li>
              <!-- <li>
                <a target="_blank" href="">
                  <i class="flaticon-instagram-logo"></i>
                </a>
              </li> -->
              <li>
                <a target="_blank" href="https://www.linkedin.com/in/luis-daniel-rovira-contreras/">
                  <i class="flaticon-linkedin-logo"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="creator-btn">
            <div class="text-creator">
              <h3>Luis Daniel Rovira Contreras</h3>
              <p>Full-stack Frontend Developer</p>
            </div>
            <button>
              <a target="_blank" href="https://www.patreon.com/luisdanielroviracontreras">
                Become a Patron
              </a>
            </button>
          </div>
        </div>
        <div class="creator">
          <div class="creator-img">
            <div class="img-creator">
              <img src="Manuel-Rovira-Contreras.jpg" alt="">
            </div>
            <ul>
              <li>
                <a target="_blank" href="https://dribbble.com/ManuelRovira">
                  <i class="flaticon-dribbble-logo"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.behance.net/ManuelRovira">
                  <i class="flaticon-behance-logo"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/ManuelRovira2">
                  <i class="flaticon-twitter-logo-silhouette"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/ManuelRovira">
                  <i class="flaticon-github-logo"></i>
                </a>
              </li>
              <!-- <li>
                <a target="_blank" href="">
                  <i class="flaticon-instagram-logo"></i>
                </a>
              </li> -->
              <li>
                <a target="_blank" href="https://www.linkedin.com/in/manuel-rovira/">
                  <i class="flaticon-linkedin-logo"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="creator-btn">
            <div class="text-creator">
              <h3>Manuel Rovira Contreras</h3>
              <p>Designer UX / UI</p>
            </div>
            <button>
              <a target="_blank" href="https://www.patreon.com/user/creators?u=12909465">
                Become a Patron
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section ref="sponsor" class="section-sponsor" id="sponsor">
      <h2>Sponsor and Backers</h2>

      <div class="con-sponsor-sec diamond">
        <h3>Diamond Sponsor ($500/mo)</h3>

        <ul>
          <li>
            <i class="material-icons">
              add
            </i>
          </li>
          <li>
            <i class="material-icons">
              add
            </i>
          </li>
          <li>
            <i class="material-icons">
              add
            </i>
          </li>
        </ul>

      </div>

      <div class="con-sponsor-sec gold">
        <h3>Gold Sponsor ($100/mo)</h3>

        <ul>
          <li>
            <i class="material-icons">
              add
            </i>
          </li>
          <li>
            <i class="material-icons">
              add
            </i>
          </li>
          <li>
            <i class="material-icons">
              add
            </i>
          </li>
          <li>
            <i class="material-icons">
              add
            </i>
          </li>
          <li>
            <i class="material-icons">
              add
            </i>
          </li>
        </ul>

      </div>

      <a class="btn-patron">
        Become a Patron
      </a>
    </section>

    <section ref="afiliates" class="afiliates-section">
      <h2>Afiliates</h2>
      <div class="con-sponsor-sec">
        <ul>
          <li class="isActive">
            <img src="vuesax-logo.png" alt="">
          </li>
          <li>
            <i class="material-icons">
              add
            </i>
          </li>
          <li>
            <i class="material-icons">
              add
            </i>
          </li>
        </ul>
      </div>

    </section>
    <!-- <h2>Brand</h2> -->
    <!-- <Carbon /> -->
    <CodeFundView
            propertyId="8aed6e67-5cf6-4217-a805-d1713785b7e5"
           />
    <!-- <figurex footerx /> -->
  </div>
</template>
<script>
import figurex from '../components/figure.vue'
import Carbon from '../components/Carbon.vue'
import CodeFundView from '../components/CodeFundView.vue'

export default {
  components: {
    figurex,
    Carbon,
    CodeFundView
  },
  mounted () {
    this.changeScrollTop()
    this.$nextTick(() => {
      this.$store.state.openSidebar = false
    })
  },
  watch: {
    '$route.params.section': function () {
      this.changeScrollTop()
    }
  },
  methods: {
    changeScrollTop () {
      let sec = this.$router.currentRoute.params.section
      window.scrollTo(0, this.$refs[sec].offsetTop)
    }
  }
}
</script>
<style lang="stylus">
@require '../config'
.con-about
  padding 10px
  position relative
  height auto
  background var(--fondo)
  section
    z-index 200
    position relative
  h1
    padding 10px
    text-align center
    color var(--text-color)
  h3
    color var(--text-color)
    padding 10px
  h2
    color var(--text-color)
  ul.list
    border-left 2px solid var(--fondo2)
    margin 10px
    li
      padding 10px
      position relative
      padding-left 15px
      color var(--text-color)
      &:after
        content ''
        left -4px
        top 50%
        width 6px
        height 6px
        position absolute
        border-radius 50%
        background var(--fondo3)
  .section-about
    width 100%
    padding 10px
    text-align left
    max-width 800px
    margin auto
    padding-top 100px
    p
      padding 10px
      color var(--text-alpha)
.creators-list
  padding-top 100px
  .con-creators
    width 100%
    height auto
    display flex
    align-items center
    justify-content center
    padding 40px 20px
    padding-bottom 100px
    padding-top 100px

    .creator
      background var(--fondo2)
      border-radius 35px
      display flex
      align-items center
      justify-content center
      padding 20px 45px
      padding-bottom 0px
      position relative
      margin 20px
      box-shadow 0px 5px 20px 0px rgba(0,0,0,.1)

      .creator-img
        ul
            display flex
            align-items center
            justify-content center
            transform translate(0, -25px)
            li
              margin 0px 2px
              a
                padding 6px 10px
                color var(--text-color)
                border-radius 10px
                transition all .25s ease
                &:hover
                  background $primary
                  color rgb(255,255,255)
                i
                  font-size .8rem !important

        .img-creator
          width 180px
          height 180px
          transform translate(0, -35px)
          img
            width 170px
            border-radius 25px

      .creator-btn
        display flex
        align-items center
        justify-content center
        flex-direction column
        text-align left
        .text-creator
          transform translate(0, -65%)
          h3
            padding 10px
            color var(--text-color)
          p
            padding-left 10px
        button
          background $morado
          color rgb(255,255,255) !important
          font-weight bold
          border-radius 8px
          position absolute
          bottom 0px
          transform translate(0, 30%)
          box-shadow 0px 0px 0px -2px alpha($morado, 0)
          transition all .25s ease
          &:hover
            box-shadow 0px 5px 10px -2px alpha($morado, .6)
          a
            padding 15px 40px
            display block
            color rgb(255,255,255)

.section-sponsor, .afiliates-section
  min-height 600px
  padding-top 100px
  .con-sponsor-sec
    width 100%
    h3
      font-size 1rem
      color var(--text-alpha)
      margin-top 50px
    ul
      display flex
      align-items center
      justify-content center
      flex-wrap wrap
    li
      width 180px
      height 180px
      border-radius 10px
      border 1px dashed var(--text-alpha)
      position relative
      display block
      display flex
      align-items center
      justify-content center
      margin 15px
      color var(--text-color)
      cursor pointer
      transition all .25s ease
      &:hover
        color rgb(255,255,255)
        background $primary
        border 1px solid $primary
        i
          color rgb(255,255,255)
      i
        font-size 1.5rem
        transition all .25s ease
        color var(--text-color)
      img
        width 100%
      &.isActive
        background rgb(255,255,255)
        border 1px solid rgb(255,255,255) !important
    &.gold
      li
        width 130px !important
        height 130px !important

.btn-patron
  font-weight bold
  padding 12px 25px
  margin-top 30px
  background #f96854
  border-radius 8px
  margin-top 20px
  display inline-block
  cursor pointer
  opacity 1
  transition all .25s ease
  box-shadow 0px 0px 0px -2px alpha(#f96854, 0)
  &:hover
    box-shadow 0px 6px 15px -5px alpha(#f96854, .6)

.afiliates-section
  h2
    padding-bottom 30px
    color var(--text-color)

@media only screen and (max-width: 1250px)
  .con-creators
    flex-direction column
    .creator
      margin-bottom 60px !important

@media only screen and (max-width: 1250px)
  .con-creators
    .creator
      display block !important
      .creator-img
        width 100%
        .img-creator
          margin auto !important
      .creator-btn
        .text-creator
          transform translate(0) !important
          padding-bottom 50px
</style>
