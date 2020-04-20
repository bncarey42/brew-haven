import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);



import App from './App.vue';
import Sidebar from './components/sidebar';
import BrewMap from "./components/brewMap"
import BrewerCard from './components/brewerCard';

Vue.component('Sidebar', Sidebar);
Vue.component('BrewerCard', BrewerCard);
Vue.component('BrewMap', BrewMap);

new Vue({
  disableHostCheck: true,
  render: h => h(App),
}).$mount('#app');
