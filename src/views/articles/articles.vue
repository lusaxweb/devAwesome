<template>
  <div class="con-articles">
    <titlex title="Articles" />

    <ul class="ul-articles">
      <articlex :article="article" :index="index" class="articlex" :key="index" v-for="(article, index) in $store.state.articles" />
    </ul>

    <!-- <Carbon />
     -->
     <CodeFundView
      propertyId="8aed6e67-5cf6-4217-a805-d1713785b7e5"
      />
  </div>
</template>
<script>
import articlex from './article.vue'
import titlex from '../../components/titlex.vue'
import Carbon from '../../components/Carbon.vue'
import CodeFundView from '../../components/CodeFundView.vue'
export default {
  components: {
    titlex,
    Carbon,
    articlex,
    CodeFundView
  },
  mounted () {
    this.getArticles()
    this.$store.state.openSidebar = false
  },
  methods: {
    getArticles () {
      var starCountRef = this.$firebase.database().ref('articles')
      starCountRef.on('value', (snapshot) => {
        console.log('value>>>>>>>>>>', snapshot.val())
        let articles = snapshot.val()
        this.$store.state.articles = articles
      })
    }
  }
}
</script>
<style lang="stylus">
@require '../../config'


</style>
