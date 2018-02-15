import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/Home'
import AmazonView from '@/views/Amazon'
import BoseView from '@/views/Bose'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/amazon',
      name: 'Amazon',
      component: AmazonView
    },
    {
      path: '/bose/:product_id',
      name: 'Bose',
      component: BoseView
    },
  ]
})
