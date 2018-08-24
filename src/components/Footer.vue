<template>
  <footer class="footerx">
    <div class="con-uls">
      <div class="con-suscribe">
        <h4>Collection of proyects made with</h4>
        <p>
          Subscribe to receive emails and notifications of our news and new publications
        </p>
        <div class="con-input-suscribe">
          <input placeholder="Email@gmail.com" type="text">
          <button>Subscribe</button>
        </div>

      </div>

      <div class="uls">
        <div
        :key="ul.title"
        v-for="ul in uls"
        class="ulx">
        <h5>{{ ul.title }}</h5>
        <ul>
          <li
            :key="item.text"
            v-for="item in ul.items">
            <a :href="item.href"> {{ item.text }} </a>
          </li>
        </ul>
        </div>
      </div>

    </div>

    <div class="con-cinta">
      <p>
        © 2018 <a href="https://lusaxweb.com/">Lusaxweb</a>. All rights reserved
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  data: () => ({
    uls: [
      {
        title: 'Social',
        items: [
          {
            text: 'Github',
            href: 'www.google.com'
          },
          {
            text: 'Dribbble',
            href: 'www.google.com'
          },
          {
            text: 'Behance',
            href: 'www.google.com'
          },
          {
            text: 'Twitter',
            href: 'www.google.com'
          },
          {
            text: 'Discord',
            href: 'www.google.com'
          },
          {
            text: 'Facebook',
            href: 'www.google.com'
          }
        ]
      },
      {
        title: 'Help',
        items: [
          {
            text: 'Issues',
            href: 'www.google.com'
          },
          {
            text: 'Edit Page',
            href: 'www.google.com'
          },
          {
            text: 'Latest Releases',
            href: 'www.google.com'
          },
          {
            text: 'FAQ',
            href: 'www.google.com'
          }
        ]
      },
      {
        title: 'More',
        items: [
          {
            text: 'Submit a proyect',
            href: 'www.google.com'
          },
          {
            text: 'Donate',
            href: 'www.google.com'
          },
          {
            text: 'Lusaxweb',
            href: 'www.google.com'
          },
          {
            text: 'Contact',
            href: 'www.google.com'
          },
          {
            text: 'Chat',
            href: 'www.google.com'
          },
          {
            text: 'Pull Request',
            href: 'www.google.com'
          }
        ]
      }
    ]
  })
}
</script>
<style lang="stylus">
@require '../config'
.footerx
  position relative
  width 100%
  padding 60px
  padding-top 80px
  box-sizing border-box
  padding-bottom 0px
  .con-cinta
    padding 20px
    font-size .75rem
    color rgba(255,255,255,.3)
    a
      color rgba(255,255,255,.8)
  .con-uls
    width 100%
    display flex
    align-items flex-start
    justify-content space-between
    .uls
      order 2
      display flex
      justify-content center
      align-items flex-start
      .ulx
        padding 50px
        padding-top 30px
        h5
          color rgb(255,255,255)
          text-align left
          padding-bottom 15px
          font-size .9rem
        li
          text-align left
          padding 5px 0px
          font-size .8rem
          a
            color rgba(255,255,255,.4)
            transition all .2s ease
            &:hover
              color rgba(255,255,255,1)
  .con-suscribe
    padding 20px
    max-width 350px
    order 3
    h4
      font-size 1.2rem
      text-align left
      padding 20px 0px
      padding-bottom 0px
      position relative
      &:after
        content ''
        position absolute
        left 0px
        top 10px
        width 25px
        height 3px
        background $verde
        border-radius 10px
        display block
    p
      padding 17px 0px
      font-size .75rem
      text-align left
    .con-input-suscribe
      width 100%;
      background $fondo2
      padding 9px
      border-radius 6px
      display flex
      align-items center
      justify-content center
      input
        width 100%
        padding 4px
        background transparent
        border 0px
        color rgb(255,255,255)
        &::placeholder
          color rgba(255,255,255,.2)
          letter-spacing 0.5px
      button
        padding 10px 15px
        border-radius 6px
        background $verde
        color rgb(255,255,255)

@media only screen and (max-width: 1050px)
  .footerx
    padding 20px
    padding-top 40px
@media only screen and (max-width: 950px)
  .footerx
    .con-uls
      display block
      .uls
        width 100%
      .con-suscribe
        max-width 100%
@media only screen and (max-width: 600px)
  .footerx
    .con-uls
      .uls
        flex-wrap wrap
        .ulx
          width 100%
          padding 10px
          h5
            padding-bottom 5px
          li
            padding 2px 0px

</style>
