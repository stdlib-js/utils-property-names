// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=void 0!==Object.getOwnPropertyNames,e=Object,t=e.getOwnPropertyNames;function n(r){return Object.keys(Object(r))}var i=void 0!==Object.keys;function o(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var a=o();function c(){return a&&"symbol"==typeof Symbol.toStringTag}var u=Object.prototype.toString;var l=Object.prototype.hasOwnProperty;function s(r,e){return null!=r&&l.call(r,e)}var f="function"==typeof Symbol?Symbol:void 0,p="function"==typeof f?f.toStringTag:"";var g=c()?function(r){var e,t,n;if(null==r)return u.call(r);t=r[p],e=s(r,p);try{r[p]=void 0}catch(e){return u.call(r)}return n=u.call(r),e?r[p]=t:delete r[p],n}:function(r){return u.call(r)};function d(r){return"[object Arguments]"===g(r)}var h=function(){return d(arguments)}(),b="function"==typeof Object.defineProperty?Object.defineProperty:null;var y=Object.defineProperty;function v(r){return"number"==typeof r}function w(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function m(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+w(i):w(i)+r,n&&(r="-"+r)),r}var j=String.prototype.toLowerCase,_=String.prototype.toUpperCase;function S(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!v(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=m(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=m(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===_.call(r.specifier)?_.call(t):j.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function E(r){return"string"==typeof r}var O=Math.abs,k=String.prototype.toLowerCase,I=String.prototype.toUpperCase,x=String.prototype.replace,T=/e\+(\d)$/,A=/e-(\d)$/,V=/^(\d+)$/,P=/^(\d+)e/,F=/\.0$/,N=/\.0*e/,$=/(\..*[^0])0*e/;function C(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!v(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":O(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=x.call(t,$,"$1e"),t=x.call(t,N,"e"),t=x.call(t,F,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=x.call(t,T,"e+0$1"),t=x.call(t,A,"e-0$1"),r.alternate&&(t=x.call(t,V,"$1."),t=x.call(t,P,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===I.call(r.specifier)?I.call(t):k.call(t)}function R(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function G(r,e,t){var n=e-r.length;return n<0?r:r=t?r+R(n):R(n)+r}var L=String.fromCharCode,W=isNaN,Z=Array.isArray;function B(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function X(r){var e,t,n,i,o,a,c,u,l;if(!Z(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(E(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=B(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,W(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,W(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=S(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!W(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=W(o)?String(n.arg):L(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=C(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=m(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=G(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Y(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,i;for(t=[],i=0,n=M.exec(r);n;)(e=r.slice(i,M.lastIndex-n[0].length)).length&&t.push(e),t.push(Y(n)),i=M.lastIndex,n=M.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function z(r){return"string"==typeof r}function H(r){var e,t;if(!z(r))throw new TypeError(H("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[U(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return X.apply(null,e)}var D,q=Object.prototype,J=q.toString,K=q.__defineGetter__,Q=q.__defineSetter__,rr=q.__lookupGetter__,er=q.__lookupSetter__;D=function(){try{return b({},"x",{}),!0}catch(r){return!1}}()?y:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===J.call(r))throw new TypeError(H("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===J.call(t))throw new TypeError(H("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(rr.call(r,e)||er.call(r,e)?(n=r.__proto__,r.__proto__=q,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&K&&K.call(r,e,t.get),a&&Q&&Q.call(r,e,t.set),r};var tr=D;function nr(r,e,t){tr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ir(r){return"string"==typeof r}var or=String.prototype.valueOf;var ar=c();function cr(r){return"object"==typeof r&&(r instanceof String||(ar?function(r){try{return or.call(r),!0}catch(r){return!1}}(r):"[object String]"===g(r)))}function ur(r){return ir(r)||cr(r)}function lr(r){return"number"==typeof r}nr(ur,"isPrimitive",ir),nr(ur,"isObject",cr);var sr=Number,fr=sr.prototype.toString;var pr=c();function gr(r){return"object"==typeof r&&(r instanceof sr||(pr?function(r){try{return fr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===g(r)))}function dr(r){return lr(r)||gr(r)}function hr(r){return r!=r}function br(r){return lr(r)&&hr(r)}function yr(r){return gr(r)&&hr(r.valueOf())}function vr(r){return br(r)||yr(r)}nr(dr,"isPrimitive",lr),nr(dr,"isObject",gr),nr(vr,"isPrimitive",br),nr(vr,"isObject",yr);var wr=Number.POSITIVE_INFINITY,mr=sr.NEGATIVE_INFINITY,jr=Math.floor;function _r(r){return jr(r)===r}function Sr(r){return r<wr&&r>mr&&_r(r)}function Er(r){return lr(r)&&Sr(r)}function Or(r){return gr(r)&&Sr(r.valueOf())}function kr(r){return Er(r)||Or(r)}nr(kr,"isPrimitive",Er),nr(kr,"isObject",Or);var Ir=Object.prototype.propertyIsEnumerable;var xr=!Ir.call("beep","0");var Tr,Ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===g(r)};Tr=h?d:function(r){return null!==r&&"object"==typeof r&&!Ar(r)&&"number"==typeof r.length&&_r(r.length)&&r.length>=0&&r.length<=4294967295&&s(r,"callee")&&!function(r,e){var t;return null!=r&&(!(t=Ir.call(r,e))&&xr&&ur(r)?!br(e=+e)&&Er(e)&&e>=0&&e<r.length:t)}(r,"callee")};var Vr=Tr,Pr=Array.prototype.slice;var Fr="function"==typeof Object.defineProperty?Object.defineProperty:null;var Nr=Object.defineProperty;function $r(r){return"number"==typeof r}function Cr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Rr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Cr(i):Cr(i)+r,n&&(r="-"+r)),r}var Gr=String.prototype.toLowerCase,Lr=String.prototype.toUpperCase;function Wr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!$r(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Rr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Rr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Lr.call(r.specifier)?Lr.call(t):Gr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Zr(r){return"string"==typeof r}var Br=Math.abs,Xr=String.prototype.toLowerCase,Mr=String.prototype.toUpperCase,Yr=String.prototype.replace,Ur=/e\+(\d)$/,zr=/e-(\d)$/,Hr=/^(\d+)$/,Dr=/^(\d+)e/,qr=/\.0$/,Jr=/\.0*e/,Kr=/(\..*[^0])0*e/;function Qr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!$r(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Br(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Yr.call(t,Kr,"$1e"),t=Yr.call(t,Jr,"e"),t=Yr.call(t,qr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Yr.call(t,Ur,"e+0$1"),t=Yr.call(t,zr,"e-0$1"),r.alternate&&(t=Yr.call(t,Hr,"$1."),t=Yr.call(t,Dr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Mr.call(r.specifier)?Mr.call(t):Xr.call(t)}function re(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function ee(r,e,t){var n=e-r.length;return n<0?r:r=t?r+re(n):re(n)+r}var te=String.fromCharCode,ne=isNaN,ie=Array.isArray;function oe(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function ae(r){var e,t,n,i,o,a,c,u,l;if(!ie(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(Zr(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=oe(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,ne(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,ne(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Wr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!ne(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ne(o)?String(n.arg):te(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Qr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Rr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ee(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var ce=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ue(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function le(r){var e,t,n,i;for(t=[],i=0,n=ce.exec(r);n;)(e=r.slice(i,ce.lastIndex-n[0].length)).length&&t.push(e),t.push(ue(n)),i=ce.lastIndex,n=ce.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function se(r){return"string"==typeof r}function fe(r){var e,t;if(!se(r))throw new TypeError(fe("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[le(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return ae.apply(null,e)}var pe,ge=Object.prototype,de=ge.toString,he=ge.__defineGetter__,be=ge.__defineSetter__,ye=ge.__lookupGetter__,ve=ge.__lookupSetter__;pe=function(){try{return Fr({},"x",{}),!0}catch(r){return!1}}()?Nr:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===de.call(r))throw new TypeError(fe("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===de.call(t))throw new TypeError(fe("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(ye.call(r,e)||ve.call(r,e)?(n=r.__proto__,r.__proto__=ge,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&he&&he.call(r,e,t.get),a&&be&&be.call(r,e,t.set),r};var we=pe;function me(r,e,t){we(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var je=o();function _e(){return je&&"symbol"==typeof Symbol.toStringTag}var Se=Object.prototype.toString;var Ee="function"==typeof f?f.toStringTag:"";var Oe=_e()?function(r){var e,t,n;if(null==r)return Se.call(r);t=r[Ee],e=s(r,Ee);try{r[Ee]=void 0}catch(e){return Se.call(r)}return n=Se.call(r),e?r[Ee]=t:delete r[Ee],n}:function(r){return Se.call(r)};var ke=Array.isArray?Array.isArray:function(r){return"[object Array]"===Oe(r)};function Ie(r){return null!==r&&"object"==typeof r}function xe(r){return"string"==typeof r}me(Ie,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(fe("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!ke(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ie));var Te=String.prototype.valueOf;var Ae=_e();function Ve(r){return"object"==typeof r&&(r instanceof String||(Ae?function(r){try{return Te.call(r),!0}catch(r){return!1}}(r):"[object String]"===Oe(r)))}function Pe(r){return xe(r)||Ve(r)}function Fe(r){return"number"==typeof r}me(Pe,"isPrimitive",xe),me(Pe,"isObject",Ve);var Ne=Number,$e=Ne.prototype.toString;var Ce=_e();function Re(r){return"object"==typeof r&&(r instanceof Ne||(Ce?function(r){try{return $e.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Oe(r)))}function Ge(r){return Fe(r)||Re(r)}function Le(r){return r!=r}function We(r){return Fe(r)&&Le(r)}function Ze(r){return Re(r)&&Le(r.valueOf())}function Be(r){return We(r)||Ze(r)}me(Ge,"isPrimitive",Fe),me(Ge,"isObject",Re),me(Be,"isPrimitive",We),me(Be,"isObject",Ze);var Xe=Number.POSITIVE_INFINITY,Me=Ne.NEGATIVE_INFINITY,Ye=Math.floor;function Ue(r){return Ye(r)===r}function ze(r){return r<Xe&&r>Me&&Ue(r)}function He(r){return Fe(r)&&ze(r)}function De(r){return Re(r)&&ze(r.valueOf())}function qe(r){return He(r)||De(r)}me(qe,"isPrimitive",He),me(qe,"isObject",De);var Je=Object.prototype.propertyIsEnumerable;var Ke=!Je.call("beep","0");function Qe(r,e){var t;return null!=r&&(!(t=Je.call(r,e))&&Ke&&Pe(r)?!We(e=+e)&&He(e)&&e>=0&&e<r.length:t)}var rt=Qe((function(){}),"prototype"),et=!Qe({toString:null},"toString");function tt(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Ue(r.length)&&r.length>=0&&r.length<=9007199254740991}function nt(r,e,t){var n,i;if(!tt(r)&&!xe(r))throw new TypeError(fe("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!He(t))throw new TypeError(fe("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Be(e)){for(;i<n;i++)if(Be(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var it=/./;function ot(r){return"boolean"==typeof r}var at=Boolean,ct=Boolean.prototype.toString;var ut=_e();function lt(r){return"object"==typeof r&&(r instanceof at||(ut?function(r){try{return ct.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Oe(r)))}function st(r){return ot(r)||lt(r)}function ft(){return new Function("return this;")()}me(st,"isPrimitive",ot),me(st,"isObject",lt);var pt="object"==typeof self?self:null,gt="object"==typeof window?window:null,dt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ht="object"==typeof dt?dt:null,bt="object"==typeof globalThis?globalThis:null;var yt=function(r){if(arguments.length){if(!ot(r))throw new TypeError(fe("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ft()}if(bt)return bt;if(pt)return pt;if(gt)return gt;if(ht)return ht;throw new Error("unexpected error. Unable to resolve global object.")}(),vt=yt.document&&yt.document.childNodes,wt=Int8Array;function mt(){return/^\s*function\s*([^(]*)/i}var jt=/^\s*function\s*([^(]*)/i;function _t(r){var e,t,n,i;if(("Object"===(t=Oe(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=jt.exec(n.toString()))return e[1]}return Ie(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}me(mt,"REGEXP",jt);var St="function"==typeof it||"object"==typeof wt||"function"==typeof vt?function(r){return _t(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?_t(r).toLowerCase():e};function Et(r){return r.constructor&&r.constructor.prototype===r}var Ot=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],kt="undefined"==typeof window?void 0:window;var It=function(){var r;if("undefined"===St(kt))return!1;for(r in kt)try{-1===nt(Ot,r)&&s(kt,r)&&null!==kt[r]&&"object"===St(kt[r])&&Et(kt[r])}catch(r){return!0}return!1}(),xt="undefined"!=typeof window;var Tt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var At=i?function(){return 2!==(n(arguments)||"").length}(1,2)?function(r){return Vr(r)?n(Pr.call(r)):n(r)}:n:function(r){var e,t,n,i,o,a,c;if(i=[],Vr(r)){for(c=0;c<r.length;c++)i.push(c.toString());return i}if("string"==typeof r){if(r.length>0&&!s(r,"0"))for(c=0;c<r.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!Ie(r))return i;t=rt&&n}for(o in r)t&&"prototype"===o||!s(r,o)||i.push(String(o));if(et)for(e=function(r){if(!1===xt&&!It)return Et(r);try{return Et(r)}catch(r){return!1}}(r),c=0;c<Tt.length;c++)a=Tt[c],e&&"constructor"===a||!s(r,a)||i.push(String(a));return i};var Vt=r?function(r){return t(e(r))}:function(r){return At(e(r))};export{Vt as default};
//# sourceMappingURL=mod.js.map