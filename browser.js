// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).propertyNames=e()}(this,(function(){"use strict";var t=void 0!==Object.getOwnPropertyNames,e=Object,r=e.getOwnPropertyNames;function n(t){return Object.keys(Object(t))}var o=void 0!==Object.keys;var i="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function u(){return i&&"symbol"==typeof Symbol.toStringTag}var f=Object.prototype.toString;var c=Object.prototype.hasOwnProperty;function l(t,e){return null!=t&&c.call(t,e)}var a="function"==typeof Symbol?Symbol.toStringTag:"";var p,s=u()?function(t){var e,r,n;if(null==t)return f.call(t);r=t[a],e=l(t,a);try{t[a]=void 0}catch(e){return f.call(t)}return n=f.call(t),e?t[a]=r:delete t[a],n}:function(t){return f.call(t)};function y(t){return"[object Arguments]"===s(t)}p=function(){return y(arguments)}();var b=p,v="function"==typeof Object.defineProperty?Object.defineProperty:null;var g,d=Object.defineProperty,m=Object.prototype,h=m.toString,j=m.__defineGetter__,w=m.__defineSetter__,O=m.__lookupGetter__,_=m.__lookupSetter__;g=function(){try{return v({},"x",{}),!0}catch(t){return!1}}()?d:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===h.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===h.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(O.call(t,e)||_.call(t,e)?(n=t.__proto__,t.__proto__=m,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&j&&j.call(t,e,r.get),u&&w&&w.call(t,e,r.set),t};var S=g;function E(t,e,r){S(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function P(t){return"string"==typeof t}var I=String.prototype.valueOf;var T=u();function A(t){return"object"==typeof t&&(t instanceof String||(T?function(t){try{return I.call(t),!0}catch(t){return!1}}(t):"[object String]"===s(t)))}function N(t){return P(t)||A(t)}function k(t){return"number"==typeof t}E(N,"isPrimitive",P),E(N,"isObject",A);var x=Number,B=x.prototype.toString;var V=u();function F(t){return"object"==typeof t&&(t instanceof x||(V?function(t){try{return B.call(t),!0}catch(t){return!1}}(t):"[object Number]"===s(t)))}function L(t){return k(t)||F(t)}function G(t){return t!=t}function Y(t){return k(t)&&G(t)}function C(t){return F(t)&&G(t.valueOf())}function M(t){return Y(t)||C(t)}E(L,"isPrimitive",k),E(L,"isObject",F),E(M,"isPrimitive",Y),E(M,"isObject",C);var X=Number.POSITIVE_INFINITY,H=x.NEGATIVE_INFINITY,W=Math.floor;function D(t){return W(t)===t}function R(t){return t<X&&t>H&&D(t)}function U(t){return k(t)&&R(t)}function q(t){return F(t)&&R(t.valueOf())}function z(t){return U(t)||q(t)}E(z,"isPrimitive",U),E(z,"isObject",q);var J=Object.prototype.propertyIsEnumerable;var K=!J.call("beep","0");function Q(t,e){var r;return null!=t&&(!(r=J.call(t,e))&&K&&N(t)?!Y(e=+e)&&U(e)&&e>=0&&e<t.length:r)}var Z=Array.isArray?Array.isArray:function(t){return"[object Array]"===s(t)};var $=b?y:function(t){return null!==t&&"object"==typeof t&&!Z(t)&&"number"==typeof t.length&&D(t.length)&&t.length>=0&&t.length<=4294967295&&l(t,"callee")&&!Q(t,"callee")},tt=Array.prototype.slice;function et(t){return null!==t&&"object"==typeof t}E(et,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!Z(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(et));var rt=Q((function(){}),"prototype"),nt=!Q({toString:null},"toString");function ot(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&D(t.length)&&t.length>=0&&t.length<=9007199254740991}function it(t,e,r){var n,o;if(!ot(t)&&!P(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!U(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(M(e)){for(;o<n;o++)if(M(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var ut=/./;function ft(t){return"boolean"==typeof t}var ct=Boolean.prototype.toString;var lt=u();function at(t){return"object"==typeof t&&(t instanceof Boolean||(lt?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===s(t)))}function pt(t){return ft(t)||at(t)}function st(){return new Function("return this;")()}E(pt,"isPrimitive",ft),E(pt,"isObject",at);var yt="object"==typeof self?self:null,bt="object"==typeof window?window:null,vt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},gt="object"==typeof vt?vt:null;var dt=function(t){if(arguments.length){if(!ft(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return st()}if(yt)return yt;if(bt)return bt;if(gt)return gt;throw new Error("unexpected error. Unable to resolve global object.")}(),mt=dt.document&&dt.document.childNodes,ht=Int8Array;function jt(){return/^\s*function\s*([^(]*)/i}var wt=/^\s*function\s*([^(]*)/i;function Ot(t){var e,r,n,o;if(("Object"===(r=s(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=wt.exec(n.toString()))return e[1]}return et(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}E(jt,"REGEXP",wt);var _t="function"==typeof ut||"object"==typeof ht||"function"==typeof mt?function(t){return Ot(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Ot(t).toLowerCase():e};function St(t){return t.constructor&&t.constructor.prototype===t}var Et=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Pt="undefined"==typeof window?void 0:window;var It=function(){var t;if("undefined"===_t(Pt))return!1;for(t in Pt)try{-1===it(Et,t)&&l(Pt,t)&&null!==Pt[t]&&"object"===_t(Pt[t])&&St(Pt[t])}catch(t){return!0}return!1}(),Tt="undefined"!=typeof window;var At,Nt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];At=o?function(){return 2!==(n(arguments)||"").length}(1,2)?function(t){return $(t)?n(tt.call(t)):n(t)}:n:function(t){var e,r,n,o,i,u,f;if(o=[],$(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!l(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!et(t))return o;r=rt&&n}for(i in t)r&&"prototype"===i||!l(t,i)||o.push(String(i));if(nt)for(e=function(t){if(!1===Tt&&!It)return St(t);try{return St(t)}catch(t){return!1}}(t),f=0;f<Nt.length;f++)u=Nt[f],e&&"constructor"===u||!l(t,u)||o.push(String(u));return o};var kt=At;return t?function(t){return r(e(t))}:function(t){return kt(e(t))}}));
//# sourceMappingURL=browser.js.map
