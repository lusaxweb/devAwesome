<template>
  <div class="con-about">
    <figurex />
    <section ref="about" class="section-about" id="about">
      <h1>About</h1>

      <h3>
        Sobre Nosotros
      </h3>
      <p>
        DevAwesome Es una red creada por diseñadores y desarrolladores para programadores, nuestra finalidad es crear una comunidad donde se comparta lo mejor y en tendencia de la programacion para asi aumentar el crecimiento y aprendizaje
      </p>

       <h3>
        DevAwesome Se Actualiza en
      </h3>

      <ul class="list">
        <li>Nuevos Proyectos</li>
        <li>Frameworks</li>
        <li>Apps</li>
        <li>Open source</li>
        <li>Web Sites</li>
        <li>Proyectos de Github Mas populares</li>
        <li>Entre otros</li>
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
                <a href="">
                  <i class="flaticon-github-logo"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="flaticon-twitter-logo-silhouette"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="flaticon-instagram-logo"></i>
                </a>
              </li>
              <li>
                <a href="">
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
            <button>Become a Patron</button>
          </div>
        </div>
        <div class="creator">
          <div class="creator-img">
            <div class="img-creator">
              <img src="Manuel-Rovira-Contreras.jpg" alt="">
            </div>
            <ul>
              <li>
                <a href="">
                  <i class="flaticon-github-logo"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="flaticon-twitter-logo-silhouette"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="flaticon-instagram-logo"></i>
                </a>
              </li>
              <li>
                <a href="">
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
            <button>Become a Patron</button>
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

      <vs-button class="btn-patron" vs-color="#f96854" vs-type="filled">
        Become a Patron
      </vs-button>
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

    <!-- <figurex footerx /> -->
  </div>
</template>
<script>
import figurex from '../components/figure.vue'
export default {
  components: {
    figurex
  },
  mounted () {
    this.changeScrollTop()
  },
  watch: {
    '$route.params.section': function () {
      this.changeScrollTop()
    }
  },
  methods: {
    changeScrollTop () {
      let sec = this.$router.currentRoute.params.section
      console.log('this.$refs[sec].clientTop>', this.$refs[sec].offsetTop)
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
  section
    z-index 200
    position relative
  h1
    padding 10px
    text-align center
  h3
    padding 10px
  ul.list
    border-left 2px solid $fondo2
    margin 10px
    li
      padding 10px
      position relative
      padding-left 15px
      &:after
        content ''
        left -4px
        top 50%
        width 6px
        height 6px
        position absolute
        border-radius 50%
        background rgba(255,255,255,.4)
  .section-about
    width 100%
    padding 10px
    text-align left
    max-width 800px
    margin auto
    padding-top 100px
    p
      padding 10px
      color rgba(255,255,255,.8)
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
      background $fondo2
      border-radius 35px
      display flex
      align-items center
      justify-content center
      padding 20px 45px
      padding-bottom 0px
      position relative
      margin 20px

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
                color rgb(255,255,255)
                border-radius 10px
                transition all .25s ease
                &:hover
                  background $primary
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
          p
            padding-left 10px
        button
          padding 15px 40px
          background $morado
          color rgb(255,255,255)
          font-weight bold
          border-radius 8px
          position absolute
          bottom 0px
          transform translate(0, 30%)

.section-sponsor, .afiliates-section
  min-height 600px
  padding-top 100px
  .con-sponsor-sec
    width 100%
    h3
      font-size 1rem
      color rgba(255,255,255,.3)
      margin-top 50px
    ul
      display flex
      align-items center
      justify-content center
    li
      width 180px
      height 180px
      border-radius 10px
      border 1px dashed rgba(255,255,255,.2)
      position relative
      display block
      display flex
      align-items center
      justify-content center
      margin 15px
      color rgba(255,255,255,.6)
      cursor pointer
      transition all .25s ease
      &:hover
        background $primary
        border 1px solid $primary
      i
        font-size 1.5rem
        transition all .25s ease
        color rgba(255,255,255,1)
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

.afiliates-section
  h2
    padding-bottom 30px

@media only screen and (max-width: 1250px)
  .con-creators
    flex-direction column
    .creator
      margin-bottom 60px !important


</style>
