import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'

export const createStaticRouter = () => {
  return createRouter({
    history: createWebHashHistory(),
    routes,
  })
}
