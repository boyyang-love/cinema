import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from 'axios';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.filter('setWH',(url,arg) =>{
  return url.replace(/w\.h/,arg);
});

import Loading from "@/components/Loading";
Vue.component("loading",Loading);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
