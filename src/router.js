import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/wallpapers',
      name: 'wallpapers',
      component: () => import('./views/Wallpapers.vue')
    },
    {
      path: '/icons',
      name: 'icons',
      component: () => import('./views/Icons.vue')
    },
    {
      path: '/stikers',
      name: 'Stikers',
      component: () => import('./views/Stikers.vue')
    },
    {
      path: '/emoji',
      name: 'emoji',
      component: () => import('./views/Emoji.vue')
    },
    {
      path: '/more',
      name: 'more',
      component: () => import('./views/More.vue')
    },
    {
      path: '/points',
      name: 'points',
      component: () => import('./views/Points.vue')
    }
  ]
})
