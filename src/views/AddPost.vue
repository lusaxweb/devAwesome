<template>
  <div class="con-add-Post">
    <titlex title="Upload" />
    <div class="con-inputs">
      <div class="contiene-inputs">
        <vs-input  :vs-danger="!upload.title && activeDangers" vs-danger-text="This value is required" class="inputx" placeholder="My awesome project Title" vs-label="Project Title *" v-model="upload.title"/>

        <vs-select
          vs-color="#FF3A4E"
          vs-label="Section *"
          class="selectx"
          v-model="upload.section"
          >
            <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in this.$store.state.sections" />
        </vs-select>

        <vs-select
          vs-color="#FF3A4E"
          vs-label="Lenguaje Or Framework *"
          class="selectx"
          v-model="upload.lenguaje"
          >
            <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in this.$store.state.lenguajes" />
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

        <p class="text-description-input">
          After typing the tag press the <b> Enter </b> key to add it
        </p>

        <vs-input
          :vs-danger="!upload.description && activeDangers"
          vs-danger-text="This value is required"
          class="inputx" vs-label="Description *" v-model="upload.description"/>

        <!-- <vs-checkbox v-model="codeIframe">Demo: <b>codepen</b> | <b>jsfiddle</b> | <b>codesandbox</b> | <b>jsbin</b></vs-checkbox> -->

        <vs-input
          :vs-danger="!upload.website && activeDangers"
          vs-danger-text="This value is required"
          class="inputx" placeholder="https://myProyect.com" vs-label="Demo or Project URL *" v-model="upload.website"/>

        <vs-input
          vs-danger-text="This value is required"
          class="inputx" placeholder="https://github.com/myTeam/proyect" vs-label="Github-URL" v-model="upload.github"/>

        <vs-input
          vs-danger-text="This value is required"
          class="inputx" placeholder="@proyectTwitter" vs-label="Twitter" v-model="upload.twitter"/>

        <!-- <vs-input
          :vs-danger="!upload.email && activeDangers"
          vs-danger-text="This value is required"
          class="inputx" vs-label="E-mail *" v-model="upload.email"/> -->

        <div v-if="isRoot" :class="{'fileActive': image1, 'fileDanger': !image1 && activeDangers}" class="con-file">
          <input
            ref="inputFile1"
            @change="changeValueImage($event ,1)"
            type="file">
          <label for="">Image 400 x 300</label>
          <i class="material-icons">
            {{ image1?'done':'photo_size_select_large'}}
          </i>
        </div>
        <div v-if="isRoot" :class="{'fileActive': image2, 'fileDanger': !image2 && activeDangers}" class="con-file con-file2">
          <input @change="changeValueImage($event ,2)" ref="inputFile2" type="file">
          <label for="">Image 800 x 600</label>
          <i class="material-icons">
            {{ image2?'done':'panorama'}}
          </i>
        </div>
        <!-- <button @click="uploadx">Prueba</button> -->
        <vs-button @click="uploadx" class="btn-upload" vs-color="success" vs-type="filled">Upload Project</vs-button>
      </div>
    </div>
    <!-- <Carbon /> -->
    <CodeFundView
      propertyId="8aed6e67-5cf6-4217-a805-d1713785b7e5"
      />
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
    activeDangers: false,
    tags: [],
    image1: false,
    image2: false,
    codeIframe: false,
    upload: {
      iframe: '',
      section: 'front-end',
      title: '',
      description: '',
      website: '',
      twitter: null,
      github: null,
      active: false,
      likes: {},
      views: 0,
      outstanding: false,
      tags: '',
      email: '',
      miniImage: '',
      image: '',
      user: {},
      likesNumber: 0,
      timestamp: new Date(),
      lenguaje: 'javascript'
    }
  }),
  computed: {
    isRoot () {
      return this.$store.state.user ? (this.$store.state.user.displayName === 'ldrovira' || this.$store.state.user.displayName === 'ManuelRoviraDesign' || this.$store.state.user.email === 'luisrovirac@gmail.com' || this.$store.state.user.email === 'chait7conrom@gmail.com') : false
    }
  },
  methods: {
    remove (item) {
      this.tags.splice(this.tags.indexOf(item), 1)
    },
    changeValueImage (evt, number) {
      let self = this
      var file = evt.target.files[0]
      var img = new Image()

      img.onload = function () {
        var sizes = {
          width: this.width,
          height: this.height
        }
        URL.revokeObjectURL(this.src)

        let notValid = true
        if (sizes.width === 400 && sizes.height === 300) {
          notValid = false
        } else if (sizes.width === 800 && sizes.height === 600) {
          notValid = false
        } else if (sizes.width === 1200 && sizes.height === 800) {
          notValid = false
        }

        if (notValid) {
          self.$vs.notify({
            title: 'Image Size',
            text: `The images can only have a size of 400x300 or 800x600 in the case that is needed, the added image has a size of (${sizes.width}x${sizes.height})`,
            color: 'danger'
          })

          const inputx = self.$refs[`inputFile${number}`]
          inputx.type = 'text'
          inputx.type = 'file'
          self[`image${number}`] = false
        }
      }

      var objectURL = URL.createObjectURL(file)

      img.src = objectURL

      if (evt.target.value !== '') {
        this[`image${number}`] = true
      } else {
        this[`image${number}`] = false
      }
    },
    uploadx () {
      // this.upload.timestamp = Date.now()

      if (!this.$store.state.user) {
        this.$vs.notify({
          title: 'Necessary Login User',
          text: 'To be able to do this action you need a user in login',
          color: 'danger'
        })
        return
      }

      if (!this.upload.title || !this.upload.description || !this.upload.website || this.tags.length === 0 || !this.upload.lenguaje) {
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
          // https://api.github.com/search/users?q=ldrovira

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
              githubUrl: githubUrl
            }
          }

          this.upload.user = user
          this.upload.tags = this.tags.join()

          if (this.isRoot) {
            this.submitPostImages()
          } else {
            this.submitPost()
          }
        })
    },
    submitPostImages () {
      var self = this
      var file = this.$refs.inputFile1.files[0]
      var ref = this.$firebase.storage().ref('posts/' + file.name)
      ref.put(file).then(function (snapshot) {
        ref.getDownloadURL().then(function (url) {
          self.upload.miniImage = url

          var file2 = self.$refs.inputFile2.files[0]
          var ref2 = self.$firebase.storage().ref('posts/' + file2.name)
          ref2.put(file2).then(function (snapshot) {
            ref2.getDownloadURL().then(function (url2) {
              self.upload.image = url2

              self.submitPost()
            })
          })
        })
      })
    },
    submitPost () {
      var self = this
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
    }
  }
}
</script>
<style lang="stylus">
@require '../config'


</style>
