import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
