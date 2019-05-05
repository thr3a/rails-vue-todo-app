import Vue from 'vue/dist/vue.esm';
import Header from './components/header.vue'
import Mylist from './components/index.vue'
var app = new Vue({
  el: '#app',
  components: {
    'navbar': Header,
    'mylist': Mylist
  }
});
