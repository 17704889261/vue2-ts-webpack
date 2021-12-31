import type { RouteConfig } from 'vue-router'
import DefaultLayout from '@/layout/index.vue'

const routes: Array<RouteConfig> = [
  {
    path: '/test',
    name: 'Test',
    redirect: '/test/dependencies',
    component: DefaultLayout,
    children: [
      {
        path: 'dependencies',
        name: 'Dependencies',
        meta: {
          title: 'Dependencies'
        },
        component: () => import(/* webpackChunkName: "test" */ '@/views/dependencies/index.vue')
      },
      {
        path: 'home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "test" */ '@/views/home/index.vue')
      },
      {
        path: 'axios',
        name: 'Axios',
        component: () => import(/* webpackChunkName: "test" */ '@/views/axios/index.vue')
      }
    ]
  }
]

export default routes
