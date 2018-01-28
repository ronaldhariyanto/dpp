import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _38a5334c = () => import('../pages/berita/index.vue' /* webpackChunkName: "pages/berita/index" */).then(m => m.default || m)
const _b7b9e67e = () => import('../pages/hubungi/index.vue' /* webpackChunkName: "pages/hubungi/index" */).then(m => m.default || m)
const _13183bfe = () => import('../pages/himpana/index.vue' /* webpackChunkName: "pages/himpana/index" */).then(m => m.default || m)
const _cd512b3e = () => import('../pages/tentang-kami/index.vue' /* webpackChunkName: "pages/tentang-kami/index" */).then(m => m.default || m)
const _26605a72 = () => import('../pages/forum/index.vue' /* webpackChunkName: "pages/forum/index" */).then(m => m.default || m)
const _5a8bfcbc = () => import('../pages/laporan/index.vue' /* webpackChunkName: "pages/laporan/index" */).then(m => m.default || m)
const _fb870702 = () => import('../pages/informasi/index.vue' /* webpackChunkName: "pages/informasi/index" */).then(m => m.default || m)
const _182662f0 = () => import('../pages/pengumuman/index.vue' /* webpackChunkName: "pages/pengumuman/index" */).then(m => m.default || m)
const _635a7d82 = () => import('../pages/tentang-kami/sejarah.vue' /* webpackChunkName: "pages/tentang-kami/sejarah" */).then(m => m.default || m)
const _cb80ce98 = () => import('../pages/berita/_id.vue' /* webpackChunkName: "pages/berita/_id" */).then(m => m.default || m)
const _5ad06158 = () => import('../pages/pengumuman/_id.vue' /* webpackChunkName: "pages/pengumuman/_id" */).then(m => m.default || m)
const _08e38e60 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			path: "/berita",
			component: _38a5334c,
			name: "berita"
		},
		{
			path: "/hubungi",
			component: _b7b9e67e,
			name: "hubungi"
		},
		{
			path: "/himpana",
			component: _13183bfe,
			name: "himpana"
		},
		{
			path: "/tentang-kami",
			component: _cd512b3e,
			name: "tentang-kami"
		},
		{
			path: "/forum",
			component: _26605a72,
			name: "forum"
		},
		{
			path: "/laporan",
			component: _5a8bfcbc,
			name: "laporan"
		},
		{
			path: "/informasi",
			component: _fb870702,
			name: "informasi"
		},
		{
			path: "/pengumuman",
			component: _182662f0,
			name: "pengumuman"
		},
		{
			path: "/tentang-kami/sejarah",
			component: _635a7d82,
			name: "tentang-kami-sejarah"
		},
		{
			path: "/berita/:id",
			component: _cb80ce98,
			name: "berita-id"
		},
		{
			path: "/pengumuman/:id",
			component: _5ad06158,
			name: "pengumuman-id"
		},
		{
			path: "/",
			component: _08e38e60,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
