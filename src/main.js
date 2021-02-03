import Vue from "vue";
import router from "./router/index.js";
import store from "./store/index.js";
import App from "./App";

import Quasar from "quasar/dist/quasar.umd.min.js";
import "quasar/dist/quasar.css";
import "@quasar/extras/ionicons-v4/ionicons-v4.css";

import VeeValidate from "vee-validate";

Vue.use(VeeValidate, {
  validity: true
});

Vue.config.productionTip = false;
Vue.use(Quasar, {
  // your quasar configs here
  // components: All,
  // directives: All,
  // plugins: {
  //   ...All
  // },
  // iconSet
});
const Router = router({ store });

new Vue({
  el: "#app",
  store,
  router: Router,
  render: h => h(App)
});
