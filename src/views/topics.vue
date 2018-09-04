<template>
  <div class="topic">
    <titlex title="Topics Github" />
    <ul>
      <li  :key="index" v-for="(repo, index) in repos">
        <div class="repo" v-if="repo != 'ads'">
          <header>
            <h3>
              <span>{{ index + 1 }}</span>
              {{repo.name}}
            </h3>
            <div class="con-links">
              <a target="_blank" :href="repo.html_url">Github</a>
              <a v-if="repo.homepage" target="_blank" :href="repo.homepage">Page</a>
              <div class="con-star">
                <i class="material-icons">
                  star
                </i>
                {{ repo.stargazers_count }}
              </div>
            </div>
          </header>

          <p>{{ repo.description }}</p>

          <footer>
            <div  class="con-tags-list">
              <span :key="index" v-for="(tag,index) in repo.topics">{{ tag }}</span>
            </div>

            <div class="con-license" v-if="repo.license">
              {{ repo.license.name }}
            </div>
          </footer>
        </div>
        <div v-else>
          <Carbon />
        </div>
      </li>
    </ul>
    <vs-button class="btn-more" @click="page += 20" vs-color="#603aff" vs-type="filled">Load More repositories ...</vs-button>
  </div>
</template>
<script>
import titlex from '../components/titlex.vue'
import Carbon from '../components/Carbon.vue'
export default {
  components: {
    titlex,
    Carbon
  },
  data: () => ({
    repos: [],
    page: 20
  }),
  created () {
    this.topics()
  },
  watch: {
    page () {
      this.topics()
    }
  },
  methods: {
    topics () {
      let self = this
      var myHeaders = new Headers()

      myHeaders.append('Accept', 'application/vnd.github.mercy-preview+json')
      myHeaders.append('Content-Type', 'text/plain')

      var miInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
      }
      // search/repositories
      // fetch(`https://api.github.com/search/topics?q=vue`, miInit)
      fetch(`https://api.github.com/search/repositories?q=stars:>0&sort=stars&order=desc&per_page=${this.page}`, miInit)
        .then(response => response.json())
        .then(json => {
          console.log(json)
          let items = json.items
          items.splice(10, 0, 'ads')
          self.repos = items
        })
    }
  }
}
</script>
<style lang="stylus">
@require '../config'
.topic
  .repo
    background var(--fondo3)
    border-radius 10px
    padding 10px
    max-width 1000px
    margin 12px auto
    transition all .2s ease
    &:hover
      box-shadow 0px 5px 20px 0px rgba(0,0,0,.1)
      transform translate(0, -5px)
    header
      padding 10px
      padding-bottom 0px
      display flex
      align-items center
      justify-content space-between
      .con-links
        display flex
        align-items center
        justify-content center
        font-size .8rem
        a
          padding 5px 10px
          background var(--fondo2)
          color var(--text-color)
          margin 0px 3px
          border-radius 10px
          transition all .2s ease
          font-weight bold
          cursor pointer
          &:hover
            background $verde
            color rgb(255,255,255)
      h3
        font-size 1.4rem
        font-weight normal
        text-transform capitalize
        color var(--text-color)

        span
          width 30px
          height 30px
          display block
          background var(--fondo2)
          float left
          margin-right 10px
          border-radius 5px
          display flex
          align-items center
          justify-content center
          font-size 1.2rem
      .con-star
        margin-left 3px
        display flex
        align-items center
        justify-content center
        background $morado
        padding 0px 8px
        padding-left 0px
        border-radius 8px
        cursor pointer
        font-weight bold
        color rgb(255,255,255)
        i
          padding 5px
          background rgba(0,0,0,.1)
          border-radius 8px 0px 0px 8px
          margin-right 5px
    p
      text-align left
      padding 10px
      font-size .85rem
      color var(--text-alpha)

  footer
    .con-license
      width 100%
      font-size .7rem
      color rgba(255,255,255,.4)
      text-align right
      padding-right 10px
    .con-tags-list
      width 100%
      display flex
      align-items center
      justify-content flex-start
      flex-wrap wrap
      padding 0px !important
      span
        padding 3px 9px
        border-radius 20px
        background var(--fondo)
        margin 3px
        font-size .7rem
        cursor pointer
        text-transform capitalize
</style>
