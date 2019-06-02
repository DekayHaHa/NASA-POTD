import Vue from 'vue'
import VueRouter from 'vue-router'
import Calendar from './components/Calendar'
import Day from './components/Day'
Vue.use(VueRouter)



const router = new VueRouter({
  routes: [
    {
      path: '/',
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