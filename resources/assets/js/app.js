
require('./bootstrap');

window.Vue = require('vue');
import Buefy from 'buefy';

Vue.use(Buefy);


// Vue.component('example-component', require('./components/ExampleComponent.vue'));
var app = new Vue({
  el: '#app',
  data: {}
});

$(document).ready(function(){
  $('button.dropdown').hover(function(e) {
    $(this).toggleClass('is-open');
  });
});
