import Vue from 'vue'
import VueRouter from 'vue-router'
import Calendar from './components/Calendar'
import Day from './components/Day'
import Favorites from './components/Favorites'
Vue.use(VueRouter)



const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'calendar',
      component: Calendar,
      props: true
    },
    {
      path: '/day/:id',
      name: 'day',
      component: Day,
      props: true
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites,
      props: true
    }
  ]
})
export default router