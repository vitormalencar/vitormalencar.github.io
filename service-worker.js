"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/476bbb81c886485f97159f22fdbc42c1.jpg","476bbb81c886485f97159f22fdbc42c1"],["/CNAME","fe6c69ab89ebdc53e09b0a3b2e88f5f0"],["/app.b20d63a10f8206982f2e.js","526514ec167ab5799e548d34b0e49a35"],["/avatar/vitor_apcr2b_c_scale,w_432.jpg","476bbb81c886485f97159f22fdbc42c1"],["/favicon.ico","762824e5063712eaf9d8fc3d1bb6ba58"],["/icon/android-chrome-192x192.png","a3d92cc2cdd77be6bd9f6db08f41fc7b"],["/icon/android-chrome-512x512.png","fb1a262dca8b1fb94aa5eadffe3dfef2"],["/icon/apple-touch-icon.png","cb0da696d741cddb3f6474ed979217e8"],["/icon/favicon-16x16.png","f2b3b9bcb46872bd7ab7e7417e9184af"],["/icon/favicon-32x32.png","081c275f34fba5a9b04c847e269448b0"],["/icon/mstile-150x150.png","f244c649693a5896dba7c5f60a7418d3"],["/img/banner.png","7ddf1f1fd61406c92328b0d5595eafcd"],["/img/lighthouse.jpg","9993abf612da76c4d5b09cf80562944a"],["/index.html","fbe28a0fd58f2365ca6872bc81290fa5"],["/manifest.json","21aac10752d5fa16e3574def23702918"],["/vendor.b20d63a10f8206982f2e.js","48f50ac9138222823c7133a659a5e7e9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),a.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],r=new URL(n,self.location),a=createCacheKey(r,hashParamName,t,/./);return[r.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);n=urlsToCacheKeys.has(t);n||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(t=new URL("index.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});