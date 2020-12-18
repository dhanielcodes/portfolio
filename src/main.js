import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
Vue.use(VueRouter)
Vue.use(VueMeta)


//Routed Components
import Home from './components/routedComponents/Home.vue'
import About from './components/routedComponents/About.vue'
import Assets from './components/routedComponents/Assets.vue'
import Resume from './components/routedComponents/Resume.vue'
import Contact from './components/routedComponents/Contact.vue'
import NotFound from './components/routedComponents/404.vue'



const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/assets',
      component: Assets
    },
    {
      path: '/resume',
      component: Resume
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '*',
      component: NotFound
    }
  ],
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
// ...


export default router


