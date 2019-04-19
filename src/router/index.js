import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/mainpage.vue'
import login_page from '@/components/login_page.vue'
import snippet from '@/components/mainn.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: mainpage
    },
    {
      path: '/login',
      name: 'login',
      component: login_page
    },
    {
      path: '/snip',
      name: 'snip',
      component: snippet
    }

  ]
})
