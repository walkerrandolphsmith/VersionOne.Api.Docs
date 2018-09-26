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
    "url": "webpack-runtime-46fe3068163379555bce.js"
  },
  {
    "url": "app-7ec86a6ba5fbf6020a16.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-f9b7f1af72a3a8d0b34a.js"
  },
  {
    "url": "index.html",
    "revision": "58b8a626d239b4186a8de3c96b9b05ef"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0954e069c7ca2256d2c1a33187087d34"
  },
  {
    "url": "component---src-pages-index-js.b21e77ae962640f110c6.css"
  },
  {
    "url": "component---src-pages-index-js-3442389e75b378e1853c.js"
  },
  {
    "url": "6-b174bef1af9cb0a4938f.js"
  },
  {
    "url": "0-d4e1bc9f7fa1f3246658.js"
  },
  {
    "url": "static/d/741/path---index-6a9-754MQOhYV8x6peR8yL1AybzyrM.json",
    "revision": "7fa559119855cdaa56d62a278358bcab"
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