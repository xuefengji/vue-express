// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import GoodsList from '@/views/GoodsList'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload';
import infiniteScroll from 'vue-infinite-scroll';

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(infiniteScroll);
Vue.use(ElementUI);
Vue.use(VueLazyload, {
  loading: '/static/loading-svg/loading-bars.svg'
})


new Vue({
  el: '#app',
  router,
  components: { GoodsList },
  template: '<GoodsList/>'
})
