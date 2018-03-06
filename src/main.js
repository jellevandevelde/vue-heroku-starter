import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import Vue2Filters from 'vue2-filters'
import lodash from 'lodash'
import moment from 'moment'
import firebase from 'firebase'
import App from './App'
import router from './router'

Vue.use(ElementUI, { locale })
Vue.use(Vue2Filters)
Vue.use(lodash)
Vue.use(moment)

var firebaseConfig = {
    apiKey: "AIzaSyAJcNu-syHEmH_CH62RxCIbr8xF5vxmDGI",
    authDomain: "plutus-d7238.firebaseapp.com",
    databaseURL: "https://plutus-d7238.firebaseio.com",
    projectId: "plutus-d7238",
    storageBucket: "plutus-d7238.appspot.com",
    messagingSenderId: "873573882588"
  }
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '_', { value: lodash })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
