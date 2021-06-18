import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f34b0378 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _25d5110e = () => interopDefault(import('../pages/allarticle.vue' /* webpackChunkName: "pages/allarticle" */))
const _edf2bfa0 = () => interopDefault(import('../pages/article/index.vue' /* webpackChunkName: "pages/article/index" */))
const _2404ef13 = () => interopDefault(import('../pages/hero.vue' /* webpackChunkName: "pages/hero" */))
const _21bbd410 = () => interopDefault(import('../pages/project.vue' /* webpackChunkName: "pages/project" */))
const _251eee98 = () => interopDefault(import('../pages/article/_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _b3db4dee = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _f34b0378,
    name: "about"
  }, {
    path: "/allarticle",
    component: _25d5110e,
    name: "allarticle"
  }, {
    path: "/article",
    component: _edf2bfa0,
    name: "article"
  }, {
    path: "/hero",
    component: _2404ef13,
    name: "hero"
  }, {
    path: "/project",
    component: _21bbd410,
    name: "project"
  }, {
    path: "/article/:id",
    component: _251eee98,
    name: "article-id"
  }, {
    path: "/",
    component: _b3db4dee,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
