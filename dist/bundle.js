!function(n){function r(r){for(var t,o,i=r[0],a=r[1],c=0,u=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(e,o)&&e[o]&&u.push(e[o][0]),e[o]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t]);for(s&&s(r);u.length;)u.shift()()}var t={},e={0:0};function o(r){if(t[r])return t[r].exports;var e=t[r]={i:r,l:!1,exports:{}};return n[r].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(n){var r=[],t=e[n];if(0!==t)if(t)r.push(t[2]);else{var i=new Promise((function(r,o){t=e[n]=[r,o]}));r.push(t[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(n){return o.p+""+n+".bundle.js"}(n);var s=new Error;a=function(r){c.onerror=c.onload=null,clearTimeout(u);var t=e[n];if(0!==t){if(t){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,t[1](s)}e[n]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(r)},o.m=n,o.c=t,o.d=function(n,r,t){o.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,r){if(1&r&&(n=o(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var e in n)o.d(t,e,function(r){return n[r]}.bind(null,e));return t},o.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(r,"a",r),r},o.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},o.p="",o.oe=function(n){throw console.error(n),n};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=r,i=i.slice();for(var c=0;c<i.length;c++)r(i[c]);var s=a;o(o.s=2)}([function(n,r,t){"use strict";var e,o=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},i=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}(),a=[];function c(n){for(var r=-1,t=0;t<a.length;t++)if(a[t].identifier===n){r=t;break}return r}function s(n,r){for(var t={},e=[],o=0;o<n.length;o++){var i=n[o],s=r.base?i[0]+r.base:i[0],u=t[s]||0,l="".concat(s," ").concat(u);t[s]=u+1;var p=c(l),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(d)):a.push({identifier:l,updater:g(d,r),references:1}),e.push(l)}return e}function u(n){var r=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var o=t.nc;o&&(e.nonce=o)}if(Object.keys(e).forEach((function(n){r.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var l,p=(l=[],function(n,r){return l[n]=r,l.filter(Boolean).join("\n")});function d(n,r,t,e){var o=t?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=p(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function f(n,r,t){var e=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var h=null,m=0;function g(n,r){var t,e,o;if(r.singleton){var i=m++;t=h||(h=u(r)),e=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=u(r),e=f.bind(null,t,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var t=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var e=0;e<t.length;e++){var o=c(t[e]);a[o].references--}for(var i=s(n,r),u=0;u<t.length;u++){var l=c(t[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},function(n,r,t){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=function(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var o=(a=e,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,s;return[t].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(n,t,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);e&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),r.push(s))}},r}},function(n,r,t){"use strict";t.r(r);t(3),t(5),t(7);t.e(1).then(t.t.bind(null,9,3)).then((function(n){var r=n.default;console.log(r);var t=r.restaurants,e="";t.forEach((function(n){e+='\n        <div class="post-item">\n            <img class="post-item__thumb" src="'.concat(n.pictureId,'" alt="').concat(n.name,'" title="').concat(n.name,'">\n            <div class="city">').concat(n.city,'</div>\n            <div class="post-item__content">\n                <p class="post-item__rating">\n                    Rating : \n                    <a href="#" class="post_item__rating">').concat(n.rating,'</a>\n                </p>\n                <h1 class="post-item__title"><a href="#">').concat(n.name,'</a></h1>\n                <div class="post-item__description">').concat(n.description.slice(0,150),"...</div>\n            </div>\n        </div>\n        ")})),document.querySelector("#meals").innerHTML=e}));var e=document.querySelector("#menu"),o=document.querySelector(".hero"),i=document.querySelector("main"),a=document.querySelector("#drawer");e.addEventListener("click",(function(n){a.classList.toggle("open"),n.stopPropagation()})),o.addEventListener("click",(function(){a.classList.remove("open")})),i.addEventListener("click",(function(){a.classList.remove("open")}))},function(n,r,t){(function(n){function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var t=function(n){"use strict";var t=Object.prototype,e=t.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(n,r,t){return Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),n[r]}try{s({},"")}catch(n){s=function(n,r,t){return n[r]=t}}function u(n,r,t,e){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new L(e||[]);return i._invoke=function(n,r,t){var e="suspendedStart";return function(o,i){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===o)throw i;return E()}for(t.method=o,t.arg=i;;){var a=t.delegate;if(a){var c=w(a,t);if(c){if(c===p)continue;return c}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===e)throw e="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);e="executing";var s=l(n,r,t);if("normal"===s.type){if(e=t.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:t.done}}"throw"===s.type&&(e="completed",t.method="throw",t.arg=s.arg)}}}(n,t,a),i}function l(n,r,t){try{return{type:"normal",arg:n.call(r,t)}}catch(n){return{type:"throw",arg:n}}}n.wrap=u;var p={};function d(){}function f(){}function h(){}var m={};s(m,i,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(j([])));v&&v!==t&&e.call(v,i)&&(m=v);var y=h.prototype=d.prototype=Object.create(m);function b(n){["next","throw","return"].forEach((function(r){s(n,r,(function(n){return this._invoke(r,n)}))}))}function x(n,t){var o;this._invoke=function(i,a){function c(){return new t((function(o,c){!function o(i,a,c,s){var u=l(n[i],n,a);if("throw"!==u.type){var p=u.arg,d=p.value;return d&&"object"===r(d)&&e.call(d,"__await")?t.resolve(d.__await).then((function(n){o("next",n,c,s)}),(function(n){o("throw",n,c,s)})):t.resolve(d).then((function(n){p.value=n,c(p)}),(function(n){return o("throw",n,c,s)}))}s(u.arg)}(i,a,o,c)}))}return o=o?o.then(c,c):c()}}function w(n,r){var t=n.iterator[r.method];if(void 0===t){if(r.delegate=null,"throw"===r.method){if(n.iterator.return&&(r.method="return",r.arg=void 0,w(n,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var e=l(t,n.iterator,r.arg);if("throw"===e.type)return r.method="throw",r.arg=e.arg,r.delegate=null,p;var o=e.arg;return o?o.done?(r[n.resultName]=o.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function _(n){var r={tryLoc:n[0]};1 in n&&(r.catchLoc=n[1]),2 in n&&(r.finallyLoc=n[2],r.afterLoc=n[3]),this.tryEntries.push(r)}function k(n){var r=n.completion||{};r.type="normal",delete r.arg,n.completion=r}function L(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(_,this),this.reset(!0)}function j(n){if(n){var r=n[i];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var t=-1,o=function r(){for(;++t<n.length;)if(e.call(n,t))return r.value=n[t],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=h,s(y,"constructor",h),s(h,"constructor",f),f.displayName=s(h,c,"GeneratorFunction"),n.isGeneratorFunction=function(n){var r="function"==typeof n&&n.constructor;return!!r&&(r===f||"GeneratorFunction"===(r.displayName||r.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,h):(n.__proto__=h,s(n,c,"GeneratorFunction")),n.prototype=Object.create(y),n},n.awrap=function(n){return{__await:n}},b(x.prototype),s(x.prototype,a,(function(){return this})),n.AsyncIterator=x,n.async=function(r,t,e,o,i){void 0===i&&(i=Promise);var a=new x(u(r,t,e,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},b(y),s(y,c,"Generator"),s(y,i,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var r=[];for(var t in n)r.push(t);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=j,L.prototype={constructor:L,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!n)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function t(t,e){return a.type="throw",a.arg=n,r.next=t,e&&(r.method="next",r.arg=void 0),!!e}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return t("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return t(i.catchLoc,!0);if(this.prev<i.finallyLoc)return t(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return t(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return t(i.finallyLoc)}}}},abrupt:function(n,r){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(n,r){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&r&&(this.next=r),p},finish:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),k(t),p}},catch:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===n){var e=t.completion;if("throw"===e.type){var o=e.arg;k(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,t){return this.delegate={iterator:j(n),resultName:r,nextLoc:t},"next"===this.method&&(this.arg=void 0),p}},n}("object"===r(n)?n.exports:{});try{regeneratorRuntime=t}catch(n){"object"===("undefined"==typeof globalThis?"undefined":r(globalThis))?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}).call(this,t(4)(n))},function(n,r){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},function(n,r,t){var e=t(0),o=t(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};e(o,i);n.exports=o.locals||{}},function(n,r,t){(r=t(1)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap);"]),r.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=McLaren&display=swap);"]),r.push([n.i,'* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: "McLaren", cursive;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  scroll-behavior: smooth;\r\n  background-color: #032329;\r\n}\r\n\r\nbody {\r\n  font-size: 12px;\r\n}\r\n\r\n.header {\r\n  min-height: 56px;\r\n  transition: min-height 0.3s;\r\n  background-color: #032329;\r\n}\r\n\r\n.header__inner {\r\n  width: 100%;\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.header__title {\r\n  margin: 0.5em 0.25em;\r\n  display: inline-block;\r\n  color: white;\r\n  font-size: 50px;\r\n  padding: 20px;\r\n  font-family: "Luckiest Guy", cursive;\r\n}\r\n\r\n.header__menu {\r\n  font-size: 32px;\r\n  margin: 10px auto;\r\n  display: block;\r\n  width: 30px;\r\n  color: white;\r\n}\r\n\r\n.nav {\r\n  width: 100%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  text-align: center;\r\n  background-color: #c4b9bd;\r\n}\r\n\r\n.nav__list {\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.nav__item {\r\n  box-sizing: border-box;\r\n  display: inline-block;\r\n  width: 24%;\r\n  text-align: center;\r\n  line-height: 24px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.nav a {\r\n  display: inline-block;\r\n  padding: 1.3em;\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n  font-family: "Luckiest Guy", cursive;\r\n  color: rgb(0, 0, 0);\r\n}\r\n\r\n.nav a:hover {\r\n  text-decoration: none;\r\n  color: gold;\r\n}\r\n\r\n.hero {\r\n  display: flex;\r\n  align-items: center;\r\n  min-height: 380px;\r\n  width: 100%;\r\n  text-align: center;\r\n  background-image: url("/images/heros/hero.jpg");\r\n  background-position: center;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n}\r\n\r\n.content {\r\n  padding: 32px;\r\n}\r\n\r\n.latest {\r\n  width: 100%;\r\n  margin: 60px auto;\r\n  text-align: center;\r\n  background-color: #8e806a;\r\n  padding: 20px 20px 10px 20px;\r\n  border-radius: 20px;\r\n}\r\n\r\n.latest h1 {\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  color: white;\r\n}\r\n\r\n.posts {\r\n  margin: 32px auto auto;\r\n  text-align: left;\r\n  display: grid;\r\n}\r\n\r\n.post-item {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.post-item__content {\r\n  padding: 16px 32px 32px 32px;\r\n}\r\n\r\n.post-item__thumb {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.post-item__title {\r\n  font-weight: 500;\r\n  font-size: 18px;\r\n  margin-top: 16px;\r\n  transition: 0.3s opacity;\r\n}\r\n\r\n.post-item__rating {\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.post-item__title:hover {\r\n  font-weight: bolder;\r\n}\r\n\r\n.post-item__title a {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n.post-item__description {\r\n  margin-top: 16px;\r\n  font-size: 14px;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.city {\r\n  position: absolute;\r\n  top: 8px;\r\n  left: 16px;\r\n  border-radius: 5px;\r\n  background-color: #00bbff;\r\n  padding: 5px 10px 5px;\r\n  color: rgb(0, 0, 0);\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  margin: 10px;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  text-align: center;\r\n  background-color: #c4b9bd;\r\n  font-size: 20px;\r\n}\r\n\r\nfooter p {\r\n  display: inline-block;\r\n  padding: 25px;\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.makan {\r\n  font-family: "Luckiest Guy", cursive;\r\n}\r\n\r\n.skip-link {\r\n  position: absolute;\r\n  top: -100px;\r\n  left: 0;\r\n  background-color: #bf1722;\r\n  color: white;\r\n  padding: 10px;\r\n  font-size: 20px;\r\n  z-index: 100;\r\n  text-decoration: none;\r\n}\r\n\r\n.skip-link:focus {\r\n  top: 100px;\r\n}',""]),n.exports=r},function(n,r,t){var e=t(0),o=t(8);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};e(o,i);n.exports=o.locals||{}},function(n,r,t){(r=t(1)(!1)).push([n.i,".posts {\r\n  display: grid;\r\n  grid-row-gap: 16px;\r\n}\r\n\r\n@media screen and (max-width: 499px) {\r\n  .nav {\r\n    z-index: 10;\r\n    background-color: #fff;\r\n    width: 300px;\r\n    position: absolute;\r\n\r\n    /* This trasform moves the drawer off canvas. */\r\n    -webkit-transform: translate(-300px, 0);\r\n    transform: translate(-300px, 0);\r\n\r\n    /* Optionally, we animate the drawer. */\r\n    transition: transform 0.3s ease;\r\n  }\r\n\r\n  .open {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\r\n    background-color: #c4b9bd;\r\n  }\r\n\r\n  .nav__item {\r\n    display: list-item;\r\n    border-bottom: 1px solid #e0e0e0;\r\n    width: 100%;\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  .header__menu {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n  .post-item__content {\r\n    padding: 16px 32px 32px 32px;\r\n  }\r\n\r\n  .post-item__title {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .post-item__description {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 700px) {\r\n  .posts {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-column-gap: 10px;\r\n    grid-row-gap: 16px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n  .nav__list {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n  .posts {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  main {\r\n    max-width: 1200px;\r\n  }\r\n}",""]),n.exports=r}]);