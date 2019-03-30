parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EwB5":[function(require,module,exports) {
module.exports=function(r){try{return!!r()}catch(t){return!0}};
},{}],"ATiS":[function(require,module,exports) {
var r={}.toString;module.exports=function(t){return r.call(t).slice(8,-1)};
},{}],"YWlL":[function(require,module,exports) {
var r=require("../internals/fails"),e=require("../internals/classof-raw"),t="".split;module.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(r){return"String"==e(r)?t.call(r,""):Object(r)}:Object;
},{"../internals/fails":"EwB5","../internals/classof-raw":"ATiS"}],"X1ih":[function(require,module,exports) {
module.exports=function(o){if(null==o)throw TypeError("Can't call method on "+o);return o};
},{}],"8gbu":[function(require,module,exports) {
var e=require("../internals/indexed-object"),r=require("../internals/require-object-coercible");module.exports=function(i){return e(r(i))};
},{"../internals/indexed-object":"YWlL","../internals/require-object-coercible":"X1ih"}],"nsr5":[function(require,module,exports) {
var o=Math.ceil,r=Math.floor;module.exports=function(t){return isNaN(t=+t)?0:(t>0?r:o)(t)};
},{}],"kktW":[function(require,module,exports) {
var e=require("../internals/to-integer"),r=Math.min;module.exports=function(n){return n>0?r(e(n),9007199254740991):0};
},{"../internals/to-integer":"nsr5"}],"vkqc":[function(require,module,exports) {
var r=require("../internals/to-integer"),e=Math.max,t=Math.min;module.exports=function(n,a){var i=r(n);return i<0?e(i+a,0):t(i,a)};
},{"../internals/to-integer":"nsr5"}],"EPeP":[function(require,module,exports) {
var e=require("../internals/to-indexed-object"),r=require("../internals/to-length"),n=require("../internals/to-absolute-index");module.exports=function(t){return function(i,o,u){var l,f=e(i),a=r(f.length),s=n(u,a);if(t&&o!=o){for(;a>s;)if((l=f[s++])!=l)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===o)return t||s||0;return!t&&-1}};
},{"../internals/to-indexed-object":"8gbu","../internals/to-length":"kktW","../internals/to-absolute-index":"vkqc"}],"pZgz":[function(require,module,exports) {
"use strict";var r=require("../internals/fails");module.exports=function(n,t){var u=[][n];return!u||!r(function(){u.call(null,t||function(){throw Error()},1)})};
},{"../internals/fails":"EwB5"}],"dtnl":[function(require,module,exports) {
module.exports="object"==typeof window&&window&&window.Math==Math?window:"object"==typeof self&&self&&self.Math==Math?self:Function("return this")();
},{}],"Bg53":[function(require,module,exports) {
module.exports=!require("../internals/fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});
},{"../internals/fails":"EwB5"}],"vcac":[function(require,module,exports) {
"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,t=e&&!r.call({1:2},1);exports.f=t?function(r){var t=e(this,r);return!!t&&t.enumerable}:r;
},{}],"GRUe":[function(require,module,exports) {
module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};
},{}],"qLNg":[function(require,module,exports) {
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};
},{}],"h+HI":[function(require,module,exports) {
var t=require("../internals/is-object");module.exports=function(r,e){if(!t(r))return r;var n,o;if(e&&"function"==typeof(n=r.toString)&&!t(o=n.call(r)))return o;if("function"==typeof(n=r.valueOf)&&!t(o=n.call(r)))return o;if(!e&&"function"==typeof(n=r.toString)&&!t(o=n.call(r)))return o;throw TypeError("Can't convert object to primitive value")};
},{"../internals/is-object":"qLNg"}],"kMHR":[function(require,module,exports) {
var r={}.hasOwnProperty;module.exports=function(e,n){return r.call(e,n)};
},{}],"piXh":[function(require,module,exports) {
var e=require("../internals/is-object"),r=require("../internals/global").document,t=e(r)&&e(r.createElement);module.exports=function(e){return t?r.createElement(e):{}};
},{"../internals/is-object":"qLNg","../internals/global":"dtnl"}],"XeMC":[function(require,module,exports) {
module.exports=!require("../internals/descriptors")&&!require("../internals/fails")(function(){return 7!=Object.defineProperty(require("../internals/document-create-element")("div"),"a",{get:function(){return 7}}).a});
},{"../internals/descriptors":"Bg53","../internals/fails":"EwB5","../internals/document-create-element":"piXh"}],"fYVJ":[function(require,module,exports) {
var e=require("../internals/descriptors"),r=require("../internals/object-property-is-enumerable"),i=require("../internals/create-property-descriptor"),t=require("../internals/to-indexed-object"),n=require("../internals/to-primitive"),s=require("../internals/has"),a=require("../internals/ie8-dom-define"),o=Object.getOwnPropertyDescriptor;exports.f=e?o:function(e,c){if(e=t(e),c=n(c,!0),a)try{return o(e,c)}catch(u){}if(s(e,c))return i(!r.f.call(e,c),e[c])};
},{"../internals/descriptors":"Bg53","../internals/object-property-is-enumerable":"vcac","../internals/create-property-descriptor":"GRUe","../internals/to-indexed-object":"8gbu","../internals/to-primitive":"h+HI","../internals/has":"kMHR","../internals/ie8-dom-define":"XeMC"}],"ajv4":[function(require,module,exports) {
var r=require("../internals/is-object");module.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e};
},{"../internals/is-object":"qLNg"}],"SXkY":[function(require,module,exports) {
var e=require("../internals/descriptors"),r=require("../internals/ie8-dom-define"),i=require("../internals/an-object"),t=require("../internals/to-primitive"),n=Object.defineProperty;exports.f=e?n:function(e,o,s){if(i(e),o=t(o,!0),i(s),r)try{return n(e,o,s)}catch(u){}if("get"in s||"set"in s)throw TypeError("Accessors not supported");return"value"in s&&(e[o]=s.value),e};
},{"../internals/descriptors":"Bg53","../internals/ie8-dom-define":"XeMC","../internals/an-object":"ajv4","../internals/to-primitive":"h+HI"}],"GCcg":[function(require,module,exports) {
var r=require("../internals/object-define-property"),e=require("../internals/create-property-descriptor");module.exports=require("../internals/descriptors")?function(t,n,i){return r.f(t,n,e(1,i))}:function(r,e,t){return r[e]=t,r};
},{"../internals/object-define-property":"SXkY","../internals/create-property-descriptor":"GRUe","../internals/descriptors":"Bg53"}],"SNLP":[function(require,module,exports) {

var r=require("../internals/global"),e=require("../internals/hide");module.exports=function(n,t){try{e(r,n,t)}catch(i){r[n]=t}return t};
},{"../internals/global":"dtnl","../internals/hide":"GCcg"}],"zNuz":[function(require,module,exports) {
module.exports=!1;
},{}],"m9a6":[function(require,module,exports) {

var r=require("../internals/global"),e=require("../internals/set-global"),i="__core-js_shared__",o=r[i]||e(i,{});(module.exports=function(r,e){return o[r]||(o[r]=void 0!==e?e:{})})("versions",[]).push({version:"3.0.0",mode:require("../internals/is-pure")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"});
},{"../internals/global":"dtnl","../internals/set-global":"SNLP","../internals/is-pure":"zNuz"}],"lo3x":[function(require,module,exports) {
module.exports=require("../internals/shared")("native-function-to-string",Function.toString);
},{"../internals/shared":"m9a6"}],"Zg/k":[function(require,module,exports) {
var e=require("../internals/function-to-string"),t=require("../internals/global").WeakMap;module.exports="function"==typeof t&&/native code/.test(e.call(t));
},{"../internals/function-to-string":"lo3x","../internals/global":"dtnl"}],"80dz":[function(require,module,exports) {
var o=0,t=Math.random();module.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++o+t).toString(36))};
},{}],"XwVg":[function(require,module,exports) {
var e=require("../internals/shared")("keys"),r=require("../internals/uid");module.exports=function(n){return e[n]||(e[n]=r(n))};
},{"../internals/shared":"m9a6","../internals/uid":"80dz"}],"dBAM":[function(require,module,exports) {
module.exports={};
},{}],"YxUH":[function(require,module,exports) {
var e,r,n,t=require("../internals/native-weak-map"),i=require("../internals/is-object"),u=require("../internals/hide"),a=require("../internals/has"),l=require("../internals/shared-key"),o=require("../internals/hidden-keys"),s=require("../internals/global").WeakMap,c=function(t){return n(t)?r(t):e(t,{})},f=function(e){return function(n){var t;if(!i(n)||(t=r(n)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return t}};if(t){var q=new s,h=q.get,d=q.has,p=q.set;e=function(e,r){return p.call(q,e,r),r},r=function(e){return h.call(q,e)||{}},n=function(e){return d.call(q,e)}}else{var v=l("state");o[v]=!0,e=function(e,r){return u(e,v,r),r},r=function(e){return a(e,v)?e[v]:{}},n=function(e){return a(e,v)}}module.exports={set:e,get:r,has:n,enforce:c,getterFor:f};
},{"../internals/native-weak-map":"Zg/k","../internals/is-object":"qLNg","../internals/hide":"GCcg","../internals/has":"kMHR","../internals/shared-key":"XwVg","../internals/hidden-keys":"dBAM","../internals/global":"dtnl"}],"3SfU":[function(require,module,exports) {

var e=require("../internals/global"),n=require("../internals/hide"),t=require("../internals/has"),r=require("../internals/set-global"),i=require("../internals/function-to-string"),o=require("../internals/internal-state"),s=o.get,a=o.enforce,u=String(i).split("toString");require("../internals/shared")("inspectSource",function(e){return i.call(e)}),(module.exports=function(i,o,s,l){var c=!!l&&!!l.unsafe,f=!!l&&!!l.enumerable,g=!!l&&!!l.noTargetGet;"function"==typeof s&&("string"!=typeof o||t(s,"name")||n(s,"name",o),a(s).source=u.join("string"==typeof o?o:"")),i!==e?(c?!g&&i[o]&&(f=!0):delete i[o],f?i[o]=s:n(i,o,s)):f?i[o]=s:r(o,s)})(Function.prototype,"toString",function(){return"function"==typeof this&&s(this).source||i.call(this)});
},{"../internals/global":"dtnl","../internals/hide":"GCcg","../internals/has":"kMHR","../internals/set-global":"SNLP","../internals/function-to-string":"lo3x","../internals/internal-state":"YxUH","../internals/shared":"m9a6"}],"Aqsg":[function(require,module,exports) {
var e=require("../internals/has"),r=require("../internals/to-indexed-object"),n=require("../internals/array-includes")(!1),i=require("../internals/hidden-keys");module.exports=function(s,t){var u,a=r(s),l=0,o=[];for(u in a)!e(i,u)&&e(a,u)&&o.push(u);for(;t.length>l;)e(a,u=t[l++])&&(~n(o,u)||o.push(u));return o};
},{"../internals/has":"kMHR","../internals/to-indexed-object":"8gbu","../internals/array-includes":"EPeP","../internals/hidden-keys":"dBAM"}],"QE1D":[function(require,module,exports) {
module.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];
},{}],"sEr8":[function(require,module,exports) {
var e=require("../internals/object-keys-internal"),r=require("../internals/enum-bug-keys").concat("length","prototype");exports.f=Object.getOwnPropertyNames||function(t){return e(t,r)};
},{"../internals/object-keys-internal":"Aqsg","../internals/enum-bug-keys":"QE1D"}],"M/iV":[function(require,module,exports) {
exports.f=Object.getOwnPropertySymbols;
},{}],"GgC7":[function(require,module,exports) {
var e=require("../internals/object-get-own-property-names"),r=require("../internals/object-get-own-property-symbols"),n=require("../internals/an-object"),t=require("../internals/global").Reflect;module.exports=t&&t.ownKeys||function(t){var o=e.f(n(t)),a=r.f;return a?o.concat(a(t)):o};
},{"../internals/object-get-own-property-names":"sEr8","../internals/object-get-own-property-symbols":"M/iV","../internals/an-object":"ajv4","../internals/global":"dtnl"}],"2PP/":[function(require,module,exports) {
var e=require("../internals/has"),r=require("../internals/own-keys"),n=require("../internals/object-get-own-property-descriptor"),t=require("../internals/object-define-property");module.exports=function(i,o){for(var a=r(o),s=t.f,l=n.f,p=0;p<a.length;p++){var u=a[p];e(i,u)||s(i,u,l(o,u))}};
},{"../internals/has":"kMHR","../internals/own-keys":"GgC7","../internals/object-get-own-property-descriptor":"fYVJ","../internals/object-define-property":"SXkY"}],"VB9T":[function(require,module,exports) {
var r=require("../internals/fails"),e=/#|\.prototype\./,t=function(e,t){var u=o[n(e)];return u==i||u!=a&&("function"==typeof t?r(t):!!t)},n=t.normalize=function(r){return String(r).replace(e,".").toLowerCase()},o=t.data={},a=t.NATIVE="N",i=t.POLYFILL="P";module.exports=t;
},{"../internals/fails":"EwB5"}],"UqUm":[function(require,module,exports) {

var e=require("../internals/global"),r=require("../internals/object-get-own-property-descriptor").f,t=require("../internals/hide"),i=require("../internals/redefine"),o=require("../internals/set-global"),n=require("../internals/copy-constructor-properties"),a=require("../internals/is-forced");module.exports=function(s,l){var u,f,p,c,d,q=s.target,g=s.global,y=s.stat;if(u=g?e:y?e[q]||o(q,{}):(e[q]||{}).prototype)for(f in l){if(c=l[f],p=s.noTargetGet?(d=r(u,f))&&d.value:u[f],!a(g?f:q+(y?".":"#")+f,s.forced)&&void 0!==p){if(typeof c==typeof p)continue;n(c,p)}(s.sham||p&&p.sham)&&t(c,"sham",!0),i(u,f,c,s)}};
},{"../internals/global":"dtnl","../internals/object-get-own-property-descriptor":"fYVJ","../internals/hide":"GCcg","../internals/redefine":"3SfU","../internals/set-global":"SNLP","../internals/copy-constructor-properties":"2PP/","../internals/is-forced":"VB9T"}],"X8Vg":[function(require,module,exports) {
"use strict";var r=require("../internals/array-includes")(!1),e=[].indexOf,i=!!e&&1/[1].indexOf(1,-0)<0,n=require("../internals/sloppy-array-method")("indexOf");require("../internals/export")({target:"Array",proto:!0,forced:i||n},{indexOf:function(n){return i?e.apply(this,arguments)||0:r(this,n,arguments[1])}});
},{"../internals/array-includes":"EPeP","../internals/sloppy-array-method":"pZgz","../internals/export":"UqUm"}],"0LbL":[function(require,module,exports) {
module.exports=function(n){if("function"!=typeof n)throw TypeError(String(n)+" is not a function");return n};
},{}],"a76Z":[function(require,module,exports) {
var n=require("../internals/a-function");module.exports=function(r,t,e){if(n(r),void 0===t)return r;switch(e){case 0:return function(){return r.call(t)};case 1:return function(n){return r.call(t,n)};case 2:return function(n,e){return r.call(t,n,e)};case 3:return function(n,e,u){return r.call(t,n,e,u)}}return function(){return r.apply(t,arguments)}};
},{"../internals/a-function":"0LbL"}],"DCqP":[function(require,module,exports) {

var e=require("../internals/global"),n=require("../internals/bind-context"),r=Function.call;module.exports=function(t,o,i){return n(r,e[t].prototype[o],i)};
},{"../internals/global":"dtnl","../internals/bind-context":"a76Z"}],"Ei58":[function(require,module,exports) {
require("../../modules/es.array.index-of"),module.exports=require("../../internals/entry-unbind")("Array","indexOf");
},{"../../modules/es.array.index-of":"X8Vg","../../internals/entry-unbind":"DCqP"}],"RUSt":[function(require,module,exports) {
module.exports=require("../../es/array/index-of");
},{"../../es/array/index-of":"Ei58"}],"73+H":[function(require,module,exports) {
var e=require("../internals/require-object-coercible");module.exports=function(r){return Object(e(r))};
},{"../internals/require-object-coercible":"X1ih"}],"CCj2":[function(require,module,exports) {
var r=require("../internals/classof-raw");module.exports=Array.isArray||function(a){return"Array"==r(a)};
},{"../internals/classof-raw":"ATiS"}],"wedg":[function(require,module,exports) {
module.exports=!require("../internals/fails")(function(){String(Symbol())});
},{"../internals/fails":"EwB5"}],"jDsD":[function(require,module,exports) {
var e=require("../internals/shared")("wks"),r=require("../internals/uid"),n=require("../internals/global").Symbol,i=require("../internals/native-symbol");module.exports=function(l){return e[l]||(e[l]=i&&n[l]||(i?n:r)("Symbol."+l))};
},{"../internals/shared":"m9a6","../internals/uid":"80dz","../internals/global":"dtnl","../internals/native-symbol":"wedg"}],"Ow6/":[function(require,module,exports) {
var r=require("../internals/is-object"),e=require("../internals/is-array"),n=require("../internals/well-known-symbol")("species");module.exports=function(o,i){var t;return e(o)&&("function"!=typeof(t=o.constructor)||t!==Array&&!e(t.prototype)?r(t)&&null===(t=t[n])&&(t=void 0):t=void 0),new(void 0===t?Array:t)(0===i?0:i)};
},{"../internals/is-object":"qLNg","../internals/is-array":"CCj2","../internals/well-known-symbol":"jDsD"}],"fvPA":[function(require,module,exports) {
var e=require("../internals/bind-context"),r=require("../internals/indexed-object"),n=require("../internals/to-object"),t=require("../internals/to-length"),i=require("../internals/array-species-create");module.exports=function(s,a){var u=1==s,c=2==s,o=3==s,l=4==s,f=6==s,d=5==s||f,q=a||i;return function(i,a,h){for(var v,b,p=n(i),x=r(p),g=e(a,h,3),j=t(x.length),m=0,w=u?q(i,j):c?q(i,0):void 0;j>m;m++)if((d||m in x)&&(b=g(v=x[m],m,p),s))if(u)w[m]=b;else if(b)switch(s){case 3:return!0;case 5:return v;case 6:return m;case 2:w.push(v)}else if(l)return!1;return f?-1:o||l?l:w}};
},{"../internals/bind-context":"a76Z","../internals/indexed-object":"YWlL","../internals/to-object":"73+H","../internals/to-length":"kktW","../internals/array-species-create":"Ow6/"}],"xYl4":[function(require,module,exports) {
var n=require("../internals/fails"),r=require("../internals/well-known-symbol")("species");module.exports=function(e){return!n(function(){var n=[];return(n.constructor={})[r]=function(){return{foo:1}},1!==n[e](Boolean).foo})};
},{"../internals/fails":"EwB5","../internals/well-known-symbol":"jDsD"}],"18Q1":[function(require,module,exports) {
"use strict";var r=require("../internals/array-methods")(1),e=require("../internals/array-method-has-species-support")("map");require("../internals/export")({target:"Array",proto:!0,forced:!e},{map:function(e){return r(this,e,arguments[1])}});
},{"../internals/array-methods":"fvPA","../internals/array-method-has-species-support":"xYl4","../internals/export":"UqUm"}],"g4SH":[function(require,module,exports) {
require("../../modules/es.array.map"),module.exports=require("../../internals/entry-unbind")("Array","map");
},{"../../modules/es.array.map":"18Q1","../../internals/entry-unbind":"DCqP"}],"LIxy":[function(require,module,exports) {
module.exports=require("../../es/array/map");
},{"../../es/array/map":"g4SH"}],"uzZq":[function(require,module,exports) {
"use strict";function r(r){for(var t=5381,e=r.length;e;)t=33*t^r.charCodeAt(--e);return t>>>0}module.exports=r;
},{}],"18j+":[function(require,module,exports) {
var define;
var n;!function(t,e){"function"==typeof n&&n.amd?n([],e):"undefined"!=typeof module&&module.exports?module.exports=e():t.lscache=e()}(this,function(){var n,t,e="lscache-",r="-cacheexpiration",o=10,i=6e4,c=_(i),u="",a=!1;function f(){var t="__lscachetest__";if(void 0!==n)return n;try{if(!localStorage)return!1}catch(e){return!1}try{p(t,"__lscachetest__"),m(t),n=!0}catch(r){n=!(!l(r)||!localStorage.length)}return n}function l(n){return n&&("QUOTA_EXCEEDED_ERR"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name||"QuotaExceededError"===n.name)}function s(){return void 0===t&&(t=null!=window.JSON),t}function h(n){return n+r}function d(){return Math.floor((new Date).getTime()/i)}function g(n){return localStorage.getItem(e+u+n)}function p(n,t){localStorage.removeItem(e+u+n),localStorage.setItem(e+u+n,t)}function m(n){localStorage.removeItem(e+u+n)}function w(n){for(var t=new RegExp("^"+e+u.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")+"(.*)"),o=localStorage.length-1;o>=0;--o){var i=localStorage.key(o);(i=(i=i&&i.match(t))&&i[1])&&i.indexOf(r)<0&&n(i,h(i))}}function v(n){var t=h(n);m(n),m(t)}function y(n){var t=h(n),e=g(t);if(e){var r=parseInt(e,o);if(d()>=r)return m(n),m(t),!0}}function E(n,t){a&&"console"in window&&"function"==typeof window.console.warn&&(window.console.warn("lscache - "+n),t&&window.console.warn("lscache - The error was: "+t.message))}function _(n){return Math.floor(864e13/n)}return{set:function(n,t,e){if(!f())return!1;if(!s())return!1;try{t=JSON.stringify(t)}catch(a){return!1}try{p(n,t)}catch(a){if(!l(a))return E("Could not add item with key '"+n+"'",a),!1;var r,i=[];w(function(n,t){var e=g(t);e=e?parseInt(e,o):c,i.push({key:n,size:(g(n)||"").length,expiration:e})}),i.sort(function(n,t){return t.expiration-n.expiration});for(var u=(t||"").length;i.length&&u>0;)r=i.pop(),E("Cache is full, removing item with key '"+n+"'"),v(r.key),u-=r.size;try{p(n,t)}catch(a){return E("Could not add item with key '"+n+"', perhaps it's too big?",a),!1}}return e?p(h(n),(d()+e).toString(o)):m(h(n)),!0},get:function(n){if(!f())return null;if(y(n))return null;var t=g(n);if(!t||!s())return t;try{return JSON.parse(t)}catch(e){return t}},remove:function(n){f()&&v(n)},supported:function(){return f()},flush:function(){f()&&w(function(n){v(n)})},flushExpired:function(){f()&&w(function(n){y(n)})},setBucket:function(n){u=n},resetBucket:function(){u=""},getExpiryMilliseconds:function(){return i},setExpiryMilliseconds:function(n){c=_(i=n)},enableWarnings:function(n){a=n}}});
},{}],"bRhr":[function(require,module,exports) {
"use strict";function e(e){return e.replace(/^[התשובה הנכונה,[\sהיא]?]:\s+/,"").replace(/[!:@#$%^&*)(,?+=._-\s]+/g,"")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.rgxClear=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("core-js/features/array/index-of"),require("core-js/features/array/map");var e=a(require("string-hash")),t=a(require("lscache")),r=require("~/lib");function a(e){return e&&e.__esModule?e:{default:e}}var n=window.jQuery,i="https://sheba-brain.now.sh/answers";t.default.flushExpired();var o,s=t.default.get("brain-db");function l(){var e=window.artoo,t=e.scrape("div.que",{q:{sel:"div.qtext",data:"html"},ra:function(){return n(this).find(".rightanswer").text().replace(/^התשובה הנכונה(\sהיא)?:\s+/,"").replace(/(")/g,"")}}),r={t:e.$("title").text()};n.post("https://sheba-brain.now.sh",{meta:r,data:t}).done(function(e){e?alert(e):alert("Looks like You dit it right, but something is not working")})}function u(t){var a;n(".formulation").each(function(i,o){a=t.map(function(e){return e.q}).indexOf((0,e.default)((0,r.rgxClear)(n(o).find(".qtext").text()))),n(o).find("label").each(function(i,o){(0,e.default)((0,r.rgxClear)(n(o).text().replace(/^(\w\.\s)/gi,"")))===t[a].ra&&n(o).parent().css("background-color","yellow")}),t.splice(a,1)}),n('.othernav :contains("סיום שלב צפייה במשוב")').text()&&!n("a.brain-helper").length&&n.getScript("https://medialab.github.io/artoo/public/dist/artoo-latest.min.js").done(function(){n("<a>",{text:"Send Answers to BRAIN Helper",class:"brain-helper",href:"#",click:function(){l()},style:"background-color: yellow;"}).appendTo("aside .othernav")}).fail(function(){console.log("[FAILED] Show Post Link")})}s?u(o=s):n.getJSON(i).done(function(e){o=e.db,t.default.set("brain-db",o,60),u(o)}),console.log("BRAIN Helper started...");
},{"core-js/features/array/index-of":"RUSt","core-js/features/array/map":"LIxy","string-hash":"uzZq","lscache":"18j+","~/lib":"bRhr"}]},{},["Focm"], null)