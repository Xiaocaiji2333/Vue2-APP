import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../pages/MSite'
import Order from '../pages/Order'
import Profile from '../pages/Profile'
import Search from '../pages/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: MSite
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
