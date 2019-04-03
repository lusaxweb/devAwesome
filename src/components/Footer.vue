<template>
  <footer class="footerx">
    <div class="con-uls">
      <div class="con-suscribe">
        <h4>Collection of proyects made with</h4>
        <p>
          Subscribe to receive emails and notifications of our news and new publications
        </p>
        <div class="con-input-suscribe">
          <input v-model="email" placeholder="Email@gmail.com" type="text">
          <!-- <button></button> -->
          <vs-button :disabled="!email" @click="subscribe" vs-color="success">Subscribe</vs-button>
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
            <router-link v-if="item.local" exact :to="item.href"> {{ item.text }} </router-link>
            <a v-else target="_blank" :href="item.href"> {{ item.text }} </a>
          </li>
        </ul>
        </div>
      </div>

    </div>

    <div class="con-values-site">
      <ul>
        <li>
          <h5>Proyects:</h5>
          <span>{{ $store.state.proyects }}</span>
        </li>
        <li>
          <h5>Valued:</h5>
          <span>{{ $store.state.likesNumber }}</span>
        </li>
        <li>
          <h5>Views:</h5>
          <span>{{ $store.state.viewsNumber }}</span>
        </li>
      </ul>
    </div>

    <div class="con-cinta">
      <p>
        © 2018 <a href="https://lusaxweb.com/">Lusaxweb</a>. All rights reserved
      </p>
      <p>
        Made with ♥ Lusaxweb from <a href="https://dribbble.com/ManuelRovira">Manuel Rovira</a> , <a href="https://github.com/luisDanielRoviraContreras">Luis Rovira</a>
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  data: () => ({
    email: '',
    uls: [
      {
        title: 'Social',
        items: [
          {
            text: 'Twitter',
            href: 'https://twitter.com/DevAwesome_'
          },
          {
            text: 'Github',
            href: 'https://github.com/lusaxweb/devAwesome'
          },
          {
            text: 'Discord',
            href: 'https://discord.gg/VxacJRH'
          },
          {
            text: 'Behance',
            href: 'https://www.behance.net/ManuelRovira'
          },
          {
            text: 'Dribbble',
            href: 'https://dribbble.com/ManuelRovira'
          }
          // {
          //   text: 'Facebook',
          //   href: 'www.google.com'
          // }
        ]
      },
      {
        title: 'Help',
        items: [
          {
            text: 'Issues',
            href: 'https://github.com/lusaxweb/devAwesome/issues'
          },
          {
            text: 'Edit Page',
            href: 'https://github.com/lusaxweb/devAwesome/'
          },
          {
            text: 'Latest Releases',
            href: 'https://github.com/lusaxweb/devAwesome/releases'
          }
        ]
      },
      {
        title: 'More',
        items: [
          {
            text: 'Submit a project',
            href: '/addPost/',
            local: true
          },
          {
            text: 'Donate',
            href: '/About/sponsor',
            local: true
          },
          {
            text: 'Lusaxweb',
            href: 'http://www.lusaxweb.com/'
          },
          {
            text: 'Contact',
            href: 'mailto:dev.awesome.app@gmail.com'
          },
          {
            text: 'Pull Request',
            href: 'https://github.com/lusaxweb/devAwesome/pulls'
          }
        ]
      }
    ]
  }),
  created () {
    this.getNumbers()
  },
  methods: {
    getNumbers () {
      let ref = this.$firebase.database().ref('posts')
      ref.on('value', (snap) => {
        let posts = snap.val()
        let ArrayPosts = Object.values(posts)
        let likes = 0
        let views = 0
        ArrayPosts.forEach((post) => {
          if (post.hasOwnProperty('likes')) {
            likes += Object.keys(post.likes).length
          }
          views += post.views
        })
        this.$store.state.likesNumber = likes
        this.$store.state.viewsNumber = views
        this.$store.state.proyects = Object.keys(posts).length
      })
    },
    subscribe () {
      this.$firebase.database().ref('subscribe').push(this.email)
      this.email = ''
      this.$vs.notify({
        title: 'Successful subscription',
        text: 'Thank you very much for subscribing',
        color: 'success',
        icon: 'email'
      })
    }
  }
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
  z-index 500
  background var(--fondo)
  .con-values-site
    display flex
    align-items center
    justify-content center
    ul
      border-top 1px solid var(--fondo3)
      display flex
      align-items center
      justify-content center
      padding 20px
      li
        padding 15px
        display flex
        align-items center
        justify-content center
        h5
          font-size 1rem !important
          font-weight normal !important
          color var(--text-color)
          opacity .7
        span
          font-size 1.2rem
          color $verde
          margin-left 10px
  .con-cinta
    padding 20px
    font-size .75rem
    color var(--text-alpha)
    a
      color var(--text-color)
      text-decoration underline
      &:hover
        color $primary
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
          color var(--text-color)
          text-align left
          padding-bottom 15px
          font-size .9rem
        li
          text-align left
          padding 5px 0px
          font-size .8rem
          a
            color var(--text-color)
            transition all .2s ease
            opacity .3
            &:hover
              opacity 1
              color var(--text-color)
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
      color var(--text-alpha)
    .con-input-suscribe
      width 100%;
      background var(--fondo2)
      padding 9px
      border-radius 6px
      display flex
      align-items center
      justify-content center
      input
        width calc(100% - 90px)
        padding 4px
        background transparent
        border 0px
        color var(--text-color)
        &::placeholder
          color var(--text-color)
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
@media only screen and (max-width: 600px)
  .con-values-site
    ul
      flex-wrap wrap
      li
        font-size 1rem !important

</style>
