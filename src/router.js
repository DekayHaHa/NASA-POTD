import Vue from 'vue'
import Router from 'vue-router'
import Calendar from './components/Calendar'
import Day from './components/Day'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/day/:id',
      name: 'day',
      component: Day
    }
  ]
})
export default router