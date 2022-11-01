import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'
import store from './store'
import axios from 'axios'
import './mock/mock.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = JSON.parse(window.sessionStorage.getItem('token'))
  if (!tokenStr) { 
    alert('请先登录账号再访问')
    return next('/login')
  }
  next()
})

new Vue({
  router,
  store,
  axios,
  render: h => h(App),
}).$mount('#app')
