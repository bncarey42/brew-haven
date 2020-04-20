import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import App from './App.vue';
import sidebar from './components/sidebar';
import brewMap from 
import brewerCard from './components/brewerCard';

Vue.component('sidebar', sidebar);
Vue.component('brewer-card', brewer_card);

new Vue({
  render: h => h(App),
}).$mount('#app');
