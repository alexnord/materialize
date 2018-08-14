// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueParticles from 'vue-particles';
import VueScrollReveal from 'vue-scroll-reveal';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuelidate from 'vuelidate';
import VueAnalytics from 'vue-analytics';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueParticles);
Vue.use(VueScrollReveal);
Vue.use(VueAxios, axios);
Vue.use(Vuelidate);

Vue.use(VueAnalytics, {
  id: 'UA-123965580-1',
  router,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
