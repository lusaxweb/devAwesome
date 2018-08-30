import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    tagsActive: []
  },
  mutations: {

  },
  actions: {

  }
})
