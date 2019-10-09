// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from '@/views/index';
import router from './router';
import ElementUI from 'element-ui';
import Vuex from 'vuex';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload';
import infiniteScroll from 'vue-infinite-scroll';


Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(infiniteScroll);
Vue.use(ElementUI);
Vue.use(VueLazyload, {
  loading: '/static/loading-svg/loading-bars.svg'
});
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    userName:''
  },
  mutations:{
    setName (state,userName){
      state.userName = userName
    }
  }
});

new Vue({
  el: '#app',
  router,
  store,
  components: { Index },
  template: '<Index/>'
})
