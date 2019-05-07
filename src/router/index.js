import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/mainpage.vue'
import login_page from '@/components/login_page.vue'
import order1 from '@/components/order.vue'
import order_2 from '@/components/order_2.vue'
import order_3 from '@/components/order_3.vue'
import order_4 from '@/components/order_4.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: mainpage,
      meta: { requiresParallax: true }
    },
    {
      path: '/login',
      name: 'login',
      component: login_page,
      meta: { requiresParallax: false }
    },
    {
      path: '/order/1',
      name: 'order1',
      component: order1,
      meta: { requiresParallax: false }
    },
    {
      path: '/order/2',
      name: 'order2',
      component: order_2,
      meta: { requiresParallax: false }
    },
    {
      path: '/order/3',
      name: 'order3',
      component: order_3,
      meta: { requiresParallax: false }
    },
    {
      path: '/order/4',
      name: 'order4',
      component: order_4,
      meta: { requiresParallax: false }
    },


  ]
})
