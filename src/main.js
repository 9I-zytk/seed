import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './registerServiceWorker'
import config from '@/config'
// import importDirective from '@/directive'
import installPlugin from '@/plugin'
import '@/assets/icons/iconfont.css'
// 实际打包时应该不引入mock
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('@/mock')
Vue.use(ElementUI)

/**
 * @description 注册admin内置插件
 */
installPlugin(Vue)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * 注册指令
 */
// importDirective(Vue)

/* eslint-disable no-new */
new Vue({
  router,
  // i18n,
  store,
  render: h => h(App)
}).$mount('#app')
