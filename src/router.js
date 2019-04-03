import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (to.name !== 'About') {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    { path: '/v', redirect: '/view' },
    {
      path: '/',
      name: 'home',
      // props: true,
      component: () => import('./views/Discover.vue')
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
    },
    {
      path: '/About/:section',
      name: 'About',
      component: () => import('./views/About.vue'),
      props: true
    },
    {
      path: '/edit/:namePost/',
      name: 'edit',
      component: () => import('./views/edit.vue'),
      props: true
    },
    {
      path: '/topics',
      name: 'topics',
      component: () => import('./views/topics.vue'),
      props: true
    },
    {
      path: '/assets',
      name: 'assets',
      component: () => import('./views/Assets.vue'),
      props: true
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import('./views/articles/articles.vue')
    },
    {
      path: '/addPostBlog',
      name: 'addPostBlog',
      component: () => import('./views/addblog.vue')
    },
    {
      path: '/article/:nameArticle/',
      name: 'addPostBlog',
      component: () => import('./views/articles/articleView.vue'),
      props: true
    },
    {
      path: '/user/:user/',
      name: 'user',
      component: () => import('./views/user/user.vue'),
      props: true
    }
  ]
})
