"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[8],{639:function(n,t,e){e.d(t,{Hx:function(){return v},PQ:function(){return h},SU:function(){return f},bI:function(){return l},fP:function(){return m}});var r=e(861),c=e(757),a=e.n(c),i="https://api.themoviedb.org/3/",o="c3fb1453ab7f1b7a3769167de0ee4418";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(a().mark((function n(){var t,e,r,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return u("".concat(i,"trending/movie/day?api_key=").concat(o))}function l(n){return u("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(n))}function m(n){return u("".concat(i,"movie/").concat(n,"?api_key=").concat(o))}function h(n){return u("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(o))}function v(n){return u("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(o))}},781:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(885),c=e(791),a=e(639),i=e(131),o="Home_title__aakFz",u=e(184);function s(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1];return(0,c.useEffect)((function(){a.SU().then((function(n){return s(n.results)}))}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{className:o,children:"Trending today"}),(0,u.jsx)(i.Z,{movies:e})]})}},131:function(n,t,e){e.d(t,{Z:function(){return s}});var r=e(501),c=e(871),a="MovieList_list__x6qRs",i="MovieList_item__1iWB0",o="MovieList_link__i1a7g",u=e(184);function s(n){var t=n.movies,e=(0,c.TH)();return(0,u.jsx)(u.Fragment,{children:t&&(0,u.jsx)("ul",{className:a,children:t.map((function(n){var t=n.id,c=n.title;return(0,u.jsx)("li",{className:i,children:(0,u.jsx)(r.rU,{to:{pathname:"/movies/".concat(t),state:{from:e}},className:o,children:c})},t)}))})})}}}]);
//# sourceMappingURL=home-view.e504ca0a.chunk.js.map