!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.3"]&&_()}catch(e){}},function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=2},function(e,t,n){"use strict";n.r(t);n(0);n(1);const s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[s.prefix,e,s.suffix].filter(e=>e&&e.length>0).join("-"),a=e=>e||r(s.precache),c=(e,...t)=>{let n=e;return t.length>0&&(n+=" :: "+JSON.stringify(t)),n};class o extends Error{constructor(e,t){super(c(e,t)),this.name=e,this.details=t}}const i=new Set;const l=(e,t)=>e.filter(e=>t in e),h=async({request:e,mode:t,plugins:n=[]})=>{const s=l(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},u=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const a=await self.caches.open(e),c=await h({plugins:r,request:t,mode:"read"});let o=await a.match(c,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:c})}return o},f=async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:a})=>{const c=await h({plugins:r,request:t,mode:"write"});if(!n)throw new o("cache-put-with-no-response",{url:(f=c.url,new URL(String(f),location.href).href.replace(new RegExp("^"+location.origin),""))});var f;const d=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,a=!1;for(const t of s)if("cacheWillUpdate"in t){a=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return a||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:r,response:n,request:c});if(!d)return void 0;const p=await self.caches.open(e),y=l(r,"cacheDidUpdate"),w=y.length>0?await u({cacheName:e,matchOptions:a,request:c}):null;try{await p.put(c,d)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of i)await e()}(),e}for(const t of y)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:w,newResponse:d,request:c})},d=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=l(s,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new o("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:n,request:c,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:c.clone()});throw e}};let p;async function y(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,a=function(){if(void 0===p){const e=new Response("");if("body"in e)try{new Response(e.body),p=!0}catch(e){p=!1}p=!1}return p}()?n.body:await n.blob();return new Response(a,r)}function w(e){if(!e)throw new o("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new o("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class g{constructor(e){this._cacheName=a(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=w(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new o("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new o("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),a=await r.keys(),c=new Set(a.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map(({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),a=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:a,event:e,integrity:r,plugins:t,url:s})});await Promise.all(o);return{updatedURLs:n.map(e=>e.url),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:a}){const c=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});let i,l=await d({event:s,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(i=e);if(!(i?await i.cacheWillUpdate({event:s,request:c,response:l}):l.status<400))throw new o("bad-precaching-response",{url:t,status:l.status});l.redirected&&(l=await y(l)),await f({event:s,plugins:r,response:l,request:e===t?c:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new o("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new o("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"7d63f677a9f6212a63e761f55dd66871","url":"01a85c17.d6872d04.js"},{"revision":"e8b9ebec9c703996ed8526d61c4cdf1c","url":"0e7f9ac9.e0638d6e.js"},{"revision":"1e0e51807e3eb951ca3bc424d1b0ec16","url":"1.f25356ef.js"},{"revision":"9350f366ace93f5ed8883e48aa794a70","url":"17896441.0eb3b58b.js"},{"revision":"5b07dbef5a406f5a16338ec564cc3465","url":"1be78505.363d82d7.js"},{"revision":"10a919f2bb050420a51d375e843d0cc5","url":"2.8056dfee.js"},{"revision":"1c9ab6faf228f7455afb7efe30c0fcca","url":"20ac7829.642a31bf.js"},{"revision":"7b50d145f0efdb61508bd2550e5687c0","url":"26eb1e31.33aea0af.js"},{"revision":"4d7878d34b86642cb7bb62051569105e","url":"2868cdab.49649b69.js"},{"revision":"5a3ef1d212bf5cfc35b6c35fdcb3318e","url":"2b785902.729a54ad.js"},{"revision":"77e535e91f4db1351afce708d81c56c6","url":"3.b432f90a.js"},{"revision":"2030ec727ea28ca8ea3f6b8888694f40","url":"33.958297f4.js"},{"revision":"37fd2c010d686eb8c01aaf5d2349e24d","url":"34.6d195850.js"},{"revision":"95e9755cc1010756588c6206366537e8","url":"3444e578.14da8c82.js"},{"revision":"a44b300803a503740d38a67509828f7f","url":"35.5a85bf91.js"},{"revision":"3144d9a92132b94db5fc228969e05f84","url":"36.9eb9b6dd.js"},{"revision":"2234fd6571799131902f655469824961","url":"3a6eb64e.5a4179a1.js"},{"revision":"93972e916ecd9be5f026356e4d38a94c","url":"404.html"},{"revision":"213f43d1bc97e8944b9e00a38c0aabf9","url":"54a2e6d8.7c4bae0f.js"},{"revision":"43ce62a47e8ee008b3b58d8255818a9b","url":"5ed3387d.cce772e6.js"},{"revision":"aa89fd51efa14632d0bc7fb212d45b00","url":"6875c492.2e2a83db.js"},{"revision":"7930070423d2a652248f8de52df60a5c","url":"69730b43.31126c96.js"},{"revision":"a806f5fe41254cb2713e13be8fb19e7f","url":"6ca375e2.783f3228.js"},{"revision":"17d7c94098d792602940f3866e1c031b","url":"8be5b89e.8aa767c3.js"},{"revision":"a8c05b54daa05be35c25261f21a8f165","url":"a09c2993.b3750771.js"},{"revision":"9d66786a852c2eb642c299fffe2a9fbd","url":"a6aa9e1f.f63903f3.js"},{"revision":"1b40f3d744a257ae8c537d145b8a8395","url":"a9bc01a8.8d37c1e4.js"},{"revision":"4a24ed84a9fa3ff9598ab54701e89172","url":"af172acd.7cbb987d.js"},{"revision":"b66468b2ef13f34a2c8ce68abaa36d5c","url":"af6ab693.6fb73007.js"},{"revision":"6cfc44a11c2c4bc0ce49aaf7a0d4f432","url":"bbb4ffb5.74a5a49b.js"},{"revision":"8b875a957c337f88899a7d1f002d6ffc","url":"blog/index.html"},{"revision":"04cd19a6bebe9ccef408196cb1c4cb62","url":"blog/tags/docusaurus/index.html"},{"revision":"99dfecc8cb0c27ec8de18488b41b83bc","url":"blog/tags/facebook/index.html"},{"revision":"0de251865837ac4b480a5e73511abf6c","url":"blog/tags/hello/index.html"},{"revision":"1de958bf09c8d2ba5e5a1181883b4a84","url":"blog/tags/index.html"},{"revision":"0e47681a3b146edabba93e0204b851de","url":"blog/welcome/index.html"},{"revision":"e30d9e6f317b8953a8b9c963629798fb","url":"c4f5d8e4.5555648e.js"},{"revision":"e8957958c89807537a1d6f6a6f4a482b","url":"ca7f1ee8.5246401b.js"},{"revision":"3eeae532b547390fd14244f54bd23083","url":"ccc49370.b3ef8b8f.js"},{"revision":"ed15602521ebf426a84fb7142db7e176","url":"d8519f58.a949c7aa.js"},{"revision":"605e8a9cb46cf13fe85bae524f13be63","url":"docs/autorization/index.html"},{"revision":"b9bd1a17351e48ba18e99255f082c9d3","url":"docs/baja/index.html"},{"revision":"8a8f7db28d2ce6b195a58e90f77de273","url":"docs/basic/index.html"},{"revision":"1c0dc18e700eb881d6387e474aa8d744","url":"docs/factura/index.html"},{"revision":"8ad1bf5342e50df9be124278b8de389e","url":"docs/index.html"},{"revision":"ca11c45e328204a8268a4cbbd01c92bb","url":"docs/obligaciones/index.html"},{"revision":"85f8488145782822625388d252a8628d","url":"docs/requirements/index.html"},{"revision":"7cb04cad418d7992ce9825bfe0b886bf","url":"docs/resumen_diario/index.html"},{"revision":"218fba9a8e937e3e21cdec564acb3a2f","url":"docs/sign/index.html"},{"revision":"7afbd259afda5dfcf4b4f1c78da540f1","url":"docs/tools/index.html"},{"revision":"7bdfa6163c9ab87f836e18f7f1641de8","url":"docs/validation/index.html"},{"revision":"0dcf4de904d8685e6d994a3de909433b","url":"docs/webservices/index.html"},{"revision":"4bd074168c9ca702cdec6134aee40e09","url":"eec15bdb.e8259c4e.js"},{"revision":"8179844138c7ba230085a684c8ee323e","url":"index.html"},{"revision":"dad590bc26094a454ad03f3cbc12d8ce","url":"main.25565eec.js"},{"revision":"d76d07c48fe607fd9867f44d02f2a5dd","url":"manifest.json"},{"revision":"eedfab5d1a17b7644a67e92d81b7e83b","url":"runtime~main.8dd59e46.js"},{"revision":"7b85a993b0322f2c96ab35d73238fd8c","url":"styles.04c7fbd0.js"},{"revision":"fa48b5ff6ab5a7a5f76d5259fe54caf8","url":"styles.a9e42930.css"},{"revision":"c3f530a7b0447149000c6f98bf5f24e2","url":"img/banner-fe-primer.png"},{"revision":"6caaf73e457b49299d398d441021e8f3","url":"img/company.svg"},{"revision":"35176e03671367163c64758423b0eabb","url":"img/developer.svg"},{"revision":"f0d2c327d387a465a0b972fa8a6ae0a1","url":"img/favicon.ico"},{"revision":"0492e765dac7d4a244b74c350457c40b","url":"img/fe-primer.png"},{"revision":"191346bfb910276dc8ba77fde1d0b3c6","url":"img/files_user.svg"},{"revision":"0f7fe590b33417e32dab43b8ab53217f","url":"img/files-find.svg"},{"revision":"46ebb5de3b58274b036feb0a3c398fff","url":"img/logo.svg"},{"revision":"f9ae9010ba22aa336a105d4c3e7fcacb","url":"img/manifest/apple-icon-152.png"},{"revision":"c10c2d4a1335de0087d5516f2a942f80","url":"img/manifest/icon-192.png"},{"revision":"3fefbb0655da1640bf20334175723a8f","url":"img/manifest/icon-512.png"},{"revision":"e9c67970b9adcce9fed2ecafcff819d5","url":"img/manifest/tile-win.png"},{"revision":"724030a2c8c634645e1258d492ac02dc","url":"img/person.svg"},{"revision":"e3a597e3d769aa38d9b9872a4ef94ebd","url":"img/sunat-logo.png"}],n=new g;e.offlineMode&&n.addToCacheList(t),await async function(e){void 0}(),self.addEventListener("install",e=>{e.waitUntil(n.install())}),self.addEventListener("activate",e=>{e.waitUntil(n.activate())}),self.addEventListener("fetch",async t=>{if(e.offlineMode){const s=t.request.url,r=function(e){const t=[],n=new URL(e,self.location.href);return n.origin!==self.location.origin||(n.search="",n.hash="",t.push(n.href),n.pathname.endsWith("/")?t.push(n.href+"index.html"):t.push(n.href+"/index.html")),t}(s);for(let a=0;a<r.length;a+=1){const c=r[a],o=n.getCacheKeyForURL(c);if(o){e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:s,possibleURL:c,possibleURLs:r,cacheKey:o}),t.respondWith(caches.match(o));break}}}}),self.addEventListener("message",async e=>{"SKIP_WAITING"===(e.data&&e.data.type)&&self.skipWaiting()})})()}]);