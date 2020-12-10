import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faVideo,
  faVideoSlash,
  faPhone,
  faPhoneSlash,
  faMicrophone,
  faMicrophoneSlash,
  faTty,
  faChalkboard,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

library.add(faVideo);
library.add(faVideoSlash);
library.add(faPhone);
library.add(faPhoneSlash);
library.add(faMicrophone);
library.add(faMicrophoneSlash);
library.add(faTty);
library.add(faChalkboard);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
