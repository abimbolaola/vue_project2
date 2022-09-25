import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import App from './App.vue';
import { router } from './router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
