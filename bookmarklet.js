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

var e=require("../internals/global"),r=require("../internals/set-global"),i="__core-js_shared__",o=e[i]||r(i,{});(module.exports=function(e,r){return o[e]||(o[e]=void 0!==r?r:{})})("versions",[]).push({version:"3.0.0-beta.18",mode:require("../internals/is-pure")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"});
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
},{}],"bRhr":[function(require,module,exports) {
module.exports={rgxClear:function(e){return e.replace(/^[התשובה הנכונה,[\sהיא]?]:\s+/,"").replace(/[!:@#\$%\^\&*\)\(,?+=._-\s]+/g,"")}};
},{}],"fAE+":[function(require,module,exports) {
module.exports=[{q:3568035691,ra:3182385758},{q:576153538,ra:1288904505},{q:2882783608,ra:1126771009},{q:4191899188,ra:3746635976},{q:2216980854,ra:406488611},{q:1480950961,ra:1516676650},{q:1385861079,ra:4057497981},{q:58187841,ra:974572769},{q:2630195549,ra:1844095843},{q:2771645008,ra:2843322805},{q:206605008,ra:5862022},{q:445149868,ra:177642},{q:81077432,ra:3532598783},{q:3418432743,ra:2351920662},{q:22942295,ra:2589470498},{q:1001618495,ra:3790992952},{q:1480463862,ra:2367104403},{q:2153666865,ra:3532598783},{q:2684565699,ra:2760830453},{q:3739840459,ra:1406142735},{q:41636268,ra:3982799981},{q:1720047070,ra:3532598783},{q:749293583,ra:2362260610},{q:908859697,ra:3241895579},{q:3382513713,ra:1800674804},{q:149135367,ra:2246207683},{q:3204582191,ra:3278974020},{q:4019683932,ra:3372696818},{q:3938749947,ra:1015190821},{q:1407897621,ra:2364367058},{q:3139505704,ra:3532598783},{q:3703074262,ra:254874430},{q:1971497222,ra:193357975},{q:592087977,ra:3532598783},{q:3640107895,ra:4225479983},{q:3952053325,ra:559556807},{q:3784203977,ra:730192269},{q:2310993619,ra:416590125},{q:1891470540,ra:1680739838},{q:2241931341,ra:2902120681},{q:748235118,ra:4276453828},{q:4191415814,ra:3720640511},{q:3754002385,ra:3532598783},{q:2148707478,ra:2406790422},{q:685381384,ra:4089429437},{q:1315065854,ra:3532598783},{q:522460748,ra:2434553315},{q:815932215,ra:3894985803},{q:3772855991,ra:3695025285},{q:4120642921,ra:422205243},{q:1087101392,ra:2837583260},{q:2989302305,ra:2487653908},{q:1945211277,ra:3195025808},{q:3185204939,ra:1746580334},{q:1552773915,ra:3936839459},{q:3186648152,ra:3535285391},{q:3249324293,ra:1735334317},{q:157603947,ra:4256162414},{q:1805842636,ra:4224797789},{q:94780543,ra:1260088933},{q:3792762548,ra:63749804},{q:3209292925,ra:2218789815},{q:967973108,ra:2142050410},{q:113121214,ra:1599295692},{q:1282047920,ra:3532598783},{q:1911126501,ra:4231680713},{q:1911126501,ra:4231680713},{q:338410108,ra:1006690738},{q:3658029244,ra:3846997855},{q:4039871564,ra:3344560535},{q:1452717235,ra:2160090653},{q:3479494167,ra:269351563},{q:3452821456,ra:441839826},{q:2184845574,ra:759231754},{q:3258545862,ra:727574927},{q:2794194052,ra:2812198813},{q:2257794810,ra:1174288584},{q:3134637539,ra:4199849919},{q:620518715,ra:3758918491},{q:2090758657,ra:2522601733},{q:1578031370,ra:4184554936},{q:356936815,ra:3122508262},{q:4055136218,ra:2693217940},{q:2753258450,ra:3834529850},{q:1633067661,ra:3532598783},{q:523423751,ra:2660584999},{q:3397834472,ra:197783213},{q:1223644684,ra:2172647761},{q:2766149264,ra:3434113207},{q:3025648840,ra:3705723516},{q:1804598381,ra:2307911921},{q:127700415,ra:87456726},{q:476978270,ra:165186769},{q:2860061587,ra:3129929429},{q:2965894405,ra:1089196568},{q:158011773,ra:745845526},{q:611181762,ra:2513594293},{q:3217973797,ra:3845032427},{q:622240437,ra:3532598783},{q:2357082425,ra:3532598783},{q:434018534,ra:3532598783},{q:446295357,ra:1227992555},{q:2414840690,ra:324689373},{q:2294664274,ra:3532598783},{q:3118003205,ra:569583871},{q:893596667,ra:62083782},{q:611145999,ra:1259485855},{q:2651621059,ra:3532598783},{q:3494640164,ra:3058045937},{q:158011773,ra:4250886729},{q:930638408,ra:3427267388},{q:2439881202,ra:2153167955},{q:2030029912,ra:3473266213},{q:3772893700,ra:1063167437},{q:699706886,ra:3118882},{q:3829191920,ra:1421841640},{q:3062896703,ra:5862106},{q:2394124881,ra:3532598783},{q:930638408,ra:2610263130},{q:4207728537,ra:3337205509},{q:1880241686,ra:2584678194},{q:2569344346,ra:177553},{q:4195274854,ra:1660800185},{q:2904983925,ra:3532598783},{q:4272101654,ra:3388019397},{q:1850750796,ra:3532598783},{q:2962847878,ra:3370424513},{q:2097882953,ra:3711175973},{q:1576876757,ra:1573111400},{q:154023649,ra:5862132},{q:930638408,ra:3427267388},{q:930638408,ra:3427267388},{q:1639419136,ra:4083509381},{q:3491925898,ra:2083139645},{q:2857503462,ra:2212061678},{q:2519670913,ra:9115907},{q:3682291834,ra:2281838070},{q:3675370972,ra:3647471987},{q:4065776399,ra:2633675768},{q:3092489849,ra:1316117311},{q:4237452808,ra:3034617754},{q:1618326957,ra:2212061678},{q:2371800918,ra:2279692566},{q:1828726908,ra:1746409085},{q:3470285725,ra:2265280658},{q:2469893083,ra:3785801036},{q:2737727454,ra:4209653454},{q:863573344,ra:4097755002},{q:770426078,ra:1364124788},{q:1127826400,ra:3057097580},{q:563906524,ra:3344474106},{q:1926135375,ra:2124707140},{q:2460767156,ra:3532598783},{q:1826316600,ra:3208154626},{q:2700317246,ra:3532598783},{q:1872196193,ra:3605100139},{q:813837113,ra:2817724314},{q:3133819435,ra:4153530331},{q:2322598639,ra:1410403439},{q:2350755559,ra:532254388},{q:3171303810,ra:137668005},{q:2597569027,ra:1963794493},{q:1677113502,ra:3404839591},{q:3298607548,ra:297029049},{q:3790489746,ra:2754227078},{q:655520688,ra:3486122671},{q:440644714,ra:478728777},{q:4217635416,ra:1628251998},{q:726789204,ra:1628103851},{q:2699853744,ra:1611296120},{q:87186147,ra:177564}];
},{}],"Focm":[function(require,module,exports) {
"use strict";require("core-js/features/array/index-of"),require("core-js/features/array/map");var e=t(require("string-hash")),r=require("~/lib");function t(e){return e&&e.__esModule?e:{default:e}}var a,n,i=window.$,o=require("./db/hashed.json");console.log("BRAIN Helper loaded..."),i(".formulation").each(function(t,s){a=o.map(function(e){return e.q}).indexOf((0,e.default)((0,r.rgxClear)(i(s).find(".qtext").text()))),i(s).find("label").each(function(t,s){(n=(0,e.default)((0,r.rgxClear)(i(s).text().replace(/^(\w\.\s)/gi,""))))===o[a].ra&&i(s).parent().css("background-color","yellow")}),o.splice(a,1)}),i('.othernav :contains("סיום שלב צפייה במשוב")').text()&&!i("a.brain-helper").length&&i.getScript("https://sheba-brain.now.sh/post_script");
},{"core-js/features/array/index-of":"RUSt","core-js/features/array/map":"LIxy","string-hash":"uzZq","~/lib":"bRhr","./db/hashed.json":"fAE+"}]},{},["Focm"], null)