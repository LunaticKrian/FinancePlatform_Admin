import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _391ef18e = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _4021e9a2 = () => interopDefault(import('..\\pages\\lend\\index.vue' /* webpackChunkName: "pages/lend/index" */))
const _23413ecf = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _6be29ed3 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _a4ab2c72 = () => interopDefault(import('..\\pages\\user\\user1.vue' /* webpackChunkName: "pages/user/user1" */))
const _a48efd70 = () => interopDefault(import('..\\pages\\user\\user2.vue' /* webpackChunkName: "pages/user/user2" */))
const _d657e552 = () => interopDefault(import('..\\pages\\lend\\_id.vue' /* webpackChunkName: "pages/lend/_id" */))
const _032861fe = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _391ef18e,
    name: "about"
  }, {
    path: "/lend",
    component: _4021e9a2,
    name: "lend"
  }, {
    path: "/user",
    component: _23413ecf,
    children: [{
      path: "",
      component: _6be29ed3,
      name: "user"
    }, {
      path: "user1",
      component: _a4ab2c72,
      name: "user-user1"
    }, {
      path: "user2",
      component: _a48efd70,
      name: "user-user2"
    }]
  }, {
    path: "/lend/:id",
    component: _d657e552,
    name: "lend-id"
  }, {
    path: "/",
    component: _032861fe,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
