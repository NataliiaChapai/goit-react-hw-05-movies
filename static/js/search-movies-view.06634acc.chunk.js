"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[252],{639:function(e,t,n){n.d(t,{Hx:function(){return v},PQ:function(){return p},SU:function(){return f},bI:function(){return l},fP:function(){return m}});var r=n(861),c=n(757),o=n.n(c),i="https://api.themoviedb.org/3/",a="c3fb1453ab7f1b7a3769167de0ee4418";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(o().mark((function e(){var t,n,r,c=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(t,n);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function f(){return u("".concat(i,"trending/movie/day?api_key=").concat(a))}function l(e){return u("".concat(i,"search/movie?api_key=").concat(a,"&query=").concat(e))}function m(e){return u("".concat(i,"movie/").concat(e,"?api_key=").concat(a))}function p(e){return u("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(a))}function v(e){return u("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(a))}},975:function(e,t,n){n.d(t,{Z:function(){return f}});var r="MovieList_list__x6qRs",c=n(501),o=n(871),i="ListItem_item__vugmw",a="ListItem_link__MmdUJ",u=n(184);function s(e){var t=e.movie,n=(0,o.TH)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("li",{className:i,children:(0,u.jsx)(c.rU,{to:"/movies/".concat(t.id),state:{from:n},className:a,children:t.title})})})}function f(e){var t=e.movies;return(0,u.jsx)(u.Fragment,{children:t&&(0,u.jsx)("ul",{className:r,children:t.map((function(e){return(0,u.jsx)(s,{movie:e},e.id)}))})})}},432:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,{default:function(){return d}});var i=n(885),a=n(791),u=n(501),s=n(871),f=n(368),l=n(639),m="MovieSearch_form__imIS0",p="MovieSearch_input__BU657",v="MovieSearch_button__GNXbF",h=n(975),b=n(184);function d(){var e=(0,s.TH)(),t=(0,u.lr)(),n=(0,i.Z)(t,2),r=n[0],c=n[1],d=(0,f.lX)({window:window}),_=(0,a.useState)([]),y=(0,i.Z)(_,2),j=y[0],w=y[1],g=(0,a.useState)(""),x=(0,i.Z)(g,2),O=x[0],k=x[1];function P(e){l.bI(e).then((function(e){return w(e.results)}))}return(0,a.useEffect)((function(){var e=r.get("query");e&&(k(e),P(e))}),[r]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==O.trim()&&(d.push(o(o({},e),{},{search:"query=".concat(O)})),P(O),c("query=".concat(O)))},className:m,children:[(0,b.jsx)("input",{name:"name",value:O,className:p,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",onChange:function(e){k(e.target.value.toLowerCase())}}),(0,b.jsx)("button",{type:"submit",className:v,children:"Search"})]}),j&&(0,b.jsx)(h.Z,{movies:j})]})}}}]);
//# sourceMappingURL=search-movies-view.06634acc.chunk.js.map