import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import Vue2Filters from 'vue2-filters'
import lodash from 'lodash'
import moment from 'moment'

import App from './App'
import router from './router'

Vue.use(ElementUI, { locale, size: 'small' })
Vue.use(Vue2Filters)
Vue.use(lodash)
Vue.use(moment)

Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '_', { value: lodash })
Object.defineProperty(Vue.prototype, 'moment', { value: moment })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
