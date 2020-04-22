import Vue from 'vue';
require('@/assets/styles/style.css')
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);



import App from './App.vue';
import Loading from "./components/loading";
import headerbar from "./components/top/headerbar";
import BrewMap from "./components/brewMap";
import BrewerList from "./components/brewerList";
import BrewerCard from './components/brewerCard';

Vue.component('HeaderBar', headerbar);
Vue.component('Loading', Loading);
Vue.component('BrewerList', BrewerList);
Vue.component('BrewerCard', BrewerCard);
Vue.component('BrewMap', BrewMap);

new Vue({
  disableHostCheck: true,
  render: h => h(App),
}).$mount('#app');
