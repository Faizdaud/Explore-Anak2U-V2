import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  

  {
    path: '/listing/:stateId',
    name: 'listing',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "listing" */ '../views/ListingView.vue')
  },

  {
    path: '/register/:taskaSlug',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/RegistrationView.vue')
  },

  
  {
    path: '/details/:taskaSlug',
    name: 'DetailView',
    component: DetailView
  }
  
  

]

const router = new VueRouter({
  routes,
  mode: 'history',
  
});

export default router;
