import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faCode, faTerminal,faEdit, faStore,faCogs,faUsers,faFistRaised,faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee,faEdit, faCode,faTerminal,faStore,faCogs,faUsers,faFistRaised,faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueResource);

Vue.config.productionTip = false

Vue.use(iView);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
