import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _63c6b2e4 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _3b4fea31 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _53df3daf = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _5a488d56 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _bdf384b4 = () => interopDefault(import('..\\pages\\compare.vue' /* webpackChunkName: "pages/compare" */))
const _87ebe13e = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _99fea128 = () => interopDefault(import('..\\pages\\home-book-store.vue' /* webpackChunkName: "pages/home-book-store" */))
const _209576d6 = () => interopDefault(import('..\\pages\\login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _0eba334a = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _3919ed34 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _3ee6c285 = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _3bb69da7 = () => interopDefault(import('..\\pages\\shop-grid-full-width.vue' /* webpackChunkName: "pages/shop-grid-full-width" */))
const _0fe43022 = () => interopDefault(import('..\\pages\\shop-grid-no-sidebar.vue' /* webpackChunkName: "pages/shop-grid-no-sidebar" */))
const _76b1765c = () => interopDefault(import('..\\pages\\shop-grid-right-sidebar.vue' /* webpackChunkName: "pages/shop-grid-right-sidebar" */))
const _7a551f16 = () => interopDefault(import('..\\pages\\shop-grid-two-column.vue' /* webpackChunkName: "pages/shop-grid-two-column" */))
const _d2abc562 = () => interopDefault(import('..\\pages\\shop-list-full-width.vue' /* webpackChunkName: "pages/shop-list-full-width" */))
const _7461fc44 = () => interopDefault(import('..\\pages\\shop-list-standard.vue' /* webpackChunkName: "pages/shop-list-standard" */))
const _30bb1066 = () => interopDefault(import('..\\pages\\terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _6a0dca54 = () => interopDefault(import('..\\pages\\wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _0dde97f1 = () => interopDefault(import('..\\pages\\blog\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _6e69611d = () => interopDefault(import('..\\pages\\blog\\blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _07a1b06f = () => interopDefault(import('..\\pages\\product\\product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _399948e9 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _2c4c56ec = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _2456fd5a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _63c6b2e4,
    name: "about"
  }, {
    path: "/blog",
    component: _3b4fea31,
    name: "blog"
  }, {
    path: "/cart",
    component: _53df3daf,
    name: "cart"
  }, {
    path: "/checkout",
    component: _5a488d56,
    name: "checkout"
  }, {
    path: "/compare",
    component: _bdf384b4,
    name: "compare"
  }, {
    path: "/contact",
    component: _87ebe13e,
    name: "contact"
  }, {
    path: "/home-book-store",
    component: _99fea128,
    name: "home-book-store"
  }, {
    path: "/login-register",
    component: _209576d6,
    name: "login-register"
  }, {
    path: "/my-account",
    component: _0eba334a,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _3919ed34,
    name: "privacy-policy"
  }, {
    path: "/shop",
    component: _3ee6c285,
    name: "shop"
  }, {
    path: "/shop-grid-full-width",
    component: _3bb69da7,
    name: "shop-grid-full-width"
  }, {
    path: "/shop-grid-no-sidebar",
    component: _0fe43022,
    name: "shop-grid-no-sidebar"
  }, {
    path: "/shop-grid-right-sidebar",
    component: _76b1765c,
    name: "shop-grid-right-sidebar"
  }, {
    path: "/shop-grid-two-column",
    component: _7a551f16,
    name: "shop-grid-two-column"
  }, {
    path: "/shop-list-full-width",
    component: _d2abc562,
    name: "shop-list-full-width"
  }, {
    path: "/shop-list-standard",
    component: _7461fc44,
    name: "shop-list-standard"
  }, {
    path: "/terms-conditions",
    component: _30bb1066,
    name: "terms-conditions"
  }, {
    path: "/wishlist",
    component: _6a0dca54,
    name: "wishlist"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _0dde97f1,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _6e69611d,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/product/product-affiliate",
    component: _07a1b06f,
    name: "product-product-affiliate"
  }, {
    path: "/blog/:slug",
    component: _399948e9,
    name: "blog-slug"
  }, {
    path: "/product/:slug?",
    component: _2c4c56ec,
    name: "product-slug"
  }, {
    path: "/",
    component: _2456fd5a,
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
