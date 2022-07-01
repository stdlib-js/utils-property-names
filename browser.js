// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).propertyNames=t()}(this,(function(){"use strict";var r=void 0!==Object.getOwnPropertyNames,t=Object.getOwnPropertyNames;function e(r){var t=r.default;if("function"==typeof t){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var n=function(r){return Object.keys(Object(r))},o=n;var i=function(){return function(){return 2!==(o(arguments)||"").length}(1,2)},u=void 0!==Object.keys;var f=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var c=function(){return f&&"symbol"==typeof Symbol.toStringTag},a=Object.prototype.toString,l=a;var p=function(r){return l.call(r)},s=Object.prototype.hasOwnProperty;var v=function(r,t){return null!=r&&s.call(r,t)},y="function"==typeof Symbol?Symbol.toStringTag:"",b=v,g=y,d=a;var m=p,j=function(r){var t,e,n;if(null==r)return d.call(r);e=r[g],t=b(r,g);try{r[g]=void 0}catch(t){return d.call(r)}return n=d.call(r),t?r[g]=e:delete r[g],n},h=c()?j:m,w=h;var O,_=function(r){return"[object Arguments]"===w(r)},P=_;O=function(){return P(arguments)}();var S=O,E="function"==typeof Object.defineProperty?Object.defineProperty:null;var I=function(){try{return E({},"x",{}),!0}catch(r){return!1}},T=Object.defineProperty,A=Object.prototype,N=A.toString,k=A.__defineGetter__,x=A.__defineSetter__,B=A.__lookupGetter__,V=A.__lookupSetter__;var F=function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(B.call(r,t)||V.call(r,t)?(n=r.__proto__,r.__proto__=A,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&k&&k.call(r,t,e.get),u&&x&&x.call(r,t,e.set),r},G=T,L=F,M=I()?G:L;var X=function(r,t,e){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},Y=X;var C=function(r){return"string"==typeof r},D=String.prototype.valueOf;var H=h,R=function(r){try{return D.call(r),!0}catch(r){return!1}},W=c();var z=function(r){return"object"==typeof r&&(r instanceof String||(W?R(r):"[object String]"===H(r)))},U=C,q=z;var J=Y,K=function(r){return U(r)||q(r)},Q=z;J(K,"isPrimitive",C),J(K,"isObject",Q);var Z=K;var $=function(r){return"number"==typeof r},rr=Number,tr=rr.prototype.toString;var er=h,nr=rr,or=function(r){try{return tr.call(r),!0}catch(r){return!1}},ir=c();var ur=function(r){return"object"==typeof r&&(r instanceof nr||(ir?or(r):"[object Number]"===er(r)))},fr=$,cr=ur;var ar=Y,lr=function(r){return fr(r)||cr(r)},pr=ur;ar(lr,"isPrimitive",$),ar(lr,"isObject",pr);var sr=lr;var vr=function(r){return r!=r},yr=sr.isPrimitive,br=vr;var gr=function(r){return yr(r)&&br(r)},dr=sr.isObject,mr=vr;var jr=function(r){return dr(r)&&mr(r.valueOf())},hr=gr,wr=jr;var Or=Y,_r=function(r){return hr(r)||wr(r)},Pr=jr;Or(_r,"isPrimitive",gr),Or(_r,"isObject",Pr);var Sr=_r,Er=Number.POSITIVE_INFINITY,Ir=rr.NEGATIVE_INFINITY,Tr=Math.floor;var Ar=function(r){return Tr(r)===r},Nr=Er,kr=Ir,xr=Ar;var Br=function(r){return r<Nr&&r>kr&&xr(r)},Vr=sr.isPrimitive,Fr=Br;var Gr=function(r){return Vr(r)&&Fr(r)},Lr=sr.isObject,Mr=Br;var Xr=function(r){return Lr(r)&&Mr(r.valueOf())},Yr=Gr,Cr=Xr;var Dr=Y,Hr=function(r){return Yr(r)||Cr(r)},Rr=Xr;Dr(Hr,"isPrimitive",Gr),Dr(Hr,"isObject",Rr);var Wr,zr=Hr,Ur=Object.prototype.propertyIsEnumerable;Wr=!Ur.call("beep","0");var qr=Z,Jr=Sr.isPrimitive,Kr=zr.isPrimitive,Qr=Ur,Zr=Wr;var $r=function(r,t){var e;return null!=r&&(!(e=Qr.call(r,t))&&Zr&&qr(r)?!Jr(t=+t)&&Kr(t)&&t>=0&&t<r.length:e)},rt=$r,tt=h;var et=Array.isArray?Array.isArray:function(r){return"[object Array]"===tt(r)},nt=v,ot=rt,it=et,ut=Ar;var ft=S?_:function(r){return null!==r&&"object"==typeof r&&!it(r)&&"number"==typeof r.length&&ut(r.length)&&r.length>=0&&r.length<=4294967295&&nt(r,"callee")&&!ot(r,"callee")},ct=ft,at=n,lt=Array.prototype.slice;var pt=function(r){return ct(r)?at(lt.call(r)):at(r)},st=et;var vt=function(r){return null!==r&&"object"==typeof r};Y(vt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!st(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(vt));var yt=vt;var bt=rt((function(){}),"prototype"),gt=!rt({toString:null},"toString"),dt=Ar;var mt=Sr,jt=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&dt(r.length)&&r.length>=0&&r.length<=9007199254740991},ht=Z.isPrimitive,wt=zr.isPrimitive;var Ot=function(r,t,e){var n,o;if(!jt(r)&&!ht(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!wt(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(mt(t)){for(;o<n;o++)if(mt(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1},_t=Ot,Pt=/./;var St=function(r){return"boolean"==typeof r},Et=Boolean.prototype.toString;var It=h,Tt=function(r){try{return Et.call(r),!0}catch(r){return!1}},At=c();var Nt=function(r){return"object"==typeof r&&(r instanceof Boolean||(At?Tt(r):"[object Boolean]"===It(r)))},kt=St,xt=Nt;var Bt=Y,Vt=function(r){return kt(r)||xt(r)},Ft=Nt;Bt(Vt,"isPrimitive",St),Bt(Vt,"isObject",Ft);var Gt=Vt;var Lt=function(){return new Function("return this;")()},Mt="object"==typeof self?self:null,Xt="object"==typeof window?window:null,Yt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ct="object"==typeof Yt?Yt:null;module.exports=Ct;var Dt=Gt.isPrimitive,Ht=Lt,Rt=Mt,Wt=Xt,zt=e(Object.freeze({__proto__:null}));var Ut=function(r){if(arguments.length){if(!Dt(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Ht()}if(Rt)return Rt;if(Wt)return Wt;if(zt)return zt;throw new Error("unexpected error. Unable to resolve global object.")},qt=Ut(),Jt=qt.document&&qt.document.childNodes,Kt=Int8Array,Qt=Pt,Zt=Jt,$t=Kt;var re=function(){return"function"==typeof Qt||"object"==typeof $t||"function"==typeof Zt};var te=function(){return/^\s*function\s*([^(]*)/i},ee=te;Y(ee,"REGEXP",te());var ne=yt;var oe=h,ie=ee.REGEXP,ue=function(r){return ne(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var fe=function(r){var t,e,n;if(("Object"===(e=oe(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=ie.exec(n.toString()))return t[1]}return ue(r)?"Buffer":e},ce=fe;var ae=fe;var le=function(r){var t;return null===r?"null":"object"===(t=typeof r)?ce(r).toLowerCase():t},pe=function(r){return ae(r).toLowerCase()},se=re()?pe:le;var ve,ye=function(r){return r.constructor&&r.constructor.prototype===r},be="undefined"==typeof window?void 0:window,ge=v,de=_t,me=se,je=ye,he=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],we=be;ve=function(){var r;if("undefined"===me(we))return!1;for(r in we)try{-1===de(he,r)&&ge(we,r)&&null!==we[r]&&"object"===me(we[r])&&je(we[r])}catch(r){return!0}return!1}();var Oe="undefined"!=typeof window,_e=ve,Pe=ye,Se=Oe;var Ee=yt,Ie=v,Te=ft,Ae=bt,Ne=gt,ke=function(r){if(!1===Se&&!_e)return Pe(r);try{return Pe(r)}catch(r){return!1}},xe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Be=n,Ve=pt,Fe=function(r){var t,e,n,o,i,u,f;if(o=[],Te(r)){for(f=0;f<r.length;f++)o.push(f.toString());return o}if("string"==typeof r){if(r.length>0&&!Ie(r,"0"))for(f=0;f<r.length;f++)o.push(f.toString())}else{if(!1===(n="function"==typeof r)&&!Ee(r))return o;e=Ae&&n}for(i in r)e&&"prototype"===i||!Ie(r,i)||o.push(String(i));if(Ne)for(t=ke(r),f=0;f<xe.length;f++)u=xe[f],t&&"constructor"===u||!Ie(r,u)||o.push(String(u));return o},Ge=u?i()?Ve:Be:Fe;return r?function(r){return t(Object(r))}:function(r){return Ge(Object(r))}}));
//# sourceMappingURL=browser.js.map
