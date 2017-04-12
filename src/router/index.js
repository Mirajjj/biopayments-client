import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/unit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    }
  ]
})
