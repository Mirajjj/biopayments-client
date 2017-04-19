import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/unit'
import AboutUs from '@/pages/about/unit'
import Partnership from '@/pages/partnership/unit'
import ContactUs from '@/pages/contact/unit'

import Navigation from '@/components/navigation/unit'
import Footer from '@/components/bottom/unit'

Vue.component('navigation', Navigation)
Vue.component('bottom', Footer)

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: '/',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs
    },
    {
      path: '/partnership',
      name: 'partnership',
      component: Partnership
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUs
    }
  ]
})
