webpackJsonp([1],{"6aAh":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("QmRb"),a=n("qd/W"),i=n("VU/8"),r=i(s.a,a.a,!1,null,null,null);e.default=r.exports},QmRb:function(t,e,n){"use strict";var s=n("mtWM"),a=n.n(s);e.a={data:function(){return{NewsData:[]}},mounted:function(){this.getNews()},methods:{getNews:function(){var t=this;a.a.get("http://dpp-cms-dev.myteknomedia.com/wp-json/wp/v2/posts/").then(function(e){t.NewsData=e.data})}}}},"qd/W":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"breadcrumb uk-margin-medium-bottom"},[n("div",{staticClass:"uk-container"},[n("ul",{staticClass:"uk-breadcrumb"},[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("home")])],1),t._m(0)])])]),n("section",{},[n("div",{staticClass:"uk-container"},[n("div",{attrs:{"uk-grid":""}},t._l(t.NewsData,function(e){return n("article",{key:e.id,staticClass:"uk-width-1-3@m"},[n("h4",[t._v(t._s(e.title.rendered)+"\n            "),n("small",[t._v(t._s(e.date))])]),n("div",{domProps:{innerHTML:t._s(e.content.rendered)}})])}))])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("b",[t._v("Berita")])])}],i={render:s,staticRenderFns:a};e.a=i}});
//# sourceMappingURL=index.c56eb3060d4bce92b3f8.js.map