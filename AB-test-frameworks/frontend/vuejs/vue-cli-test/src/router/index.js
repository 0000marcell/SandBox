import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Test2 from '@/components/Test2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/another',
      name: 'another',
      component: Test
    },
    {
      path: '/another/1',
      name: 'another1',
      component: Test2
    }
  ]
})
