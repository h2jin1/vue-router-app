import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Posts from './views/Posts.vue'
import PostNew from './views/PostNew.vue'
import PostDetail from './views/PostDetail.vue'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: () => import('./views/About.vue') },
    { path: '/posts', component: Posts, 
      children: [
        { path: 'new', component: PostNew},
        { path: ':id', name: 'post', component: PostDetail }
      ]
}

  ]
})
