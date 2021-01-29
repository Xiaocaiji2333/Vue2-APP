import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../pages/MSite'
import Order from '../pages/Order'
import Profile from '../pages/Profile'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Message from '../components/verify/Message'
import Password from '../components/verify/Password'

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
    },
    {
      path: '/login',
      component: Login,
      children: [
        {
          path: 'msg',
          component: Message
        },
        {
          path: 'psw',
          component: Password
        },
        { path: '',
          redirect: 'msg'
        }
      ]
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
