import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _f34b0378 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _25d5110e = () => interopDefault(import('../pages/allarticle.vue' /* webpackChunkName: "pages/allarticle" */))
const _edf2bfa0 = () => interopDefault(import('../pages/article/index.vue' /* webpackChunkName: "pages/article/index" */))
const _2404ef13 = () => interopDefault(import('../pages/hero.vue' /* webpackChunkName: "pages/hero" */))
const _21bbd410 = () => interopDefault(import('../pages/project.vue' /* webpackChunkName: "pages/project" */))
const _251eee98 = () => interopDefault(import('../pages/article/_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _b3db4dee = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
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
  })
}
