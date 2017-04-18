import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/unit'
import AboutUs from '@/pages/about/unit'
import Navigation from '@/components/navigation/unit'

Vue.component('navigation', Navigation)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs
    }
  ]
})
