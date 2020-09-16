import Vue from 'vue';
import Notifications from 'vue-notification'
import velocity      from 'velocity-animate'

// Plugins
Vue.use(Notifications, { velocity })

//Components
import AppLayout from './components/AppLayout.vue';
const app = new Vue({
    el: '#vueApp',
    components:{
        AppLayout
    }
});