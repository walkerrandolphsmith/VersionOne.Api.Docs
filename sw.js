/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-7d02abed641d8e1709eb.js"
  },
  {
    "url": "app-7ec86a6ba5fbf6020a16.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-f9b7f1af72a3a8d0b34a.js"
  },
  {
    "url": "index.html",
    "revision": "d339d7e38b77e8ad518f3406f837973c"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c15a05bdcf66453b0d2b13d804f32927"
  },
  {
    "url": "component---src-pages-index-js.b21e77ae962640f110c6.css"
  },
  {
    "url": "component---src-pages-index-js-45cb4df68c2ec78ca0b1.js"
  },
  {
    "url": "6-b174bef1af9cb0a4938f.js"
  },
  {
    "url": "0-d4e1bc9f7fa1f3246658.js"
  },
  {
    "url": "static/d/202/path---index-6a9-MsHcAR3GJZi1gVrLkznP9QphSac.json",
    "revision": "c8907dc649459996fddbe79d7ee9395c"
  },
  {
    "url": "component---src-pages-404-js.b21e77ae962640f110c6.css"
  },
  {
    "url": "component---src-pages-404-js-37c5df7562d0aa18edb0.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/versionone-api-docs/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});