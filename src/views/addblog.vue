<template>
  <div class="con-add-blog ">
    <titlex title="Add Article" />
    <div class="con-inputs">
      <vs-input
          :vs-danger="!upload.title && activeDangers"
          vs-danger-text="This value is required"
          class="inputx" placeholder="Title of my article" vs-label="Title" v-model="upload.title"/>
      <vs-input
          :vs-danger="!upload.description && activeDangers"
          vs-danger-text="This value is required"
          class="inputx" placeholder="Description of my article" vs-label="Description" v-model="upload.description"/>

      <vs-chips
        :class="{
          'chips-danger': activeDangers && tags.length == 0
        }"
        placeholder="Tags"
        v-model="tags">
          <vs-chip
            :key="tag"
            @click="remove(tag)"
            v-for="tag in tags" closable>
            {{ tag }}
          </vs-chip>
        </vs-chips>
        <p class="text-description-input">
          After typing the tag press the <b> Enter </b> key to add it
        </p>

        <span v-if="tags.length == 0 && activeDangers" class="span-text-validationx">
          This value is required
        </span>

        <div :class="{'fileActive': cover, 'fileDanger': !cover && activeDangers}" class="con-input-file">
          <label for="">Cover image</label>
          <div class="input-file">
            <i class="material-icons">
              panorama
            </i>
            <input @change="changeFile" ref="file" type="file">
          </div>

          <span v-if="!cover && activeDangers" class="span-text-validationx">
            This value is required
          </span>
        </div>

    </div>
    <vs-tabs vs-alignment="center">
      <vs-tab vs-label="Markdown">
        <header class="headerx">
          <div class="con-add-img">
            <input @change="addImage" ref="addimage" type="file">
            <i class="material-icons">
              photo
            </i>

            Upload Image
          </div>
          <div @click="selectedAll" class="selectedAll">
            <i class="material-icons">
              select_all
            </i>
          </div>
          <a class="helpx" target="_blank" href="https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet">
            <i class="material-icons">
              live_help
            </i>
          </a>
        </header>
        <div class="con-markdownx">
          <textarea placeholder="Add the markdown of your great article" :class="{'textarea-danger': markdownx == '' && activeDangers}" :style="{'min-height': minHeight}" ref="textarea" @input="textareaResize" class="textarea-markdown" v-model="markdownx"></textarea>
        </div>
      </vs-tab>
      <vs-tab vs-label="Preview">
        <div v-html="getHtml" class="con-htmlx"></div>
      </vs-tab>
    </vs-tabs>

    <footer class="footerx_">
      <vs-button @click="addArticle" vs-color="success" vs-type="filled">Publish Article</vs-button>
    </footer>

    <Carbon />
  </div>
</template>
<script>
// import MarkdownIt from 'markdown-it'4
import Carbon from '../components/Carbon.vue'
import titlex from '../components/titlex.vue'
import 'highlight.js/styles/hybrid.css'
import hljs from 'highlight.js'
var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }

    return '' // use external default escaping
  }
})

md.use(require('markdown-it-container'), 'warning')

export default {
  components:{
    titlex,
    Carbon
  },
  data: () => ({
    cover: false,
    activeDangers: false,
    tags: [],
    popupActivo: false,
    upload: {
      tags: '',
      title: '',
      description: '',
      markdown: '',
      cover: '',
      user: {},
      views: 0,
      active: true,
      likes: {},
      timestamp: new Date()
    },
    htmlx: '',
    minHeight: 'auto',
    markdownx: `# My Title

::: warning

## The article that I am going to add has

- A very good writing
- It's about code development or something to do with the community of programmers
- Does not contain offenses or insults
- I have the knowledge of how to write in markdown and thus add the best practices and details
- It is an article of my own and if I am not going to add the reference of the source
:::
`
  }),
  mounted () {
    // autosize(this.$refs.textarea)
    this.$nextTick(() => {
      this.minHeight = this.$refs.textarea.scrollHeight + 20 + 'px'
    })
  },
  computed: {
    getHtml () {
      let render = md.render(this.markdownx)
      return render
    },
    isRoot () {
      return this.$store.state.user ? (this.$store.state.user.displayName === 'ldrovira' || this.$store.state.user.displayName === 'ManuelRoviraDesign' || this.$store.state.user.email === 'luisrovirac@gmail.com' || this.$store.state.user.email === 'chait7conrom@gmail.com') : false
    }
  },
  methods: {
    changeFile (evt) {
      if (evt.target.value !== '') {
        this.cover = true
      } else {
        this.cover = false

      }
    },
    addArticle () {
      let user = {}
      if (!this.$store.state.user) {
        this.$vs.notify({
          title: 'Necessary Login User',
          text: 'To be able to do this action you need a user in login',
          color: 'danger'
        })
        return
      }

      if (!this.upload.title || !this.upload.description || this.tags.length === 0) {
        this.activeDangers = true
        this.$vs.notify({
          title: 'Missing fields to fill',
          text: 'Fill in all the fields required to send',
          color: 'danger',
          icon: 'cloud_off'
        })
        return
      }

      this.$vs.loading({
        background: '#231F34'
      })

      fetch(`https://api.github.com/search/users?q=${this.$store.state.user.displayName}`)
        .then(response => response.json())
        .then(json => {
          if (this.isRoot) {
            user = {
              displayName: 'DevAwesome',
              email: 'dev.awesome.app@gmail.com',
              photoURL: 'devAwesome',
              uid: 'devAwesome',
              githubUrl: 'https://github.com/lusaxweb/devAwesome'
            }
          } else {
            user = {
              displayName: this.$store.state.user.displayName,
              email: this.$store.state.user.email,
              photoURL: this.$store.state.user.photoURL,
              uid: this.$store.state.user.uid,
              githubUrl: json.items[0].html_url
            }
          }

          this.upload.markdown = this.markdownx

          this.upload.user = user
          this.upload.tags = this.tags.join()

          let file = this.$refs.file.files[0]
          var ref = this.$firebase.storage().ref('articles/' + file.name)
          ref.put(file).then((snapshot) => {
            ref.getDownloadURL().then((url) => {
              this.upload.cover = url
              this.$firebase.database().ref('articles/').push({
                ...this.upload
              }).then((snap) => {
                const key = snap.key
                this.$vs.loading.close()
                this.$router.push({
                  path: `/article/${key}`
                })

                this.$vs.notify({
                  title: 'Successful Publish',
                  text: 'The Article was successfully Published',
                  color: 'success',
                  icon: 'cloud_done'
                })
              })
            })
          })
        })
    },

    selectedAll () {
      this.$refs.textarea.focus()
      this.$refs.textarea.select()
    },
    insertAtCursor (myField, myValue) {
      if (myField.selectionStart || myField.selectionStart === '0') {
        var startPos = myField.selectionStart
        var endPos = myField.selectionEnd
        this.markdownx = this.markdownx.substring(0, startPos) + myValue + this.markdownx.substring(endPos, this.markdownx.length)
      } else {
        this.markdownx += myValue
      }
    },
    addImage () {
      let file = this.$refs.addimage.files[0]
      var ref = this.$firebase.storage().ref('articles/' + file.name)
      ref.put(file).then((snapshot) => {
        ref.getDownloadURL().then((url) => {
          // self.upload.miniImage = url
          console.log('url', url)
          this.insertAtCursor(this.$refs.textarea, `![${file.name}](${url})`)
        })
      })

      console.log(this.$refs.textarea.selectionStart)

    },
    remove (item) {
      this.tags.splice(this.tags.indexOf(item), 1)
    },
    textareaResize () {
      this.minHeight = 'auto'
      this.$nextTick(() => {
        this.minHeight = this.$refs.textarea.scrollHeight + 20 + 'px';
      })
    }
  }
}
</script>
<style lang="stylus">
@require '../config'

.con-input-file
  width 100%
  text-align left
  clear both
  display flex
  align-items center
  flex-direction column
  justify-content flex-start
  &.fileActive
    .input-file
      border 1px dashed $verde
    i
      color $verde !important
  &.fileDanger
    .input-file
      border 1px dashed rgb(255, 71, 87)
    i
      color rgb(255, 71, 87) !important
  label
    display block
    padding 8px
    text-align center
    font-size .9rem
  .input-file
    width 100%
    height 200px
    position relative
    border 1px dashed var(--fondo3)
    border-radius 10px
    display flex
    align-items center
    justify-content center
    input
      position absolute
      left 0px
      top 0px
      width 100%
      height 100%
      opacity 0
      z-index 100
    i
      font-size 4rem
      color var(--fondo3)
.footerx_
  width 100%
  max-width 1000px
  display flex
  margin 0px auto
  padding 0px 15px
  align-items center
  justify-content center
  padding-bottom 40px
  button
    padding-left 50px
    padding-right 50px
.headerx
  width 100%
  max-width 1000px
  display flex
  margin 0px auto
  padding 0px 15px
  align-items center
  justify-content flex-end
  transform translate(0, 25px)
.helpx
  width 40px
  height 40px
  overflow hidden
  background $amarillo
  border-radius 10px
  position relative
  display flex
  align-items center
  justify-content center
  cursor pointer
  margin-left 7px
  color rgb(255,255,255)
  i
    z-index 10
    width 100%
    font-size 1.3rem
.selectedAll
  width 40px
  height 40px
  overflow hidden
  background $morado
  border-radius 10px
  position relative
  display flex
  align-items center
  justify-content center
  cursor pointer
  margin-left 7px
  i
    z-index 10
    width 100%
    font-size 1.3rem
.con-add-img
  width auto
  padding 10px 10px
  overflow hidden
  background $primary
  border-radius 10px
  position relative
  display flex
  align-items center
  justify-content center
  cursor pointer
  font-size .8rem
  input
    cursor pointer
    display block
    width 100%
    height 100%
    position absolute
    left 0px
    top 0px
    opacity 0
    z-index 100
  i
    z-index 10
    font-size 1.3rem
    margin-right 5px
.con-inputs
  width 100%
  height auto
  display flex
  align-content center
  justify-content center
  padding-bottom 30px
  flex-direction column
  max-width 500px
  margin auto
  padding 10px
  >div
    width 100%
.vs-input-label
  text-align left
  display block
  color var(--text-color) !important
  padding-bottom 5px !important
.con-ul-tabs
  padding-bottom 2px
  z-index 1000
  button
    color rgb(255,255,255)
.con-slot-tabs
  // background #f6f9fc
// .con-add-blog
  // background rgb(255,255,255)
.con-markdownx
  padding 10px
  width 100%
  .textarea-markdown
    width 100%
    padding 20px
    overflow hidden
    resize none
    border 0px
    max-width 1000px
    height 500px
    background rgb(255,255,255)
    box-shadow 0px 3px 10px 0px rgba(0,0,0,.1)
    border-radius 10px
    text-rendering: auto;
    &.textarea-danger
      border 1px dashed rgb(255, 71, 87)
      background rgba(255, 71, 87, .05)
    // min-height 500px

.con-vs-checkbox
  justify-content flex-start !important

.con-chips
  background var(--fondo2)
  input
    color var(--text-color)
.con-vs-chip
  cursor default
  background $morado
  span
    color rgb(255,255,255) !important
.chips-danger
  .no-items
    border 1px solid rgb(255, 71, 87)

.label-tags
  width 100%
  text-align left
  display block
  font-size .9rem
  padding 5px
  padding-left 8px

.span-text-validationx
  padding: 2px 4px;
  padding-bottom: 4px;
  display: block;
  font-size .6rem
  text-align left
  color rgb(255, 71, 87)
  width 100%

.selectx
  width 100%
.con-add-Post
  position relative
  left 0px
  top 0px
  background var(--fondo)
  width 100%
  overflow auto
  padding-top 0px
  .fileDanger
    border 1px solid rgb(255, 71, 87) !important
    label
      color rgb(255, 71, 87) !important
  .fileActive
    i
      color $verde !important
      font-size 4rem !important
      top 40% !important
    label
      color $verde !important
      font-size .7rem !important
      padding-top 60px !important
      font-weight normal
  .con-file
    width calc(50% - 5px)
    height 150px
    background var(--fondo2)
    position relative
    float left
    display flex
    align-items center
    justify-content center
    margin 14px 0px
    margin-right 5px
    border-radius 5px

    &.con-file2
      margin-right 0px !important
      margin-left 5px !important
    i
      display block
      left 50%
      top 50%
      position absolute
      transform translate(-50%, -50%)
      font-size 6rem
      color var(--fondo)
      transition all .25s ease
    label
      padding 10px
      display block
      text-align center
      z-index 10
      font-weight bold
      color var(--text-color)
      letter-spacing 1px
      transition all .25s ease
    input
      top 0px
      left 0px
      position absolute
      width 100%
      height 100%
      opacity 0
      z-index 100
      cursor pointer

.btn-upload
  width 100%
.con-inputs
  display flex
  align-items center
  justify-content center
  .vs-input-label
    color var(--text-color) !important
    padding-bottom 8px !important
    display block
  .inputx
    width 100%
    margin 12px 0px
    text-align left
  .vs-inputx
    padding 10px !important
    background var(--fondo2) !important
    border 1px solid rgba(255,255,255,0) !important
  .input-span-placeholder
    text-align left
        // color var(--text-alpha) !important
</style>
