import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  constantRouterMap,
  asyncRouterMap
} from '@/config/router.config'

const routerMerge = constantRouterMap.concat(asyncRouterMap);

Vue.use(VueRouter)

const router = new VueRouter({
  mode: '',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMerge
})

export default router