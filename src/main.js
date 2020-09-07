import Vue from 'vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'


import VueMeta from 'vue-meta'
import inViewportDirective from 'vue-in-viewport-directive'
import i18n from './i18n'
import CountryFlag from 'vue-country-flag'
 


Vue.config.productionTip = false

Vue.use(VueTypedJs)
Vue.use(VueMeta)
Vue.directive('in-viewport', inViewportDirective)
Vue.component('country-flag', CountryFlag)


new Vue({
   el: '#app',
   i18n,
   render: h => h(App)
})
//App.vue - note that what is relevant for Google 
// is the 'name' meta tag, the 'description' and the robots meta tag
// using the 'keywords' meta tag won't help, as Google ignores it

