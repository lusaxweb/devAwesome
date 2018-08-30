<template>
  <div class="con-add-Post">
    <titlex title="Upload" />
    <div class="con-inputs">
      <div class="contiene-inputs">
        <vs-input :vs-danger="!upload.title && activeDangers" vs-danger-text="This value is required" class="inputx" placeholder="My awesome project Title" vs-label="Project Title *" v-model="upload.title"/>

        <vs-select
          vs-color="#FF3A4E"
          vs-label="Section *"
          class="selectx"
          label="Figuras"
          v-model="upload.section"
          >
            <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in sections" />
        </vs-select>

        <label class="label-tags" for="">Tags *</label>
        <vs-chips :class="{
          'chips-danger': activeDangers && tags.length == 0
        }"
        color="rgb(145, 32, 159)"
        placeholder="New Tag"
        v-model="tags">
          <vs-chip
            :key="tag"
            @click="remove(tag)"
            v-for="tag in tags" closable>
            {{ tag }}
          </vs-chip>
        </vs-chips>

        <span v-if="tags.length == 0 && activeDangers" class="span-text-validationx">
          This value is required
        </span>

        <vs-input
          :vs-danger="!upload.description && activeDangers"
          vs-danger-text="This value is required"
          class="inputx" vs-label="Description *" v-model="upload.description"/>

        <vs-input
          :vs-danger="!upload.website && activeDangers"
          vs-danger-text="This value is required"
          class="inputx" placeholder="https://myProyect.com" vs-label="Demo or Project URL *" v-model="upload.website"/>

        <vs-input
          :vs-danger="!upload.github && activeDangers"
          vs-danger-text="This value is required"
          class="inputx" placeholder="https://github.com/myTeam/proyect" vs-label="Github-URL *" v-model="upload.github"/>

        <vs-input
          :vs-danger="!upload.twitter && activeDangers"
          vs-danger-text="This value is required"
          class="inputx" placeholder="@myTwitter" vs-label="Twitter *" v-model="upload.twitter"/>

        <!-- <vs-input
          :vs-danger="!upload.email && activeDangers"
          vs-danger-text="This value is required"
          class="inputx" vs-label="E-mail *" v-model="upload.email"/> -->

        <div :class="{'fileActive': image1, 'fileDanger': !image1 && activeDangers}" class="con-file">
          <input
            ref="inputFile1"
            @change="changeValueImage($event ,1)"
            type="file">
          <label for="">Image 400 x 300</label>
          <i class="material-icons">
            {{ image1?'done':'photo_size_select_large'}}
          </i>
        </div>
        <div :class="{'fileActive': image2, 'fileDanger': !image2 && activeDangers}" class="con-file con-file2">
          <input @change="changeValueImage($event ,2)" ref="inputFile2" type="file">
          <label for="">Image 800 x 600</label>
          <i class="material-icons">
            {{ image2?'done':'panorama'}}
          </i>
        </div>
        <!-- <button @click="uploadx">Prueba</button> -->
        <vs-button @click="uploadx" class="btn-upload" vs-color="success" vs-type="filled">Upload Proyect</vs-button>
      </div>
    </div>
  </div>
</template>
<script>
import titlex from '../components/titlex.vue'
export default {
  components: {
    titlex
  },
  data: () => ({
    activeDangers: false,
    tags: [],
    image1: false,
    image2: false,
    sections: [
      {text: 'Front-end', value: 'front-end'},
      {text: 'Back-end', value: 'back-end'},
      {text: 'Back-end', value: 'back-end'},
      {text: 'Movile-app', value: 'movile-app'},
      {text: 'More', value: 'more'}
    ],
    upload: {
      section: 'Front-end',
      title: '',
      description: '',
      website: '',
      twitter: '',
      github: '',
      active: false,
      likes: {},
      views: 0,
      outstanding: false,
      tags: '',
      email: '',
      miniImage: '',
      image: '',
      user: {}
    }
  }),
  methods: {
    remove (item) {
      this.tags.splice(this.tags.indexOf(item), 1)
    },
    changeValueImage (evt, number) {
      console.log('evt', evt)
      let self = this
      var file = evt.target.files[0]
      var img = new Image()

      img.onload = function () {
        var sizes = {
          width: this.width,
          height: this.height
        }
        URL.revokeObjectURL(this.src)

        // console.log('onload: sizes', sizes)
        // console.log('onload: this', this)
        let notValid = true
        if (sizes.width === 400 && sizes.height === 300) {
          notValid = false
        } else if (sizes.width === 800 && sizes.height === 600) {
          notValid = false
        }

        if (notValid) {
          self.$vs.notify({
            title: 'Image Size',
            text: `The images can only have a size of 400x300 or 800x600 in the case that is needed, the added image has a size of (${sizes.width}x${sizes.height})`,
            color: 'danger'
          })

          const inputx = self.$refs[`inputFile${number}`]
          console.log('inputx', inputx)
          inputx.type = 'text'
          inputx.type = 'file'
          self[`image${number}`] = false
        }
      }

      var objectURL = URL.createObjectURL(file)

      console.log('change: file', file)
      console.log('change: objectURL', objectURL)
      img.src = objectURL

      if (evt.target.value !== '') {
        this[`image${number}`] = true
      } else {
        this[`image${number}`] = false
      }
    },
    uploadx () {
      if (!this.$store.state.user) {
        this.$vs.notify({
          title: 'Necessary Login User',
          text: 'To be able to do this action you need a user in login',
          color: 'danger'
        })
        return
      }

      if (!this.upload.title || !this.upload.description || !this.upload.website || !this.upload.github || !this.upload.twitter || this.tags.length === 0) {
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
      let githubUrl = null
      let user = null

      fetch(`https://api.github.com/search/users?q=${this.$store.state.user.displayName}`)
        .then(response => response.json())
        .then(json => {
          // this.contribuitorsx.push(json)
          githubUrl = json.items[0].html_url
          console.log(githubUrl)
          // https://api.github.com/search/users?q=ldrovira

          if (this.$store.state.user.displayName === 'ldrovira' || this.$store.state.user.displayName === 'ManuelRoviraDesign') {
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
              githubUrl: githubUrl
            }
          }

          this.upload.user = user
          console.log('Subiendo', this.$store.state.user)
          this.upload.tags = this.tags.join()
          var self = this
          var file = this.$refs.inputFile1.files[0]
          var ref = this.$firebase.storage().ref('posts/' + file.name)
          ref.put(file).then(function (snapshot) {
            ref.getDownloadURL().then(function (url) {
              console.log('url', url)
              self.upload.miniImage = url

              var file2 = self.$refs.inputFile2.files[0]
              var ref2 = self.$firebase.storage().ref('posts/' + file2.name)
              ref2.put(file2).then(function (snapshot) {
                ref2.getDownloadURL().then(function (url2) {
                  console.log('url2>>>', url2)
                  self.upload.image = url2
                  console.log('Uploaded a blob or file!')
                  console.log('posts/' + self.upload.section.toLowerCase())

                  self.$firebase.database().ref('posts/').push({
                    ...self.upload
                  })
                  self.$vs.loading.close()
                  self.$vs.notify({
                    title: 'Successful Upload',
                    text: 'The project was successfully upgraded',
                    color: 'success',
                    icon: 'cloud_done'
                  })
                  self.upload = {
                    section: 'Front-end',
                    title: '',
                    description: '',
                    website: '',
                    twitter: '',
                    github: '',
                    active: false,
                    likes: {},
                    views: 0,
                    outstanding: false,
                    tags: '',
                    email: '',
                    miniImage: '',
                    image: '',
                    user: {}
                  }
                  self.image1 = self.image2 = null
                  self.activeDangers = false
                  self.tags = []
                })
              })
            })
          })
        })
    }
  }
}
</script>
<style lang="stylus">
@require '../config'
.con-chips
  background $fondo2
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

.selectx
  width 100%
.con-add-Post
  position relative
  left 0px
  top 0px
  background $fondo
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
    background $fondo2
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
      color $fondo
      transition all .25s ease
    label
      padding 10px
      display block
      text-align center
      z-index 10
      font-weight bold
      color rgba(255,255,255,.5)
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
    .contiene-inputs
      width 100%
      max-width 600px
      padding 20px 10px
      .vs-input-label
        color rgba(255,255,255,.8) !important
        padding-bottom 8px !important
        display block
      .inputx
        width 100%
        margin 12px 0px
        text-align left
      .vs-inputx
        padding 10px !important
        background $fondo2 !important
        border 1px solid rgba(255,255,255,0) !important
      .input-span-placeholder
        text-align left
        color rgba(255,255,255,.3) !important
</style>
