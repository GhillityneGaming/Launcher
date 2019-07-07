import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VuePageTransition from 'vue-page-transition';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faChevronDown, faCoffee);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VuePageTransition);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');