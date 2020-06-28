import Vue from 'vue'
import App from './App.vue'
import "./assets/css/normalize.css"
import "./assets/css/common.css"

/* Plugins */
import "./plugins/echarts"
import "./plugins/elementui"

Vue.config.productionTip = false;

new Vue({
  render: function (h) { return h(App) }
}).$mount('#app');
