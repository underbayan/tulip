!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.TX_TULIP=t():e.TX_TULIP=t()}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=5)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){var r,u,o;u=[t,n(2)],void 0===(o="function"==typeof(r=function(e,t){"use strict";var r=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){const t=e.length;if(t>i)return{};const n=[];let r,a="";for(let i=0;i<t;i++)switch(r=e.charAt(i)){case"\r":continue;case"\n":case"\t":case" ":case f:case c:case u:case o:a&&(n.push(a),a=""),r!==u&&r!==f||n.push(u),r!==o&&r!==c||n.push(o);break;default:a+=r}return n};const u=(t=r(t)).default.BRACE_L,o=t.default.BRACE_R,f=t.default.SQUARE_L,c=t.default.SQUARE_R,i=2048})?r.apply(t,u):r)||(e.exports=o)},function(e,t,n){var r,u,o;u=[t],void 0===(o="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.default={BRACE_L:"{",BRACE_R:"}",SQUARE_L:"[",SQUARE_R:"]"}})?r.apply(t,u):r)||(e.exports=o)},function(e,t,n){var r,u,o;u=[t,n(2)],void 0===(o="function"==typeof(r=function(e,t){"use strict";var r=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function e(t,n=1){let r=c();if(n>f)return r;let i,a="";for(;i=t.shift();)switch(i){case u:a?r[a]=e(t,++n):r=e(t,++n);break;case o:return a="",r;default:a=i,r[i]=c()}return r};const u=(t=r(t)).default.BRACE_L,o=t.default.BRACE_R,f=(t.default.SQUARE_L,t.default.SQUARE_R,12),c=e=>Object.create?Object.create(null):{}})?r.apply(t,u):r)||(e.exports=o)},function(e,t,n){var r,u,o;u=[t],void 0===(o="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function e(t,n){if("object"!=typeof n||null===n)return n;let r={};const u=Object.keys(t);if(u.length){if("[object Array]"===Object.prototype.toString.call(n))return n.map(n=>e(t,n));u.map(u=>{r[u]=e(t[u],n[u])})}else r=n;return r}})?r.apply(t,u):r)||(e.exports=o)},function(e,t,n){var r,u,o;u=[t,n(6),n(1),n(3),n(4)],void 0===(o="function"==typeof(r=function(e,t,r,u,o){"use strict";var f=n(0);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lexer",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"syntactic",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"generator",{enumerable:!0,get:function(){return o.default}}),t=f(t),r=f(r),u=f(u),o=f(o)})?r.apply(t,u):r)||(e.exports=o)},function(e,t,n){var r,u,o;u=[t,n(1),n(3),n(4)],void 0===(o="function"==typeof(r=function(e,t,r,u){"use strict";var o=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,n){const o=(0,t.default)(e),f=(0,r.default)(o);return(0,u.default)(f,n)},t=o(t),r=o(r),u=o(u)})?r.apply(t,u):r)||(e.exports=o)}])});
//# sourceMappingURL=tx-tulip.1.0.0.js.map