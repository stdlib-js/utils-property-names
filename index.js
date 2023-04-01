// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).propertyNames=r()}(this,(function(){"use strict";var t=void 0!==Object.getOwnPropertyNames,r=Object,e=r.getOwnPropertyNames;function n(t){return Object.keys(Object(t))}var o=void 0!==Object.keys;var u="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function i(){return u&&"symbol"==typeof Symbol.toStringTag}var f=Object.prototype.toString;var c=Object.prototype.hasOwnProperty;function l(t,r){return null!=t&&c.call(t,r)}var a="function"==typeof Symbol?Symbol.toStringTag:"";var p,s=i()?function(t){var r,e,n;if(null==t)return f.call(t);e=t[a],r=l(t,a);try{t[a]=void 0}catch(r){return f.call(t)}return n=f.call(t),r?t[a]=e:delete t[a],n}:function(t){return f.call(t)};function y(t){return"[object Arguments]"===s(t)}p=function(){return y(arguments)}();var b=p,v="function"==typeof Object.defineProperty?Object.defineProperty:null;var g,d=Object.defineProperty,m=Object.prototype,h=m.toString,j=m.__defineGetter__,w=m.__defineSetter__,O=m.__lookupGetter__,_=m.__lookupSetter__;g=function(){try{return v({},"x",{}),!0}catch(t){return!1}}()?d:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===h.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===h.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(O.call(t,r)||_.call(t,r)?(n=t.__proto__,t.__proto__=m,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&j&&j.call(t,r,e.get),i&&w&&w.call(t,r,e.set),t};var S=g;function E(t,r,e){S(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function P(t){return"string"==typeof t}var I=String.prototype.valueOf;var T=i();function A(t){return"object"==typeof t&&(t instanceof String||(T?function(t){try{return I.call(t),!0}catch(t){return!1}}(t):"[object String]"===s(t)))}function N(t){return P(t)||A(t)}function k(t){return"number"==typeof t}E(N,"isPrimitive",P),E(N,"isObject",A);var x=Number,B=x.prototype.toString;var V=i();function F(t){return"object"==typeof t&&(t instanceof x||(V?function(t){try{return B.call(t),!0}catch(t){return!1}}(t):"[object Number]"===s(t)))}function L(t){return k(t)||F(t)}function G(t){return t!=t}function Y(t){return k(t)&&G(t)}function C(t){return F(t)&&G(t.valueOf())}function M(t){return Y(t)||C(t)}E(L,"isPrimitive",k),E(L,"isObject",F),E(M,"isPrimitive",Y),E(M,"isObject",C);var X=Number.POSITIVE_INFINITY,H=x.NEGATIVE_INFINITY,W=Math.floor;function D(t){return W(t)===t}function R(t){return t<X&&t>H&&D(t)}function U(t){return k(t)&&R(t)}function q(t){return F(t)&&R(t.valueOf())}function z(t){return U(t)||q(t)}E(z,"isPrimitive",U),E(z,"isObject",q);var J=Object.prototype.propertyIsEnumerable;var K=!J.call("beep","0");function Q(t,r){var e;return null!=t&&(!(e=J.call(t,r))&&K&&N(t)?!Y(r=+r)&&U(r)&&r>=0&&r<t.length:e)}var Z=Array.isArray?Array.isArray:function(t){return"[object Array]"===s(t)};var $=b?y:function(t){return null!==t&&"object"==typeof t&&!Z(t)&&"number"==typeof t.length&&D(t.length)&&t.length>=0&&t.length<=4294967295&&l(t,"callee")&&!Q(t,"callee")},tt=Array.prototype.slice;function rt(t){return null!==t&&"object"==typeof t}E(rt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!Z(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(rt));var et=Q((function(){}),"prototype"),nt=!Q({toString:null},"toString");function ot(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&D(t.length)&&t.length>=0&&t.length<=9007199254740991}function ut(t,r,e){var n,o;if(!ot(t)&&!P(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!U(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(M(r)){for(;o<n;o++)if(M(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var it=/./;function ft(t){return"boolean"==typeof t}var ct=Boolean.prototype.toString;var lt=i();function at(t){return"object"==typeof t&&(t instanceof Boolean||(lt?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===s(t)))}function pt(t){return ft(t)||at(t)}function st(){return new Function("return this;")()}E(pt,"isPrimitive",ft),E(pt,"isObject",at);var yt="object"==typeof self?self:null,bt="object"==typeof window?window:null,vt="object"==typeof global?global:null;var gt=function(t){if(arguments.length){if(!ft(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return st()}if(yt)return yt;if(bt)return bt;if(vt)return vt;throw new Error("unexpected error. Unable to resolve global object.")}(),dt=gt.document&&gt.document.childNodes,mt=Int8Array;function ht(){return/^\s*function\s*([^(]*)/i}var jt=/^\s*function\s*([^(]*)/i;function wt(t){var r,e,n,o;if(("Object"===(e=s(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=jt.exec(n.toString()))return r[1]}return rt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}E(ht,"REGEXP",jt);var Ot="function"==typeof it||"object"==typeof mt||"function"==typeof dt?function(t){return wt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?wt(t).toLowerCase():r};function _t(t){return t.constructor&&t.constructor.prototype===t}var St=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Et="undefined"==typeof window?void 0:window;var Pt=function(){var t;if("undefined"===Ot(Et))return!1;for(t in Et)try{-1===ut(St,t)&&l(Et,t)&&null!==Et[t]&&"object"===Ot(Et[t])&&_t(Et[t])}catch(t){return!0}return!1}(),It="undefined"!=typeof window;var Tt,At=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Tt=o?function(){return 2!==(n(arguments)||"").length}(1,2)?function(t){return $(t)?n(tt.call(t)):n(t)}:n:function(t){var r,e,n,o,u,i,f;if(o=[],$(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!l(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!rt(t))return o;e=et&&n}for(u in t)e&&"prototype"===u||!l(t,u)||o.push(String(u));if(nt)for(r=function(t){if(!1===It&&!Pt)return _t(t);try{return _t(t)}catch(t){return!1}}(t),f=0;f<At.length;f++)i=At[f],r&&"constructor"===i||!l(t,i)||o.push(String(i));return o};var Nt=Tt;return t?function(t){return e(r(t))}:function(t){return Nt(r(t))}}));
//# sourceMappingURL=index.js.map
