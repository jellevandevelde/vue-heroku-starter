import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/Homepage'
import Login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
