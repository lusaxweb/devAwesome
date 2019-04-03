<template>
  <div class="topic">
    <titlex title="Topics Github" />

    <ul :style="{'border-bottom': `2px solid ${colorx}` }" class="filters">
      <li :class="{'active': colorx == 'rgb(255,255,255)'}" class="allx" @click="topics(), colorx = 'rgb(255,255,255)'">
        <img :src="`filters/github.png`" />
      </li>
      <li
        :class="{'active': filter.color == colorx}"
        :key="index"
        v-for="(filter, index) in filters"
        :style="{'border': `2px solid ${filter.color}`}"
        @click="getTopicsFilter(filter.filter), colorx = filter.color" >
        <!-- {{ filter.name }} -->
        <img :src="`filters/${filter.filter}.png`" />
      </li>
    </ul>

    <ul>
      <li  :key="index" v-for="(repo, index) in repos">
        <div class="repo" v-if="repo != 'ads'">
          <header>
          <a target="_blank" :href="repo.html_url">
            <h3>
              <span>{{ repo.index }}</span>
              {{repo.name}}
            </h3>
          </a>
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
              <span @click="openTag(tag)" :key="index" v-for="(tag,index) in repo.topics">{{ tag }}</span>
            </div>

            <div class="con-license" v-if="repo.license">
              {{ repo.license.name }}
            </div>
          </footer>
        </div>
        <div v-else>
          <!-- <Carbon /> -->
          <CodeFundView
            propertyId="8aed6e67-5cf6-4217-a805-d1713785b7e5"
           />
        </div>
      </li>
    </ul>
    <vs-button class="btn-more" @click="page += 20" vs-color="#603aff" vs-type="filled">Load More repositories ...</vs-button>
  </div>
</template>
<script>
import titlex from '../components/titlex.vue'
import Carbon from '../components/Carbon.vue'
import CodeFundView from '../components/CodeFundView.vue'
export default {
  components: {
    titlex,
    Carbon,
    CodeFundView
  },
  data: () => ({
    colorx: 'rgb(255,255,255)',
    repos: [],
    page: 20,
    filterx: null,
    filters: [
      {
        name: 'Vuejs',
        color: '#41b883',
        filter: 'vue',
      },
      {
        name: 'Reactjs',
        color: '#61dafb',
        filter: 'react'
      },
      {
        name: 'Angularjs',
        color: '#dd1b16',
        filter: 'angular'
      },
    ]
  }),
  created () {
    this.topics()
    this.$nextTick(() => {
      this.$store.state.openSidebar = false
    })
  },
  watch: {
    colorx () {
      this.page = 20
    },
    page () {
      if (this.filterx) {
        this.getTopicsFilter(this.filterx)
      } else {
        this.topics()
      }
    }
  },
  methods: {
    openTag (tag) {
      this.$router.push('/search/' + tag)
    },
    getTopicsFilter (filter) {
      this.filterx = filter
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

      let url = `https://api.github.com/search/repositories?q=topic:${filter}&stars:>0&sort=stars&order=desc&per_page=${this.page}`

      fetch(url, miInit)
        .then(response => response.json())
        .then(json => {
          console.log(json)
          let items = json.items
          items.map((item, index) => {
            item.index = index + 1
          })
          console.log(items)
          items.splice(this.page - 10, 0, 'ads')
          self.repos = items
        })
    },
    topics () {
      this.filterx = null
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

      let url = `https://api.github.com/search/repositories?q=stars:>0&sort=stars&order=desc&per_page=${this.page}`
      // search/repositories

      fetch(url, miInit)
        .then(response => response.json())
        .then(json => {
          console.log(json)
          let items = json.items
          items.map((item, index) => {
            item.index = index + 1
          })
          console.log(items)
          items.splice(this.page - 10, 0, 'ads')
          self.repos = items
        })
    }
  }
}
</script>
<style lang="stylus">
@require '../config'
.topic
  .filters
    width 100%
    display flex
    align-items center
    justify-content center
    border-bottom 3px
    li
      padding 10px
      display flex
      align-items center
      justify-content center
      margin 0px 5px
      font-size .8rem
      border-radius 12px
      cursor pointer
      margin-bottom 8px
      transition all .25s ease
      opacity .5
      &:hover
        opacity 1
      img
        width 30px
      &.active
        border-radius 12px 12px 0px 0px
        transform translate(0, 10px)
        opacity 1
      &.allx
        border 2px solid rgb(255,255,255)

  ul
    padding 0px 10px
  .repo
    background var(--fondo3)
    border-radius 10px
    padding 5px
    max-width 1000px
    margin 10px auto
    transition all .2s ease
    &:hover
      box-shadow 0px 5px 20px 0px rgba(0,0,0,.1)
      transform translate(0, -4px)
    header
      padding 5px
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
        font-size 1.2rem
        font-weight normal !important
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
        opacity 1
        transition all .25s ease
        box-shadow 0px 0px 0px -2px alpha($morado, 0)
        &:hover
          box-shadow 0px 5px 10px -2px alpha($morado, .6)
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
      font-size .6rem
      color var(--text-alpha2)
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
        padding 2px 8px
        border-radius 20px
        background var(--fondo)
        margin 3px
        font-size .6rem
        cursor pointer
        text-transform capitalize
        transition all .25s ease
        &:hover
          background $primary
</style>
