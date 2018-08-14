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
      path: '/frontend',
      name: 'frontend',
      component: () => import('./views/Frontend.vue')
    },
    {
      path: '/backend',
      name: 'backend',
      component: () => import('./views/Backend.vue')
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: () => import('./views/Mobile.vue')
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
    },
    {
      path: '/view/:nameSection/:namePost',
      name: 'view',
      component: () => import('./views/view.vue'),
      props: true
    }
  ]
})
