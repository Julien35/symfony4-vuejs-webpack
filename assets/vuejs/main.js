import Vue from 'vue'
import App from './App'

console.log('Symfony 4 & vuejs');
console.log(Vue);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
