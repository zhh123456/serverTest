import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);
import Welcome from './pages/welcome.vue';
import Home from './pages/home.vue';

const router = new VueRouter({
  routes:[
    {
      path:'/',
      component:Welcome
    },
    {
      path:'/home',
      component:Home
    }
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
