import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from 'axios';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
// axios.defaults.baseURL = "http://39.97.33.178";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
