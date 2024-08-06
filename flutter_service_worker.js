'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "81127ad129dd2249f5ab0667ca0aeb84",
".git/config": "b81b41cf58128c79fffb1c3da6594d63",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5a2f2ae0c9a8229f0fe54b208a492682",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cfea60cfb2f0c35b852ad75dac4a7201",
".git/logs/refs/heads/main": "2db7bfd430be5a4ed3530c045b679780",
".git/logs/refs/remotes/origin/main": "933cd887960d8ecc77820215dbc2a83e",
".git/objects/00/4b5878367b94e04b6c6ba7e3c85d5a4eba4b43": "2ba9c577c437905c86653fb6302426e4",
".git/objects/04/cf0e56718fe185b2f45514c8c1adf557858a89": "6ec56dfa0a31df0bec4f02ace09d93c4",
".git/objects/0a/4bbc62717cc9fe0981fad3b3e4728f68b9dd3e": "f3d3054711007da5453eb60bd2e44203",
".git/objects/0a/774de573777fccabd6118e2af513a338514be7": "12852ba10eb08077ba9314a2e37a7f86",
".git/objects/0c/6288429c9d274f08bcff02317beb5168f87aae": "ee7a8fcb7189a5183504f7d0cd115cd9",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/21630b5966505492e6d78340f80fc3fe22e942": "72077a444264deb01877b1dcf7170626",
".git/objects/15/814f0ddccef601377b032b923580a80d9a8fcd": "51704e4cdb082279f32f4675d21fd7c2",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/28/8d0fe1a9f706f4a9fc8d81dc862b43016b643d": "2f08cfbc6e55cd664b7bd339e9e57ec9",
".git/objects/31/290e9178f7360db15688a5cee9773f65215987": "f051d60f975ec4485f3341e02c84b4a5",
".git/objects/31/71398397bc7d0e03f1fa4d194f04284d917bf7": "046bf2b0d0080f7f692dff9bc8da1cc5",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/47/6c8b6e715795b7f2a4280b591495145baa225c": "d40b98a4deeb1b0634c25373d1281aea",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/68/16d0ec14ca60cba3316bafdb68d62a169af318": "93991dd57b0a21a1ff59e3f72f53a403",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/91/3e8b8704b423cba3284647b70fc4638842a716": "582120108674076cca7793b5b38859cc",
".git/objects/92/ef645f95a56925a0381c885ce12e69a62adad9": "f29dc6f9064ba5d9497083eef175f895",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9a/86af931f98268cec797e8a6b6ba6718140ed11": "e0b8a0e60d836013831ce8ea7275baa1",
".git/objects/9f/2a79ed235713daeb598a61e88feb6b2ac25290": "401e4353bae6210aa6d1a64cf61867be",
".git/objects/a5/3bac3c3f492fec2dd23862e80d66c8ef520685": "07af4aa4fe18168cb254a1d2545de6bd",
".git/objects/a7/71f22b5358ef26b44f12a85451e3f0b10ee739": "57d42da4cccde6819a8fe84bc98241d3",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cd/d586e0ce4677142d732fa093219d294096ca16": "007714f10b063ed4b46d4b88afa4b288",
".git/objects/cf/62d5abe5cde4de6a6808bbb53a36523f092676": "a9ebb343d792250aae09e710c51c339f",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/fe1f24ba237c4400b948f3f8422f636be64825": "4da3f81b8619a093ccedddfe9eeed005",
".git/objects/d6/13770e37eb78eeeefcdec43835e547966de5b2": "829824ce4793c59d79431f32d473d355",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/a1526e3961bcb1e0db789c362bdf007cfcd01d": "d8a39c634357090af01e109e22a99e6c",
".git/objects/e3/64ed21cbb31e6c34c552c70e16d562f99d66cf": "219bff5851485c175a8ddb9562e3c6d4",
".git/objects/e4/57f6f8e3bc8e0ddccc6973e9e2a74cabbc6ecf": "b535babe46cfb9a72c9c985c2280d672",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/cb02d641a12e632a6a763f676b8dd5a11fb5e4": "fd696a887aca0bbeb08d809d5ddf5e2a",
".git/refs/heads/main": "560a14a81f874a25dc391ce30a6dc8ea",
".git/refs/remotes/origin/main": "560a14a81f874a25dc391ce30a6dc8ea",
"assets/AssetManifest.bin": "4cb521316ccc077d4bcceecdb8d53f57",
"assets/AssetManifest.bin.json": "b7c1f8c2f873d360d758dba534d4146a",
"assets/AssetManifest.json": "f1aafb8620c99301976f5044ae68ca22",
"assets/assets/cpu.png": "48f2f4ce7ef792541f567bd1f21e362d",
"assets/assets/cross.webp": "426a8dabbc62fb8aa2d19fa32696fee3",
"assets/assets/favicon.jpg": "64a8c55258ca6f254df130f513106a6d",
"assets/assets/link.png": "3d88fd5ecb69ff89ffac3ea2a90fb2d5",
"assets/assets/platform.png": "fa3c1905699022e9622442cf4f7df3a9",
"assets/assets/scrollanimation.json": "5c2494762ad30c88736879ac80477a13",
"assets/assets/segmentDOWN.png": "c31763969f90c20f5955db383f853fce",
"assets/assets/segmentUP.png": "e79dcbb564060ee8194f0279f0ce7781",
"assets/assets/tag.png": "3627d6191cda5ca2904e2e665007e03d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "240a339e2124924b20d5cfa8784dba9a",
"assets/NOTICES": "bf261f43c178a8a7817d65103de54994",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "b51b205ca3b85e806b1ab3892b67be80",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ca49142a7b8cf508e69ec5b5bd83553b",
"icons/Icon-192.png": "b51b205ca3b85e806b1ab3892b67be80",
"icons/Icon-512.png": "b51b205ca3b85e806b1ab3892b67be80",
"icons/Icon-maskable-192.png": "b51b205ca3b85e806b1ab3892b67be80",
"icons/Icon-maskable-512.png": "b51b205ca3b85e806b1ab3892b67be80",
"index.html": "5967d3f5b1f0d43fcb2ed445ec80cf17",
"/": "5967d3f5b1f0d43fcb2ed445ec80cf17",
"main.dart.js": "a28ae5dcb0c8b08a9b899792ae83f63d",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "0325640b78b9f97959290dc5ebb8b3ed"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
