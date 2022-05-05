'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "92e851a10e7ecf4eb63968d6a43f9b02",
"index.html": "e76de138a5664c6f7a734532727325ff",
"/": "e76de138a5664c6f7a734532727325ff",
"js/jsQR.js": "21f93d9a38ffd2f28bf4d60e280bc22e",
"main.dart.js": "2ac081c39d6b2aacba3844aea2d0ced8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon-16x16.png": "9c1e4ba475507b21236b0fb7843e26a6",
"icons/favicon.ico": "22ed96a81531f78d065b99e6c723a12a",
"icons/apple-icon.png": "c092ce2ca303370c6fc0213d66a968a5",
"icons/apple-icon-144x144.png": "267d56fed676af96627bb314e14976a4",
"icons/android-icon-192x192.png": "a361eaa0e7d199bc533444c46accba1d",
"icons/apple-icon-precomposed.png": "c092ce2ca303370c6fc0213d66a968a5",
"icons/apple-icon-114x114.png": "8b383ffde7f0d84700bc2b18fc5896e3",
"icons/ms-icon-310x310.png": "b2e1a9e61e9ee37243e0efcc6981dca4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/ms-icon-144x144.png": "267d56fed676af96627bb314e14976a4",
"icons/apple-icon-57x57.png": "42f08d9dd276321321691eeed6e50d43",
"icons/apple-icon-152x152.png": "5c3b96be16635eddf7b87cb1da1e38f3",
"icons/ms-icon-150x150.png": "f0b5833b06d9a003eceeffaef02a6e34",
"icons/android-icon-72x72.png": "2daf676062ca2690dbcbee1b09905250",
"icons/android-icon-96x96.png": "d7953600501877092f07fbdd8cf3aeb7",
"icons/android-icon-36x36.png": "44d31ef63323632f3aebfd493f1eaa74",
"icons/apple-icon-180x180.png": "cf1e26942ebf042d7ffafe74d59958c3",
"icons/favicon-96x96.png": "d7953600501877092f07fbdd8cf3aeb7",
"icons/android-icon-48x48.png": "4d8259c0d54056f7ba5f3d98a0eaf3ae",
"icons/apple-icon-76x76.png": "bd6476dc9b53a398f9861f8b9a6bc38f",
"icons/apple-icon-60x60.png": "748ea971b0b6143fa6f8e047920dc65d",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/android-icon-144x144.png": "267d56fed676af96627bb314e14976a4",
"icons/apple-icon-72x72.png": "2daf676062ca2690dbcbee1b09905250",
"icons/apple-icon-120x120.png": "6d5f125e29cd0dba80c770bc2c11d041",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "b394998f8d68be9d9b2527902ad506c2",
"icons/ms-icon-70x70.png": "201951206d2cb48a1d8ee53d65a884a1",
"manifest.json": "054672c11632382b29b3c5dad886c274",
"assets/AssetManifest.json": "a0102793394d24ff121028f23f3cf089",
"assets/NOTICES": "3b4457d0ea613a2702025fc1c1fe3636",
"assets/FontManifest.json": "89820a84c98d66a124c092fca01cca62",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/GoogleSansPlus/GoogleSans-Italic.ttf": "df935be2be393589544e26a71ec6c3a8",
"assets/fonts/GoogleSansPlus/GoogleSans-Bold.ttf": "0f99a8efafd73fcc501b412dbf89ab29",
"assets/fonts/GoogleSansPlus/GoogleSans-Light.ttf": "e53942f1326ecf00018052960f0cf5ce",
"assets/fonts/GoogleSansPlus/GoogleSans-BoldItalic.ttf": "c55952299ea9b66605f226cfc22a3753",
"assets/fonts/GoogleSansPlus/GoogleSans-Regular.ttf": "4ca177df50208f1df210bff0fe649f98",
"assets/fonts/GoogleSansPlus/GoogleSans-Thin.ttf": "5e79c136d8f1ecd2cd66f996b35236b3",
"assets/fonts/GoogleSansPlus/GoogleSans-ThinItalic.ttf": "97cd7839eeb7eea0fe3e08eb3c5e8891",
"assets/fonts/GoogleSansPlus/GoogleSans-MediumItalic.ttf": "369290d0bdf52909d900a9c5e3d1afe8",
"assets/fonts/GoogleSansPlus/GoogleSans-Black.ttf": "1ce8bdb3400837a1be6c1d7044dbf555",
"assets/fonts/GoogleSansPlus/GoogleSans-BlackItalic.ttf": "c794b7ae2cb5212abaa13c3cf10bb2b2",
"assets/fonts/GoogleSansPlus/GoogleSans-LightItalic.ttf": "a4b572cc56ed6a58b0b95a71a2c4ee87",
"assets/fonts/GoogleSansPlus/GoogleSans-Medium.ttf": "ed5bac264c81fbf11944c2dde433241c",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/quiz/computer.svg": "cc38782a85711219a88485cf47f57f02",
"assets/assets/icons/gems.png": "0870cc2e49bd4cde1cb999e5da6d3a18",
"assets/assets/icons/energy.png": "e56ad61c1ba32783269ccbf6fd87d88e",
"assets/assets/icons/rubyRank.png": "7f1ba61b80f219cf5b4246633b6407e7",
"assets/assets/icons/sapphireRank.png": "8a44ce23ed6484ba1c021f9bee1dbb58",
"assets/assets/icons/diamondRank.png": "f31a86f329155dcf90f042e79d8fe4c1",
"assets/assets/icons/emeraldRank.png": "0f7b96bcbc85c7fd1beac164b58bce08",
"assets/assets/icons/goldRank.png": "302e7a53b74140bb86c15c1527a36773",
"assets/assets/avatars/a31.png": "b657377510d9df6533e91cf99eb1e4af",
"assets/assets/avatars/a25.png": "0264dc7070691c41e748338ae9271e5d",
"assets/assets/avatars/a19.png": "e989cfe2c62d1cab002b202731992c73",
"assets/assets/avatars/a18.png": "c684e8ea90b2499622f16cf366d9ab6b",
"assets/assets/avatars/a1.png": "b87467f7da947eee8402fbb171f45398",
"assets/assets/avatars/a24.png": "4625498c3c057440e92eebecf9dc902e",
"assets/assets/avatars/a30.png": "26ed92b66d99969b6b387a10703232b3",
"assets/assets/avatars/a26.png": "09310fdf7826f5e79624a3f6c5d7761c",
"assets/assets/avatars/a32.png": "c44f800d79756e078a76a9c6b8ab19cf",
"assets/assets/avatars/a3.png": "f6ccecf9a660aca949cd98f0595ed56d",
"assets/assets/avatars/a2.png": "a837176f3d1d7e19c181766aef9f7ccc",
"assets/assets/avatars/a33.png": "56122be81290f31b744e313603dd5977",
"assets/assets/avatars/a27.png": "b0a08f9cd51f16b6205301a0a79c0adf",
"assets/assets/avatars/a6.png": "2c935fc88f90677695713bb88735c093",
"assets/assets/avatars/a23.png": "1fe038d7d0f989dae668e5ad94932959",
"assets/assets/avatars/a37.png": "49bbfbafcd91b406919b8d69fa2a2ada",
"assets/assets/avatars/a36.png": "b042c95bffe0bb5e00400b6cbd9f8eb2",
"assets/assets/avatars/a22.png": "1ac534ff6ea252e0897834219e59ddb5",
"assets/assets/avatars/a7.png": "844556930731906ce11acf0d64d8e8b1",
"assets/assets/avatars/a5.png": "98eb89242e391e798f5eaf469b369610",
"assets/assets/avatars/a34.png": "674e968d628c9b35400186512db33930",
"assets/assets/avatars/a20.png": "cb7cc57017bce96c04fcc692ed94e291",
"assets/assets/avatars/a21.png": "1b22e09b43c8544e56cd398862049b86",
"assets/assets/avatars/a35.png": "c68c1f0addd5095f89665a113da5347b",
"assets/assets/avatars/a4.png": "976eed21c39556e633a6c6da52f7f915",
"assets/assets/avatars/a10.png": "d8711537c043d075a90e1dc56ae224b3",
"assets/assets/avatars/a9.png": "d286951f3ca31c66bacf17cdfe446ae0",
"assets/assets/avatars/a38.png": "2101347fc5de49c5df95616f2bee3118",
"assets/assets/avatars/a8.png": "8f6a87bce36fc8d07570fdf6db391a3a",
"assets/assets/avatars/a11.png": "793723147cca15e92d88fa131e2c297b",
"assets/assets/avatars/a13.png": "2f1f1fc9bda9878f06c35ba3b9d40a6e",
"assets/assets/avatars/a12.png": "5ef3326f13d550d680d4fe8daa6b7888",
"assets/assets/avatars/a16.png": "85aa0cd741be0f7dafc95be84a753534",
"assets/assets/avatars/a17.png": "5ee1c00f99a9d936d65d8811274698b6",
"assets/assets/avatars/a29.png": "c3d324990c13cce856631f88a9931599",
"assets/assets/avatars/a15.png": "5168428d9de683a79954d3519194d2f5",
"assets/assets/avatars/a14.png": "da79c9c4cc72d1f6260f0003a3d6b667",
"assets/assets/avatars/a28.png": "173f216509b24769e4701d4c41bc9a35",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
