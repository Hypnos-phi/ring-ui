!function(n){function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=n,e.c=r,e.i=function(n){return n},e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:t})},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1047)}({10:function(n,e){function r(n,e){var r=n[1]||"",o=n[3];if(!o)return r;if(e&&"function"==typeof btoa){var i=t(o);return[r].concat(o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"})).concat([i]).join("\n")}return[r].join("\n")}function t(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=r(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,r){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(t[i]=!0)}for(o=0;o<n.length;o++){var c=n[o];"number"==typeof c[0]&&t[c[0]]||(r&&!c[2]?c[2]=r:r&&(c[2]="("+c[2]+") and ("+r+")"),e.push(c))}},e}},1047:function(n,e,r){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function c(n,e,r){return e&&i(n.prototype,e),r&&i(n,r),n}function a(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?u(n):e}function u(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function s(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&f(n,e)}function f(n,e){return(f=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}Object.defineProperty(e,"__esModule",{value:!0});var d=r(5),p=(r.n(d),r(4)),b=(r.n(p),r(8)),g=(r.n(b),r(9)),h=(r.n(g),r(11)),v=(r.n(h),r(6)),m=r.n(v),y=r(18),w=(r.n(y),r(214)),x=r(295),O=document.getElementById("avatar"),j=function(n){function e(){return o(this,e),a(this,l(e).apply(this,arguments))}return s(e,n),c(e,[{key:"render",value:function(){var n="".concat(x.a.serverUri,"/api/rest/avatar/default?username=Jet%20Brains"),e="data:image/svg+xml,".concat(encodeURIComponent('<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" height="120" width="120" fill="#00cc00"/></svg>'));return m.a.createElement("div",null,Object.keys(w.b).map(function(r){return m.a.createElement("div",{className:"avatar-demo",key:r},m.a.createElement(w.a,{size:w.b[r],url:n}),m.a.createElement(w.a,{size:w.b[r],url:e,round:!0}),m.a.createElement(w.a,{size:w.b[r]}))}))}}]),e}(v.Component);r.i(y.render)(m.a.createElement(j,null),O)},11:function(n,e,r){n.exports=r(3)(403)},12:function(n,e,r){n.exports=r(3)(259)},13:function(n,e,r){n.exports=r(3)(391)},14:function(n,e,r){e=n.exports=r(10)(!1),e.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  --ring-unit: 8px;\n\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-icon-secondary-color: #999;\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #1f2326;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #1f2326;\n  --ring-heading-color: var(--ring-text-color);\n  --ring-secondary-color: #737577;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #999;\n  --ring-dark-disabled-color: #444;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-popup-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: #111314;\n  --ring-navigation-background-color: #000;\n  --ring-tag-background-color: #e6ecf2;\n\n  /* Code */\n  --ring-code-background-color: #fff;\n  --ring-code-background-color: var(--ring-content-background-color);\n  --ring-code-color: #000;\n  --ring-code-comment-color: #808080;\n  --ring-code-meta-color: #808000;\n  --ring-code-keyword-color: #000080;\n  --ring-code-tag-background-color: #efefef;\n  --ring-code-tag-color: #000080;\n  --ring-code-tag-color: var(--ring-code-keyword-color);\n  --ring-code-tag-font-weight: bold;\n  --ring-code-field-color: #660e7a;\n  --ring-code-attribute-color: #00f;\n  --ring-code-number-color: #00f;\n  --ring-code-number-color: var(--ring-code-attribute-color);\n  --ring-code-string-color: #008000;\n  --ring-code-addition-color: #aadeaa;\n  --ring-code-deletion-color: #c8c8c8;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},16:function(n,e,r){function t(n,e){for(var r=0;r<n.length;r++){var t=n[r],o=g[t.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](t.parts[i]);for(;i<t.parts.length;i++)o.parts.push(f(t.parts[i],e))}else{for(var c=[],i=0;i<t.parts.length;i++)c.push(f(t.parts[i],e));g[t.id]={id:t.id,refs:1,parts:c}}}}function o(n,e){for(var r=[],t={},o=0;o<n.length;o++){var i=n[o],c=e.base?i[0]+e.base:i[0],a=i[1],u=i[2],l=i[3],s={css:a,media:u,sourceMap:l};t[c]?t[c].parts.push(s):r.push(t[c]={id:c,parts:[s]})}return r}function i(n,e){var r=m(n.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=x[x.length-1];if("top"===n.insertAt)t?t.nextSibling?r.insertBefore(e,t.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),x.push(e);else if("bottom"===n.insertAt)r.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=m(n.insertAt.before,r);r.insertBefore(e,o)}}function c(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=x.indexOf(n);e>=0&&x.splice(e,1)}function a(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=s();r&&(n.attrs.nonce=r)}return l(e,n.attrs),i(n,e),e}function u(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",l(e,n.attrs),i(n,e),e}function l(n,e){Object.keys(e).forEach(function(r){n.setAttribute(r,e[r])})}function s(){return r.nc}function f(n,e){var r,t,o,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var l=w++;r=y||(y=a(e)),t=d.bind(null,r,l,!1),o=d.bind(null,r,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=u(e),t=b.bind(null,r,e),o=function(){c(r),r.href&&URL.revokeObjectURL(r.href)}):(r=a(e),t=p.bind(null,r),o=function(){c(r)});return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}function d(n,e,r,t){var o=r?"":t.css;if(n.styleSheet)n.styleSheet.cssText=j(e,o);else{var i=document.createTextNode(o),c=n.childNodes;c[e]&&n.removeChild(c[e]),c.length?n.insertBefore(i,c[e]):n.appendChild(i)}}function p(n,e){var r=e.css,t=e.media;if(t&&n.setAttribute("media",t),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}function b(n,e,r){var t=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(t=O(t)),o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var c=new Blob([t],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(c),a&&URL.revokeObjectURL(a)}var g={},h=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(n,e){return e?e.querySelector(n):document.querySelector(n)},m=function(n){var e={};return function(n,r){if("function"==typeof n)return n();if(void 0===e[n]){var t=v.call(this,n,r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),y=null,w=0,x=[],O=r(46);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=h()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=o(n,e);return t(r,e),function(n){for(var i=[],c=0;c<r.length;c++){var a=r[c],u=g[a.id];u.refs--,i.push(u)}n&&t(o(n,e),e);for(var c=0;c<i.length;c++){var u=i[c];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete g[u.id]}}}};var j=function(){var n=[];return function(e,r){return n[e]=r,n.filter(Boolean).join("\n")}}()},17:function(n,e,r){n.exports=r(3)(360)},18:function(n,e,r){n.exports=r(3)(262)},2:function(n,e,r){n.exports=r(3)(91)},21:function(n,e,r){n.exports=r(3)(443)},214:function(n,e,r){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n,e){return a(n)||c(n,e)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(n,e){var r=[],t=!0,o=!1,i=void 0;try{for(var c,a=n[Symbol.iterator]();!(t=(c=a.next()).done)&&(r.push(c.value),!e||r.length!==e);t=!0);}catch(n){o=!0,i=n}finally{try{t||null==a.return||a.return()}finally{if(o)throw i}}return r}function a(n){if(Array.isArray(n))return n}function u(){return u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},u.apply(this,arguments)}function l(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),t.forEach(function(e){w(n,e,r[e])})}return n}function s(n,e){if(null==n)return{};var r,t,o=f(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function f(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}function d(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function p(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function b(n,e,r){return e&&p(n.prototype,e),r&&p(n,r),n}function g(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?y(n):e}function h(n){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function v(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&m(n,e)}function m(n,e){return(m=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function y(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function w(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}r.d(e,"b",function(){return B}),r.d(e,"a",function(){return M});var x=r(5),O=(r.n(x),r(4)),j=(r.n(O),r(13)),S=(r.n(j),r(8)),k=(r.n(S),r(9)),E=(r.n(k),r(11)),U=(r.n(E),r(25)),C=(r.n(U),r(6)),R=r.n(C),_=r(2),z=r.n(_),P=r(12),L=r.n(P),T=r(40),I=r(26),A=r(233),N=r.n(A),B={Size18:18,Size20:20,Size24:24,Size32:32,Size40:40,Size48:48,Size56:56},M=function(n){function e(){var n,r;d(this,e);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return r=g(this,(n=h(e)).call.apply(n,[this].concat(o))),w(y(y(r)),"state",{errorUrl:""}),w(y(y(r)),"handleError",function(){r.setState({errorUrl:r.props.url})}),w(y(y(r)),"handleSuccess",function(){r.setState({errorUrl:""})}),r}return v(e,n),b(e,[{key:"render",value:function(){var n=this.props,e=n.size,t=n.url,i=n.dpr,c=n.style,a=n.round,f=s(n,["size","url","dpr","style","round"]),d="".concat(e,"px"),p=e<=B.Size18?"var(--ring-border-radius-small)":"var(--ring-border-radius)",b=l({borderRadius:a?"50%":p,height:d,width:d},c);if(!t||this.state.errorUrl===t)return R.a.createElement("span",u({},f,{className:L()(N.a.avatar,N.a.empty,this.props.className),style:b}));var g=t;if(!r.i(T.g)(t)){var h=t.split("?"),v=o(h,2),m=v[0],y=v[1],w=l({},r.i(T.d)(y),{dpr:i,size:e});g=r.i(T.a)(m,w)}return R.a.createElement("img",u({},f,{onError:this.handleError,onLoad:this.handleSuccess,className:L()(N.a.avatar,this.props.className),style:b,src:g,alt:"User avatar"}))}}]),e}(C.PureComponent);w(M,"propTypes",{dpr:z.a.number,className:z.a.string,size:z.a.number,style:z.a.object,url:z.a.string,round:z.a.bool}),w(M,"defaultProps",{dpr:r.i(I.b)(),size:B.Size20,style:{}})},22:function(n,e,r){n.exports=r(3)(426)},232:function(n,e,r){e=n.exports=r(10)(!1),e.i(r(14),""),e.push([n.i,'.avatar_cdd {\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: center;\n     object-position: center;\n\n  border-radius: 3px;\n\n  border-radius: var(--ring-border-radius); /* This is a "graceful degradation" fallback, while the real value is controlled by JS */\n}\n\n.empty_5bc {\n  display: inline-block;\n\n  box-sizing: border-box;\n\n  border: 1px solid #b8d1e5;\n\n  border: 1px solid var(--ring-borders-color);\n}\n',""]),e.locals={avatar:"avatar_cdd",empty:"empty_5bc"}},233:function(n,e,r){var t=r(232);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0,r(16)(t,o),t.locals&&(n.exports=t.locals)},25:function(n,e,r){n.exports=r(3)(428)},26:function(n,e,r){"use strict";function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function i(n,e,r){return e&&o(n.prototype,e),r&&o(n,r),n}function c(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n){return n===document||n instanceof Node&&document.documentElement.contains(n.parentNode)}function u(n){if(n instanceof Range||a(n)){var e=n.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}}return Object.assign({},k)}function l(){return"devicePixelRatio"in window?window.devicePixelRatio:1}function s(){return window.innerHeight}function f(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function d(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function p(n){n.preventDefault&&n.preventDefault()}r.d(e,"d",function(){return S}),e.h=a,e.a=u,e.b=l,e.g=s,e.e=f,e.f=d,r.d(e,"l",function(){return E}),r.d(e,"j",function(){return U}),r.d(e,"k",function(){return C}),r.d(e,"c",function(){return R}),e.i=p;var b=r(5),g=(r.n(b),r(4)),h=(r.n(g),r(21)),v=(r.n(h),r(57)),m=(r.n(v),r(11)),y=(r.n(m),r(9)),w=(r.n(y),r(27)),x=(r.n(w),r(25)),O=(r.n(x),r(8)),j=(r.n(O),r(13)),S=(r.n(j),window.getComputedStyle.bind(window)),k={top:0,right:0,bottom:0,left:0,width:0,height:0},E=function(n){return function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"").split(/\s+/g).filter(function(n){return!!n}).forEach(function(r){return e[n](r)})}},U=E("add"),C=E("remove"),R=function(){function n(){t(this,n),c(this,"_all",new Set)}return i(n,[{key:"add",value:function(n,e,r,t){n.addEventListener(e,r,t);var o=function(){return n.removeEventListener(e,r,t)};return this._all.add(o),o}},{key:"remove",value:function(n){n(),this._all.delete(n)}},{key:"removeAll",value:function(){var n=this;this._all.forEach(function(e){return n.remove(e)})}}]),n}()},27:function(n,e,r){n.exports=r(3)(469)},295:function(n,e,r){"use strict";var t=r(334),o=(r.n(t),{serverUri:"https://hub.jetbrains.com",clientId:"81a0bffb-6d0f-4a38-b93a-0a4d1e567698"}),i=o.serverUri,c=o.clientId,a=window.location,u=a.origin,l=a.pathname,s=l.startsWith("/ring-ui/")?"".concat("/ring-ui/","/").concat("master","/index.html"):"/";e.a={reloadOnUserChange:!1,embeddedLogin:!0,serverUri:i,clientId:c,requestCredentials:"skip",redirectUri:u+s}},3:function(n,e){n.exports=vendor_lib},33:function(n,e,r){"use strict";var t=r(54),o=r.n(t),i=new o.a;i.sniff(),e.a=i},334:function(n,e,r){n.exports=r(3)(448)},4:function(n,e,r){n.exports=r(3)(453)},40:function(n,e,r){"use strict";function t(){var n=document.getElementsByTagName("base")[0];return n?n.href:void 0}function o(){var n=t(),e="".concat(window.location.protocol,"//").concat(window.location.host);return n?v.test(n)?n:e+n:e}function i(){return window.location.href.split("#")[0]}function c(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;if(-1===n.indexOf("http://")&&-1===n.indexOf("https://")&&0!==n.indexOf("/")){var r=e();if(r)return r+n}return n}function a(n,e){return n&&-1===e.indexOf("http://")&&-1===e.indexOf("https://")?n+e:e}function u(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;return e()&&("firefox"===h.a.browser.name||"edge"===h.a.browser.name||"chrome"===h.a.browser.name&&h.a.browser.version[0]>=49)?r()+n:String(n)}function l(n){function e(n){return decodeURIComponent(n.replace(/\+/g," "))}if(null==n)return{};for(var r,t=/([^&;=]+)=?([^&;]*)/g,o={};null!=(r=t.exec(n));)o[e(r[1])]=e(r[2]);return o}function s(n,e){var r,t=-1===n.indexOf("?")?"?":"&",o=n,i=0;for(r in e)e.hasOwnProperty(r)&&null!=e[r]&&(o+=(0==i++?t:"&")+encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return o}function f(n){return 0===n.indexOf("data:")}e.e=o,e.f=c,e.b=a,e.c=u,e.d=l,e.a=s,e.g=f;var d=r(22),p=(r.n(d),r(17)),b=(r.n(p),r(25)),g=(r.n(b),r(42)),h=(r.n(g),r(33)),v=/^[a-z]+:\/\//i},42:function(n,e,r){n.exports=r(3)(425)},46:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var r=e.protocol+"//"+e.host,t=r+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o))return n;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:t+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},5:function(n,e,r){n.exports=r(3)(477)},54:function(n,e,r){n.exports=r(3)(265)},57:function(n,e,r){n.exports=r(3)(430)},6:function(n,e,r){n.exports=r(3)(61)},8:function(n,e,r){n.exports=r(3)(478)},9:function(n,e,r){n.exports=r(3)(90)}});