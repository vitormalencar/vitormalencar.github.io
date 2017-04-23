"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/783e91020031806760406c1cd0138f2b.png","783e91020031806760406c1cd0138f2b"],["/CNAME","fe6c69ab89ebdc53e09b0a3b2e88f5f0"],["/app.071b24245cce2f2d0b27.js","0c91c96f6546406d37bc7bdf45de842c"],["/avatar/vitor.png","783e91020031806760406c1cd0138f2b"],["/avatar/vitor.webp","b8707f567f3f3ccdf27eaa0905437499"],["/b8707f567f3f3ccdf27eaa0905437499.webp","b8707f567f3f3ccdf27eaa0905437499"],["/favicon.ico","762824e5063712eaf9d8fc3d1bb6ba58"],["/icon/android-chrome-192x192.png","a3d92cc2cdd77be6bd9f6db08f41fc7b"],["/icon/android-chrome-512x512.png","fb1a262dca8b1fb94aa5eadffe3dfef2"],["/icon/apple-touch-icon.png","cb0da696d741cddb3f6474ed979217e8"],["/icon/favicon-16x16.png","f2b3b9bcb46872bd7ab7e7417e9184af"],["/icon/favicon-32x32.png","081c275f34fba5a9b04c847e269448b0"],["/icon/mstile-150x150.png","f244c649693a5896dba7c5f60a7418d3"],["/img/banner.png","7ddf1f1fd61406c92328b0d5595eafcd"],["/img/lighthouse.jpg","9993abf612da76c4d5b09cf80562944a"],["/index.html","ea5a1daa3848ad77405484dee0ae935b"],["/manifest.json","15207caf8bc629c5af7035baf7c7b4e9"],["/vendor.071b24245cce2f2d0b27.js","fb153f114fd216482e6366734facdd77"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),a.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],r=new URL(n,self.location),a=createCacheKey(r,hashParamName,t,/^(?=.*\.\w{1,7}$)/);return[r.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);n=urlsToCacheKeys.has(t);n||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(t=new URL("index.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});