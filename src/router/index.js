import Vue from 'vue'
import VueRouter from 'vue-router'
import PromotionsView from '../views/PromotionsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'promotions',
    component: PromotionsView,
    meta: {
      layout: 'DefaultLayout'
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      layout: 'DefaultLayout'
    }
  },
  {
    path: "*",
    component: () => import('../views/PageNotFound.vue'),  
    meta: {
      layout: 'ErrorLayout'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
