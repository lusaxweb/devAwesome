import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Discover.vue')
    },
    {
      path: '/front-end',
      name: 'frontend',
      component: () => import('./views/Frontend.vue')
    },
    {
      path: '/back-end',
      name: 'backend',
      component: () => import('./views/Backend.vue')
    },
    {
      path: '/mobile-app',
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
      path: '/view/:namePost/',
      name: 'view',
      component: () => import('./views/view.vue'),
      props: true
    },
    {
      path: '/addPost/',
      name: 'addPost',
      component: () => import('./views/AddPost.vue'),
      props: true
    },
    {
      path: '/search/:searching',
      name: 'search',
      component: () => import('./views/Search.vue'),
      props: true
    },
    {
      path: '/Discover',
      name: 'discover',
      component: () => import('./views/Discover.vue'),
      props: true
    },
    {
      path: '/myValued',
      name: 'myValued',
      component: () => import('./views/MyValued.vue'),
      props: true
    },
    {
      path: '/myProyects',
      name: 'myProyects',
      component: () => import('./views/MyProyects.vue'),
      props: true
    }
  ]
})
