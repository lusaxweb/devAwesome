import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    openUpload: false,
    clickHome: 0,
    display: 1,
    light: false,
    likesNumber: 0,
    viewsNumber: 0,
    proyects: 0,
    admin: false,
    githubUrl: '',
    likes: null,
    openSidebar: false,
    posts: [],
    view: {
      post: {},
      active: false
    },
    user: null,
    tags: [],
    tagsActive: [],
    filters: {
      section: '',
      lenguaje: '',
      explore: 'recent'
    },
    sections: [
      {text: 'Front-end', value: 'front-end'},
      {text: 'Back-end', value: 'back-end'},
      {text: 'Mobile-app', value: 'mobile-app'},
      {text: 'More', value: 'more'}
    ],
    lenguajes: [
      {text: 'Javascript', value: 'javascript'},
      {text: 'Vuejs', value: 'vuejs'},
      {text: 'Reactjs', value: 'reactjs'},
      {text: 'Angular', value: 'angular'},
      {text: 'Css', value: 'css'},
      {text: 'Nodejs', value: 'nodejs'},
      {text: 'Php', value: 'php'},
      {text: 'Ruby', value: 'ruby'},
      {text: 'Swift', value: 'swift'},
      {text: 'Go', value: 'gos'},
      {text: 'C', value: 'c'},
      {text: 'C++', value: 'c++'},
      {text: 'C++', value: 'c++'},
      {text: 'Java', value: 'java'},
      {text: 'Kotlin', value: 'kotlin'},
      {text: 'Laravel', value: 'larabel'},
      {text: 'Polymer', value: 'polymer'},
      {text: 'Backbone', value: 'backbone'},
      {text: 'Ember', value: 'ember'},
      {text: 'Jquery', value: 'jquery'},
      {text: 'Ionic', value: 'ionic'},
      {text: 'Native-Script', value: 'native-script'},
      {text: 'Django', value: 'django'},
      {text: 'Flask', value: 'flask'},
      {text: 'Docker', value: 'docker'},
      {text: 'Rails', value: 'rails'},
      {text: 'Other', value: 'other'}
    ],
    explores: [
      {text: 'More Valued', value: 'valued'},
      {text: 'More Viewed', value: 'viewed'},
      {text: 'More Recent', value: 'recent'}
    ]
  },
  mutations: {
    addPostLike (state, name, idx) {
      // const key = keyForService(serviceData)
      // Vue.set(services, key, serviceData)
      Vue.set(state.posts[name].likes, state.user.uid, {
        uid: state.user.uid
      })
    },
    removePostLike (state, post) {
      let likes = {...state.posts[post].likes}
      delete likes[state.user.uid]
      state.posts[post].likes = likes
    }
  },
  actions: {

  }
})
