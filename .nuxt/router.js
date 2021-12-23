import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5a9ea462 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _2817e604 = () => interopDefault(import('../pages/archive.vue' /* webpackChunkName: "pages/archive" */))
const _30e614bb = () => interopDefault(import('../pages/article/index.vue' /* webpackChunkName: "pages/article/index" */))
const _0db52228 = () => interopDefault(import('../pages/hero.vue' /* webpackChunkName: "pages/hero" */))
const _9d77664a = () => interopDefault(import('../pages/project.vue' /* webpackChunkName: "pages/project" */))
const _56d809e3 = () => interopDefault(import('../pages/article/_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _1b2eeed8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _5a9ea462,
    name: "about"
  }, {
    path: "/archive",
    component: _2817e604,
    name: "archive"
  }, {
    path: "/article",
    component: _30e614bb,
    name: "article"
  }, {
    path: "/hero",
    component: _0db52228,
    name: "hero"
  }, {
    path: "/project",
    component: _9d77664a,
    name: "project"
  }, {
    path: "/article/:id",
    component: _56d809e3,
    name: "article-id"
  }, {
    path: "/",
    component: _1b2eeed8,
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
