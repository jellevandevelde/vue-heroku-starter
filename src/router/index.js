import Vue from 'vue'
import firebase from 'firebase'
import Router from 'vue-router'
import Homepage from '@/pages/Homepage'
import Login from '@/pages/login'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    //- console.log(firebase.auth().currentUser);
    if(!firebase.auth().currentUser){
      router.push('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
