"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[252],{639:function(e,t,n){n.d(t,{Hx:function(){return h},PQ:function(){return m},SU:function(){return f},bI:function(){return l},fP:function(){return p}});var r=n(861),c=n(757),o=n.n(c),a="https://api.themoviedb.org/3/",i="c3fb1453ab7f1b7a3769167de0ee4418";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(o().mark((function e(){var t,n,r,c=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(t,n);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function f(){return u("".concat(a,"trending/movie/day?api_key=").concat(i))}function l(e){return u("".concat(a,"search/movie?api_key=").concat(i,"&query=").concat(e))}function p(e){return u("".concat(a,"movie/").concat(e,"?api_key=").concat(i))}function m(e){return u("".concat(a,"movie/").concat(e,"/credits?api_key=").concat(i))}function h(e){return u("".concat(a,"movie/").concat(e,"/reviews?api_key=").concat(i))}},131:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(501),c=n(871),o="MovieList_list__x6qRs",a="MovieList_item__1iWB0",i="MovieList_link__i1a7g",u=n(184);function s(e){var t=e.movies,n=(0,c.TH)();return(0,u.jsx)(u.Fragment,{children:t&&(0,u.jsx)("ul",{className:o,children:t.map((function(e){var t=e.id,c=e.title;return(0,u.jsx)("li",{className:a,children:(0,u.jsx)(r.rU,{to:{pathname:"/movies/".concat(t),state:{from:n}},className:i,children:c})},t)}))})})}},432:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,{default:function(){return d}});var a=n(885),i=n(791),u=n(501),s=n(871),f=n(368),l=n(639),p="MovieSearch_form__imIS0",m="MovieSearch_input__BU657",h="MovieSearch_button__GNXbF",v=n(131),b=n(184);function d(){var e=(0,s.TH)(),t=(0,u.lr)(),n=(0,a.Z)(t,1)[0],r=(0,f.lX)({window:window}),c=(0,i.useState)([]),d=(0,a.Z)(c,2),_=d[0],y=d[1],j=(0,i.useState)(""),w=(0,a.Z)(j,2),g=w[0],O=w[1];function k(e){l.bI(e).then((function(e){return y(e.results)}))}return(0,i.useEffect)((function(){var e=n.get("query");e&&(O(e),k(e))}),[n]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==g.trim()&&(r.push(o(o({},e),{},{search:"query=".concat(g)})),k(g),O(""))},className:p,children:[(0,b.jsx)("input",{name:"name",value:g,className:m,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",onChange:function(e){O(e.target.value.toLowerCase())}}),(0,b.jsx)("button",{type:"submit",className:h,children:"Search"})]}),_&&(0,b.jsx)(v.Z,{movies:_})]})}}}]);
//# sourceMappingURL=search-movies-view.0d22bda2.chunk.js.map