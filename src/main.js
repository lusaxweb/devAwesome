import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebase from 'firebase'
import 'material-design-icons/iconfont/material-icons.css'

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
