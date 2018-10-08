import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebase from 'firebase'
import 'material-design-icons/iconfont/material-icons.css'
import '../public/icons/font/flaticon.css'
import Vuesax from 'vuesax'

import './style.styl'

Vue.use(Vuesax)

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyBURF6gU0jbqODrtH68DRWhJ1DK0Az_LTU',
  authDomain: 'lusaxweb-assets.firebaseapp.com',
  databaseURL: 'https://lusaxweb-assets.firebaseio.com',
  projectId: 'lusaxweb-assets',
  storageBucket: 'lusaxweb-assets.appspot.com',
  messagingSenderId: '591909134078'
}
firebase.initializeApp(config)

Vue.prototype.$firebase = firebase

if (!window.localStorage) {
  window.localStorage = {
    getItem: function (sKey) {
      if (!sKey || !this.hasOwnProperty(sKey)) { return null }
      return unescape(document.cookie.replace(new RegExp('(?:^|.*;\\s*)' + escape(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*'), '$1'))
    },
    key: function (nKeyId) { return unescape(document.cookie.replace(/\s*=(?:.(?!;))*$/, '').split(/\s*=(?:[^;](?!;))*[^;]?;\s*/)[nKeyId]) },
    setItem: function (sKey, sValue) {
      if (!sKey) { return }
      document.cookie = escape(sKey) + '=' + escape(sValue) + '; path=/'
      this.length = document.cookie.match(/=/g).length
    },
    length: 0,
    removeItem: function (sKey) {
      if (!sKey || !this.hasOwnProperty(sKey)) { return }
      var sExpDate = new Date()
      sExpDate.setDate(sExpDate.getDate() - 1)
      document.cookie = escape(sKey) + '=; expires=' + sExpDate.toGMTString() + '; path=/'
      this.length--
    },
    hasOwnProperty: function (sKey) { return (new RegExp('(?:^|;\\s*)' + escape(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=')).test(document.cookie) }
  }
  window.localStorage.length = (document.cookie.match(/=/g) || window.localStorage).length
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
