import Vue from 'vue'
import type { RouteConfig } from 'vue-router'
import VueRouter from 'vue-router'

import testModule from './modules/test'

Vue.use(VueRouter)

export const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    name: 'Index',
    redirect: '/test',
    meta: {
      title: 'Index'
    }
  },
  ...testModule,
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404.vue')
  }
]

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
