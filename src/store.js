import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openSidebar: false,
    posts: [],
    view: {
      post: {},
      active: false
    },
    user: null,
    tags: [
      'Vue.js',
      'React.js',
      'Nodejs',
      'Vuesax',
      'firebase',
      'pyton',
      'php',
      'behance',
      'dribbble',
      'Angular',
      'Nuxtjs',
      'Vuepress',
      'Hexo',
      'Google',
      'Larabel',
      'Awwesome',
      'Element',
      'Vuetify',
      'Boostrap',
      'Adobe',
      'Xd',
      'patreon',
      'pinteres',
      'facebook',
      'react-native'
    ],
    tagsActive: []
  },
  mutations: {

  },
  actions: {

  }
})
