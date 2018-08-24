<template>
  <div class="con-add-Post">
    <titlex title="Upload Proyect" />
    <div class="con-inputs">
      <div class="contiene-inputs">
        <vs-input class="inputx" placeholder="My awesome project Title" vs-label="Project Title" v-model="upload.title"/>
        <vs-select
          vs-color="#FF3A4E"
          vs-label="Section"
          class="selectx"
          label="Figuras"
          v-model="section"
          >
            <vs-select-item :key="index" :vs-value="item" :vs-text="item" v-for="(item,index) in sections" />
        </vs-select>

        <!-- <div class="modelx">
          {{tags}}
        </div> -->
        <label class="label-tags" for="">Tags</label>

        <vs-chips color="rgb(145, 32, 159)" placeholder="New Tag" v-model="tags">
          <vs-chip
            :key="tag"
            @click="remove(tag)"
            v-for="tag in tags" closable>
            {{ tag }}
          </vs-chip>
        </vs-chips>

        <vs-input class="inputx" vs-label="Description" v-model="upload.description"/>
        <vs-input class="inputx" placeholder="https://myProyect.com" vs-label="Demo or Project URL" v-model="upload.website"/>
        <vs-input class="inputx" placeholder="https://github.com/myTeam/proyect" vs-label="Github-URL" v-model="upload.github"/>
        <vs-input class="inputx" placeholder="@myTwitter" vs-label="Twitter" v-model="upload.twitter"/>
        <vs-input class="inputx" vs-label="E-mail" v-model="upload.email"/>
        <div :class="{'fileActive': image1}" class="con-file">
          <input
            ref="inputFile1"
            @change="changeValueImage($event ,1)"
            type="file">
          <label for="">Image 400 x 300</label>
          <i class="material-icons">
            {{ image1?'done':'photo_size_select_large'}}
          </i>
        </div>
        <div :class="{'fileActive': image2}" class="con-file con-file2">
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
    tags: [
      'Vuejs',
      'Node',
      'Vuesax'
    ],
    image1: false,
    image2: false,
    section: 'Front-end',
    sections: [
      'Front-end',
      'Back-end',
      'Movile-app',
      'More'
    ],
    upload: {
      title: 'Prueba',
      description: 'hola mundo',
      website: 'la web',
      twitter: '@yo',
      github: 'la github',
      active: false,
      likes: 0,
      views: 0,
      outstanding: false,
      tags: '',
      email: 'luis@gmaiol.com',
      miniImage: '',
      image: ''
    }
  }),
  methods: {
    remove (item) {
      this.tags.splice(this.tags.indexOf(item), 1)
    },
    changeValueImage (evt, number) {
      if (evt.target.value !== '') {
        this[`image${number}`] = true
      } else {
        this[`image${number}`] = false
      }
    },
    uploadx () {
      console.log('paso por section', this.tags.join())
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
              console.log('posts/' + self.section.toLowerCase())

              self.$firebase.database().ref('posts/' + self.section.toLowerCase()).push({
                ...self.upload
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

.label-tags
  width 100%
  text-align left
  display block
  font-size .9rem
  padding 5px
  padding-left 8px

.selectx
  width 100%
.con-add-Post
  padding 10px
  position relative
  left 0px
  top 0px
  background $fondo
  width 100%
  overflow auto
  padding-top 60px

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
