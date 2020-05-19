import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./router";

/**
 * 解决重复点击路由时报错问题
 */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
