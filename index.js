import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";
import VDateRange from "vuetify-daterange-picker";
import "vuetify-daterange-picker/dist/vuetify-daterange-picker.css";
import App from "./App.vue";

Vue.use(Vuetify);
Vue.use(VDateRange);

// eslint-disable-next-line no-new
new Vue({
  el: "#app",
  render: h => h(App)
});
