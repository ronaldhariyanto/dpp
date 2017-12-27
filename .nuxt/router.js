import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _08e38e60 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _9dfabb44 = () => import('../pages/tentang-kami.vue' /* webpackChunkName: "pages/tentang-kami" */).then(m => m.default || m)
const _272f22fc = () => import('../pages/informasi.vue' /* webpackChunkName: "pages/informasi" */).then(m => m.default || m)
const _1c4f8cbe = () => import('../pages/hubungi.vue' /* webpackChunkName: "pages/hubungi" */).then(m => m.default || m)
const _997d99a2 = () => import('../pages/forum.vue' /* webpackChunkName: "pages/forum" */).then(m => m.default || m)
const _a62f90ee = () => import('../pages/berita.vue' /* webpackChunkName: "pages/berita" */).then(m => m.default || m)
const _5c3951fe = () => import('../pages/himpana.vue' /* webpackChunkName: "pages/himpana" */).then(m => m.default || m)
const _5f82560e = () => import('../pages/laporan.vue' /* webpackChunkName: "pages/laporan" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _08e38e60,
			name: "index"
		},
		{
			path: "/tentang-kami",
			component: _9dfabb44,
			name: "tentang-kami"
		},
		{
			path: "/informasi",
			component: _272f22fc,
			name: "informasi"
		},
		{
			path: "/hubungi",
			component: _1c4f8cbe,
			name: "hubungi"
		},
		{
			path: "/forum",
			component: _997d99a2,
			name: "forum"
		},
		{
			path: "/berita",
			component: _a62f90ee,
			name: "berita"
		},
		{
			path: "/himpana",
			component: _5c3951fe,
			name: "himpana"
		},
		{
			path: "/laporan",
			component: _5f82560e,
			name: "laporan"
		}
    ],
    fallback: false
  })
}
