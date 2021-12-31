import type { RouteConfig } from 'vue-router'
import { routes } from '@/router/index'

export interface Menu {
  name: string | undefined
  path: string
  meta: any
  children: RouteConfig[]
}

export function getMenus() {
  const menus = routes
  menus.map(item => {
    if (!item.children) {
      item.children = []
    }
    return item
  })
  return menus
}
