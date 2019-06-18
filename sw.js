importScripts('/devAwesome/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/devAwesome/_nuxt/067299f8133db9932b53.js",
    "revision": "664971544e0dee45f30a4b0a37d33a06"
  },
  {
    "url": "/devAwesome/_nuxt/16aba0fc35a05ddd3735.js",
    "revision": "1cfb5970c6c89f874cb607e91916d992"
  },
  {
    "url": "/devAwesome/_nuxt/23316a924b6f664989e6.js",
    "revision": "935adffed2452ccb2fdf4b2f726c02de"
  },
  {
    "url": "/devAwesome/_nuxt/2cc9db38958a926546a2.js",
    "revision": "7c1c03c6b18a2ea8c7104cd017faacf1"
  },
  {
    "url": "/devAwesome/_nuxt/37a33e50e83bb117def3.js",
    "revision": "ab85e4ab77ef905d36c28efc48505be2"
  },
  {
    "url": "/devAwesome/_nuxt/6bf88a10378c43c25d9c.js",
    "revision": "ef4635e6ca7e34bc5bfd6286bb15bf51"
  },
  {
    "url": "/devAwesome/_nuxt/6c2ba7bdac7bd093d921.js",
    "revision": "e6396afdd0f99a83322473d6de962f6e"
  },
  {
    "url": "/devAwesome/_nuxt/8cb8759cb479564e7525.js",
    "revision": "271a47f800f86c35cdd00fc9f2787d3d"
  },
  {
    "url": "/devAwesome/_nuxt/8cfaa406b786a8857bde.js",
    "revision": "e1d9032ba333785d6febf51f96f0dcba"
  },
  {
    "url": "/devAwesome/_nuxt/9dc30bb448b57827c7fc.js",
    "revision": "89fb87a4d33b47eaaaa1c39de4811c64"
  },
  {
    "url": "/devAwesome/_nuxt/a3f247b28d9f75c45bb3.js",
    "revision": "9c93ffd3adc482ae4e6da71ba3ca43ce"
  },
  {
    "url": "/devAwesome/_nuxt/aa4814248300659f4f69.js",
    "revision": "42ebdc06924ed42f1c54583cbf08243a"
  },
  {
    "url": "/devAwesome/_nuxt/b206878296d1c3403d9f.js",
    "revision": "830353089558e46883de19923b4fc75b"
  },
  {
    "url": "/devAwesome/_nuxt/ba9e4dc92c2cf354f60b.js",
    "revision": "d499ca8c71b5409a8a4ec38ca1d29e44"
  },
  {
    "url": "/devAwesome/_nuxt/bf2bb148d4dc661881c4.js",
    "revision": "f3319c47754fdcc806f008f70880a6dd"
  },
  {
    "url": "/devAwesome/_nuxt/d293668809bfa5b908c7.js",
    "revision": "ce591c688c941ef9d2306c21f9606388"
  },
  {
    "url": "/devAwesome/_nuxt/d4a9cfdffc5aaeaf2eb0.js",
    "revision": "8164232dd0857a25be282276347dffd0"
  },
  {
    "url": "/devAwesome/_nuxt/d65c95f1eacfc69c8a3a.js",
    "revision": "e8f90aa2fcab9512a209fb95206e3349"
  },
  {
    "url": "/devAwesome/_nuxt/def3d1be188343a1349f.js",
    "revision": "463aa458d89b67414aea888704b1b786"
  },
  {
    "url": "/devAwesome/_nuxt/e4d9a6ee6f4d2508963d.js",
    "revision": "db469383c2e0f46e5ea5d3da5d616793"
  }
], {
  "cacheId": "dev-awesome",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/devAwesome/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/devAwesome/.*'), workbox.strategies.networkFirst({}), 'GET')
