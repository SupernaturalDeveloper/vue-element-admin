import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as echarts from 'echarts';
import axios from "axios"
import Req from "@/api"
//ElementUI start
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI);
// ElementUI end
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
Vue.prototype.Req = Req;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
