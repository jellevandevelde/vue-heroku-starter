import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import Vue2Filters from 'vue2-filters'
import lodash from 'lodash'
import firebase from 'firebase'
import firebaseConfig from './firebaseConfig.js'
import App from './App'
import router from './router'

Vue.use(ElementUI, { locale })
Vue.use(Vue2Filters)
Vue.use(lodash)

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '_', { value: lodash })

let app;
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    })
  }
});
