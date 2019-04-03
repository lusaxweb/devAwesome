<template>
  <div class="con-user">
    <header class="header-user">
      <div class="user-img">
        <div class="img-user">
          <dir :class="{'image-edit': edit, 'filephotoNew': filephoto && edit}" class="imgx_user">
            <i v-if="edit" class="material-icons">
              {{filephoto && edit ? 'done' : 'insert_photo'}}
            </i>
            <input ref="filephoto" v-if="edit" @change="changePhotoUser" type="file">
            <img :src="user.photoURL" alt="">
          </dir>
          <span>{{ user.name }}</span>
        </div>

        <ul class="ul-metrics">
          <li title="Proyects Views">
            <i class="material-icons">
              visibility
            </i>
            <span>{{ views }}</span>
          </li>
          <li title="Valuations">
            <i class="material-icons">
              favorite
            </i>
            <span>{{ likes }}</span>
          </li>
          <li class="not-active">
            <i class="material-icons">
              supervisor_account
            </i>
            <span>{{ Object.keys(user.followers).length }}</span>
          </li>
          <li class="not-active">
            <i class="material-icons">
              assignment_ind
            </i>
            <span>{{ Object.keys(user.follow).length }}</span>
          </li>
        </ul>
      </div>
    </header>

    <div :style="{'minHeight': minHeight}" class="body-user-data">
      <div ref="condata" class="con-data">
          <div v-if="!edit" class="data-box">
            <h3>Biography</h3>
            <p v-if="!user.bio" class="not-found">
              Bio not found
            </p>
            <p v-else>
              {{ user.bio }}
            </p>
          </div>

          <div v-else class="data-box">
            <h3>Biography</h3>
            <textarea v-model="user.bio"></textarea>
          </div>

          <div v-if="!edit" class="data-box">
            <h3>Website</h3>
            <p v-if="!user.web" class="not-found">
              Website not found
            </p>
            <a v-else :href="user.web">{{ user.web }}</a>
          </div>

          <div v-else class="data-box">
            <h3>Website</h3>
            <input class="inputedit" v-model="user.web"></input>
          </div>

          <div v-if="!edit" class="data-box">
            <h3>Skills</h3>
            <p v-if="user.skills.length == 0" class="not-found">
              Skills not found
            </p>
            <ul v-else class="skills">
              <li :key="index" v-for="(skill, index) in user.skills">
                {{ skill }}
              </li>
            </ul>
          </div>

          <div v-else class="data-box">
            <h3>Skills</h3>
            <vs-chips
            color="rgb(145, 32, 159)"
            placeholder="Add skill"
            v-model="user.skills">
              <vs-chip
                :key="skill"
                @click="remove(skill)"
                v-for="skill in user.skills" closable>
                {{ skill }}
              </vs-chip>
            </vs-chips>
          </div>

          <div v-if="!edit" class="data-box">
            <h3>In the Web</h3>
            <p v-if="!user.social.github && !user.social.twitter && !user.social.codepen && !user.social.linkedin && !user.social.facebook && !user.social.medium && !user.social.instagram" class="not-found">
              Not found Links
            </p>
            <ul v-else class="ul-social">
              <li v-if="user.githubUrl">
                <a target="_blank" :href="user.githubUrl">Github</a>
              </li>
              <li v-if="user.social.twitter">
                <a target="_blank" :href="user.social.twitter">Twitter</a>
              </li>
              <li v-if="user.social.codepen">
                <a target="_blank" :href="user.social.codepen">Codepen</a>
              </li>
              <li v-if="user.social.linkedin">
                <a target="_blank" :href="user.social.linkedin">Linkedin</a>
              </li>
              <li v-if="user.social.facebook">
                <a target="_blank" :href="user.social.facebook">Facebook</a>
              </li>
              <li v-if="user.social.medium">
                <a target="_blank" :href="user.social.medium">Medium</a>
              </li>
              <li v-if="user.social.instagram">
                <a target="_blank" :href="user.social.instagram">Instagram</a>
              </li>
            </ul>
          </div>

          <div v-else class="data-box">
            <h3>In the Web</h3>
            <ul class="ul-social">
              <!-- <li>
                <input placeholder="Github" class="inputedit" v-model="user.social.github" type="text">
              </li> -->
              <li>
                <input placeholder="Twitter" class="inputedit" v-model="user.social.twitter" type="text">
              </li>
              <li>
                <input placeholder="Codepen" class="inputedit" v-model="user.social.codepen" type="text">
              </li>
              <li>
                <input placeholder="Linkedin" class="inputedit" v-model="user.social.linkedin" type="text">
              </li>
              <li>
                <input placeholder="Facebook" class="inputedit" v-model="user.social.facebook" type="text">
              </li>
              <li>
                <input placeholder="Medium" class="inputedit" v-model="user.social.medium" type="text">
              </li>
              <li>
                <input placeholder="Instagram" class="inputedit" v-model="user.social.instagram" type="text">
              </li>
            </ul>
          </div>
        </div>
      <div class="body-user">
        <div class="con-cards">
          <ul>
            <li :class="{'li-active': viewActive == 0}" @click="viewActive = 0">
              <i class="material-icons">
                flip_to_front
              </i>
              <span>
                Projects
              </span>
              <div class="tagx">
                {{ Object.keys(projects).length }}
              </div>
            </li>
            <li :class="{'li-active': viewActive == 1, 'li-disabled': Object.keys(articles).length == 0}" @click="viewActive = 1">
              <i class="material-icons">
                library_books
              </i>
              <span>
                Articles
              </span>
              <div class="tagx">
                {{ Object.keys(articles).length }}
              </div>
            </li>
          </ul>

          <div v-if="$store.state.user ? $store.state.user.uid == $router.currentRoute.params.user : false" class="con-user-btns">
            <vs-button v-if="!edit" class="edit-btn" vs-icon-after @click="editProfile" vs-color="#603AFF" vs-type="filled" vs-icon="create">
              Edit Profile
            </vs-button>
            <div class="btns-edits">
              <vs-button v-if="edit" class="edit-btn" vs-icon-after @click="saveChanges" vs-color="success" vs-type="filled" vs-icon="cloud_done">
                Save Changes
              </vs-button>
              <vs-button v-if="edit" class="edit-btn" vs-icon-after @click="cancelChanges" vs-color="danger" vs-type="filled" vs-icon="clear">
                Cancel Changes
              </vs-button>
            </div>
          </div>
        </div>

        <div v-if="viewActive == 0" class="con-projects-user">
          <posts :posts="projects" />
        </div>
        <div v-show="viewActive == 1" class="con-articles-user">
          <ul class="ul-articles">
            <articlex :article="article" :index="index" class="articlex" :key="index" v-for="(article, index) in articles" />
          </ul>
        </div>
      </div>

    </div>
    <!-- <Carbon /> -->
    <CodeFundView
      propertyId="8aed6e67-5cf6-4217-a805-d1713785b7e5"
      />
    <!-- <pre>
      <code>
        {{ user }}
      </code>
    </pre> -->
  </div>
</template>
<script>
import articlex from '../articles/article.vue'
import Carbon from '../../components/Carbon.vue'
import posts from '../../components/postsUser.vue'
import CodeFundView from '../../components/CodeFundView.vue'
export default {
  components: {
    posts,
    articlex,
    Carbon,
    CodeFundView
  },
  data: () => ({
    filephoto: false,
    edit: false,
    minHeight: '300px',
    viewActive: 0,
    articles: {},
    projects: {},
    views: 0,
    likes: 0,
    user: {
      bio: '',
      skills: [],
      email: '',
      followers: {},
      follow: {},
      notifications: {},
      web: '',
      cover: '',
      social: {
        twitter: '',
        facebook: '',
        linkedin: '',
        github: '',
        instagram: '',
        codepen: '',
        medium: ''
      }
    }
  }),
  watch: {
    '$route.params.user': function () {
      this.getUser()
      this.getProjects()
      this.getArticles()
      this.setMinHeight()
      // this.changeAds()
    }
  },
  mounted () {
    this.$store.state.view.active = false
    document.querySelector('body').style = 'overflow: auto'
    this.$nextTick(() => {
      this.getUser()
      this.getProjects()
      this.getArticles()
      this.setMinHeight()
    })
  },
  methods: {
    changePhotoUser (evt) {
      if (evt.target.value !== '') {
        this.filephoto = true
      } else {
        this.filephoto = false
      }
    },
    cancelChanges () {
      this.getUser()
      this.edit = false
      this.$nextTick(() => {
        this.setMinHeight()
      })
    },
    saveChanges () {
      if (this.$refs.filephoto.value) {
        let file = this.$refs.filephoto.files[0]
        var ref = this.$firebase.storage().ref('users/' + this.$router.currentRoute.params.user)
        ref.put(file).then((snapshot) => {
          ref.getDownloadURL().then((url_) => {
            // self.upload.miniImage = url
            var user = this.$firebase.auth().currentUser

            user.updateProfile({
              photoURL: url_
            }).then(function () {
            })

            let userRef = this.$firebase.database().ref('users/' + this.$router.currentRoute.params.user + '/photoURL')
            userRef.set(url_)
            this.filephoto = false
            const inputx = this.$refs.filephoto
            inputx.type = 'text'
            inputx.type = 'file'
          })
        })
      }

      let userRef = this.$firebase.database().ref('users/' + this.$router.currentRoute.params.user)
      userRef.update(this.user)
      this.edit = false
      this.filephoto = false
      const inputx = this.$refs.filephoto
      inputx.type = 'text'
      inputx.type = 'file'
      this.$nextTick(() => {
        this.setMinHeight()
      })

      this.$vs.notify({
        title: 'Successfully saved',
        text: 'Your profile data has been saved successfully',
        color: 'success',
        icon: 'cloud_done'
      })
    },
    remove (item) {
      this.user.skills.splice(this.user.skills.indexOf(item), 1)
    },
    editProfile () {
      this.edit = !this.edit
      this.$nextTick(() => {
        this.setMinHeight()
      })
    },
    setMinHeight () {
      this.minHeight = `${this.$refs.condata.scrollHeight}px`
    },
    getArticles () {
      var starCountRef = this.$firebase.database().ref('articles')
      starCountRef.once('value', (snapshot) => {
        let allarticles = snapshot.val()
        let articles = {}
        delete allarticles.undefine
        for (const key in allarticles) {
          if (allarticles[key].user.uid == this.$router.currentRoute.params.user) {
            articles[key] = allarticles[key]
            this.views += articles[key].views
            if (articles[key].likes) {
              this.likes += Number(Object.keys(articles[key].likes).length)
            }

          }
        }
        this.articles = articles
      })
    },
    getProjects () {
      let starCountRef = this.$firebase.database().ref('posts')
      starCountRef.once('value', snap => {
        let allProjects = snap.val()
        let projects = {}

        delete allProjects.undefined

        for (const key in allProjects) {
          if (allProjects[key].user.uid == this.$router.currentRoute.params.user) {
            projects[key] = allProjects[key]
            this.views += projects[key].views
            if (projects[key].likes) {
              this.likes += Number(Object.keys(projects[key].likes).length)
            }
          }
        }

        this.projects = projects
      })
    },
    getUser () {
      let userRef = this.$firebase.database().ref('users/' + this.$router.currentRoute.params.user)
      // this.$firebase.database().ref('users/' + this.$router.currentRoute.params.user + '/bio').set('hola mundo')
      userRef.on('value', (snap) => {
        this.user = {
          ...this.user,
          ...snap.val()
        }
      })
    }
  }
}
</script>
<style lang="stylus">
@require '../../config'
.con-user
  padding-top 100px
  width 100%
  // max-width 1200px
  margin auto
  .body-user-data
    background var(--fondo2)
    width 100%
    height auto
    margin-top 10px
    position relative
    text-align left
    margin-bottom 20px

    .data-box
      padding 10px
      padding-bottom 20px
      clear both
      overflow hidden
      border-radius 10px
      a
        color var(--color-text)
        font-size .8rem
      .con-chips
        border 2px solid var(--fondo)
        background var(--fondo3)
        input
          font-size .7rem
        .con-vs-chip
          background $morado
      textarea
        min-height 100px
      textarea,.inputedit
        width 100%
        border 0px
        resize none
        border-radius 5px
        margin-top 5px
        background transparent
        background var(--fondo3)
        padding 8px
        color var(--text-color)
        font-size .7rem
        transition all .25s ease
        border 2px solid var(--fondo)
        &:focus
          border 2px solid $verde
      .not-found
        opacity .5
      h3
        font-size 1rem
      p
        font-size .7rem
      .skills
        li
          float left
          padding 3px 7px
          font-size .7rem
          background var(--fondo)
          margin-right 5px
          margin-top 5px
          border-radius 5px
          cursor default
      .ul-social
        width 100%
        li
          a
            font-size .8rem
            color var(--text-color)
  .con-data
    position absolute
    left 0px
    top 0px
    width 100%
    max-width 290px
    padding 10px
  .body-user
    width calc(100% - 340px)
    margin-left 290px
    border-radius 15px
    transform translate(0, -180px)
    background var(--fondo)
    height auto
    padding-top 0px
    border 3px solid var(--fondo2)
    .ul-articles
      max-width 900px !important
    .con-posts
      padding 5px
    .con-cards
      width 100%
      transform translate(0,-73px)
      padding-left 30px
      position absolute
      z-index 200
      display flex
      align-items center
      justify-content space-between
      .con-user-btns
        display flex
        align-items center
        justify-content center
        .btns-edits
          display flex
          align-items center
          justify-content center
          .edit-btn
            margin-left 7px
      .vs-button-text
        white-space: nowrap
      ul
        display flex
        align-items center
        justify-content flex-start
        width 100%
        li
          display flex
          align-items center
          justify-content center
          padding 20px 40px
          background var(--fondo2)
          border-radius 15px
          margin 5px
          cursor pointer
          position relative
          transition all .25s ease
          font-weight bold
          &.li-disabled
            opacity .5
            cursor default
            pointer-events none
            user-select none
          &.li-active
            color $primary
            transform translate(0, 10px)
            border-radius 15px 15px 0px 0px
          span
            position relative
            z-index 200
            font-size .8rem
          .tagx
            position absolute
            top -5px
            right -4px
            font-size .7rem
            background $primary
            display block
            padding 1px 6px
            border-radius 5px
            color rgb(255,255,255) !important
          i
            color var(--fondo) !important
            font-size 3rem
            position absolute
            z-index 100
  .header-user
    display flex
    align-items center
    justify-content flex-start
    background var(--fondo)
  .user-img
    width auto
    display flex
    align-items center
    justify-content center
    flex-direction column
    margin-left 20px
    .ul-metrics
      display flex
      align-items center
      justify-content center
      li
        display flex
        align-items center
        justify-content center
        margin 5px
        border-radius 10px
        border 2px solid var(--fondo3)
        padding 8px
        cursor default
        &.not-active
          opacity .3
        span
          font-size .7rem
          padding-left 5px
        i
          font-size 1.07rem
    .img-user
      width 170px
      margin-bottom 10px
      min-height 150px
      position relative
      display block
      .imgx_user
        position relative
        padding 10px
        border-radius 10px
        transition all .25s ease
        &.filephotoNew
          border 1px solid $verde !important
          img
            opacity .5
          i
            color $verde !important
        &.image-edit
          border 1px dashed var(--fondo3)
          &:hover
            border 1px dashed $verde
            i
              color $verde
      i
        position absolute
        top -9px
        right -9px
        padding 5px
        font-size 1.6rem
        background var(--fondo3)
        opacity 1
        border-radius 5px
        transition all .25s ease
      input
        position absolute
        width 100%
        height 100%
        left 0px
        top 0px
        opacity 0
        cursor pointer
      span
        font-size .8rem
      img
        width 100%
        border-radius 10px

@media only screen and (max-width: 900px)
  .con-user
    .body-user-data
      overflow hidden
    .header-user
      justify-content center
      .user-img
        margin-left 0px
    .con-data
      position relative
      max-width 100%
      display flex
      align-items center
      justify-content center
      flex-wrap wrap
      .data-box
        width 50%
    .body-user
      width 100%
      margin auto
      max-width 600px
      margin-top 70px
      transform translate(0, 0px)
      margin-bottom 20px
      .con-cards
        padding-left 5px
        ul
          li
            background var(--fondo3)

@media only screen and (max-width: 600px)
  .con-user-btns
    padding-right 10px
    .vs-button-icon
      margin-left 0px !important
    .vs-button-text
      display none

@media only screen and (max-width: 500px)
  .con-user
    .con-cards
      li
        padding 20px 10px !important
        i
          opacity 0
    .con-data
        .data-box
          width 100%
</style>
