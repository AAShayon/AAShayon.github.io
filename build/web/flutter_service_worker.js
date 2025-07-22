'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "7f0c9f0df6e57152c4d0123e8ffdafdf",
"version.json": "f3a171706639146dc7c24827ca016c02",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"index.html": "3c643d468401b0ec58a38c8771fd8a8b",
"/": "3c643d468401b0ec58a38c8771fd8a8b",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/refs/heads/master": "e5ae7cf0fbd74a15b37794beb7177247",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/COMMIT_EDITMSG": "35de165c849da8222c57d3c5c63faa4a",
".git/config": "5b603c2c0801a9ded3b79159fc38b404",
".git/logs/refs/heads/master": "5305d119b884fe97697eff084e386e43",
".git/logs/HEAD": "5305d119b884fe97697eff084e386e43",
".git/index": "d78721c73ff29aa23b661702cb308c0d",
".git/objects/c2/f765332e7b9d0a01f63600fafb3a34dadabfe4": "90aebe008b202ace8fb8c8d2fce63745",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/1f/175e7a39b51871c77e174384f1e4b8ad2b1d89": "5485f4ece2707eb220f68e3e0f31abbd",
".git/objects/aa/4d67c541ff84a2a1a0d1981ee0cf658c4656b8": "c0acc9eb4c64238f99591c112ac17139",
".git/objects/8d/cc9ad462b3341f2b6180729a8a6505c0694a54": "2e05796cd6e121aaf3c5f8746d3b243e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/14/a552b137e3fd857d832712be53f4fdf81bd8d6": "207b3ee54ee4f092cf1801e4d18010b8",
".git/objects/b6/565fbede3867033461e52c8d9aee45650a6af7": "52065a4b9ff96973c10d9e19b1a66732",
".git/objects/64/720fff9d1043d8150b1c54ce6ee2fa71ff0183": "96a8e74beb51bd76e1820733c7b39f21",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/63/905c081d04aede47bd576acf6502d315a80211": "3ab9008cb5f59a543fb446c18ba9ff75",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/73/8bab994f3fefe84b1f3eae83e302e688ae9bae": "35796eba38ba07f171fd64b5d9348be7",
".git/objects/04/f72fdcba000d34b7d0621ae187394db06ba3f0": "c8ff5aa553e370e2918b694f7065a60b",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/21/471d4fc22f44b9c61ff2019422cd2349ca2976": "8f4765dbd4354afb89857fdda3956a32",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5e/c27dfcd89ba618bed25c7e5157994e74144846": "d2735be96922211fe1348a59761ccbd9",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/41/8d325cd6aa07cb97388617d93381b82cfc3e28": "31d1090b707cfafd53c1530ce711ef76",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/01/dd0736b29a6de30bc3d1c70feffc89be159c0a": "1a74f720046fdddf164accda35adae74",
".git/objects/16/98ee64da804e3dd17debb8e3d4c0acc320f936": "99f19eccd62987bb1c0d1ebc35482261",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/c4/979917d49094d9482d44aacb8c89fb02f9fa15": "8aebed6089d25243bc4a4eec6429964d",
".git/objects/2a/edea400f41c1594488f96ac1f3c4eb8eb94378": "3206df03697059db6c201740129d178b",
".git/objects/fa/145fb1cd52ba42b78f5c00461f859d8ea4b569": "bdbcd905785beb98e42f87c4cee0d148",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/79/d9a5d08a1cea2730197d70e3e1a2bbf159bde0": "bcc3b0dbf0e30b84cef5a58b20f434f8",
".git/objects/54/8d4bb78ae2edd73dd571ccfc8de62c22e7d041": "428de2232f2124c9a0e41f55121e32a2",
".git/objects/91/12c7bca3b54f62122970fa363dc9a3b90fa2e0": "11c06c7637e5232e6871da4ebfa09016",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/3c/34778a541608ccde071e30ea0492949b9ff665": "759eb8acc9cefc3d0e9b69ae09668da4",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c3/06c77c2d3ad97b370a0f90e6a55b46f7eae8f1": "294aaa62568fa262f5f77dc0dd424499",
".git/objects/7c/c06f7731ab8341ca1c151c766435ab1a837f1f": "490e86c600a135bbb6969268db6d8609",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/fb7da30d9caf83f3fbe6d23e0dfab50c8be818": "19f0e0a9c400d1379d0b115caff67241",
".git/objects/4c/e7a5b5db781ec71c3530d235216250352cf967": "1984a04007da5c48d33c227b4ec5290b",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ea/dd4c9aa5a56b7f19b80e2393894d05a1f07451": "178e995c6cf4dee7f770753cdf832b5d",
".git/objects/67/fa6baeec3b525f09f3169cceed715c34c040c4": "7593a110dff0a286729b9d66e57f0312",
".git/objects/59/3c409e8a953a5b4460b862685a97fd1c454e3d": "04121e27ea3609b660e5a8ad76ebb3e3",
".git/objects/a2/b94844037f9bc070f10047eba39ff4d6063ec2": "da8d6d04b2289f2d82a4de04a1ff52c1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/5cee560f9b04cd55669b6defc478af9e16b26e": "fd6e8268dda528e43ae463c709b8fa76",
".git/objects/c5/a1c989490464e02c8daa3ec39f5a2d766c59d8": "03ec0050c219ac39253ac7f97f96641d",
".git/objects/72/05993d84d279d8c339a39fdd3b5407474f29b4": "5a67ca860375fc65d078da78cc3b77c2",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/57/4de35ee4dfdaf1465f0efef64fa5f352af3f7c": "2c1ac01396ca628723f62e68f9328057",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/02/543ead87a12e7693c68fba80d93438ea08338c": "3394eb3ec1acf407ad4ca6a77afa5d06",
".git/objects/e3/9e5914059e27f0250a757d6474dde4fb9f8217": "971b1bbe90d4e4bf4fc2902a22427eba",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/17/1f425b8c04e65690f4f24f350368a1d626db86": "ec1879962487fa8b8742b38e60b72f3a",
".git/objects/17/8dd979812c35db7b5963131d9187ac2fc63d23": "12f81d9cbd065d512ded5667ef3bf404",
".git/objects/a5/563912b942a432450c62d078c2e45b6747a1ae": "f4eed76d0307efcc2c80741bd48c90ac",
".git/objects/f8/c490b19d60f9dd40770bef76f6e0a4d60e3ed5": "29c8c5cc3d30e40f86da43c7e2704a72",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/ed/cd5db5513ba8c9fc36473bf903170095985ad8": "78e5a82532f768d08e7e8e570d284c31",
".git/objects/db/cd6d7f1eccf37cd2b50c8a1d2b091ce8e1479d": "066530b106c07a5fd869150d5f2c4974",
".git/objects/db/c2339f6170b7615896fbf85e83cecdedca58e4": "7e639ca5abb969609ab2b8ab64231457",
".git/objects/f0/06d5807e54d574d3d8d6110b8cad37a66e28f1": "cce2d6ed1f2cf2f5b8495153f1eeacd6",
".git/objects/f7/6173ba6bdb48f34d009f4ad7720f28c1d921e2": "c2c730743ecf1f19c1745ae579ac000e",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/44/ec837e82b28cd6868c4c264c1eddb1f794bd6a": "c563c27f5920c33277415a801a404819",
".git/objects/2e/59118e37d6945476c638b0fd6fc91577f24442": "d02bcfe09b718b02c571e21b98e0260d",
".git/objects/90/81a600535134100884c548933bb0b03bda000a": "17e9f3c29235e2ef3efba291bccdf43d",
".git/objects/a1/6d83fe823c19cde7a1bf581b67288e6d9b3d16": "0edef44b9e61c6ccdde6beaddc7e18f4",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e0/dbfa8855ca5bc54ea02cb9a913d71342abb352": "6bcc07fc7c3cf38d7c4f49b2ea128e40",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/94/44b4b2de688143b5d7e6d2cce8dbd8472a748a": "0e41fd96d93b6eb4967b767334310d9d",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/a9/f0c357bc5b3286bb1b7b9bf2669ff32cff861d": "ca9e651c6e8acb8fe7e47c7512321dde",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"manifest.json": "e343255ad443d75fdc6e8bb93e4cfc13",
"flutter_bootstrap.js": "6ae03368602f85e99ec7cd8f89d404cb",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"assets/AssetManifest.bin.json": "145ce8bae0f673a042ad2840983cfb41",
"assets/AssetManifest.bin": "f69fb355335fcc1e9560b24d422f70a1",
"assets/NOTICES": "2842334d1d826dbfdb2b92cc1254a4b8",
"assets/FontManifest.json": "5f58b2f91ee161bb00ce04afcf9ee994",
"assets/AssetManifest.json": "e04b1125490b2fa9ec452f12ecc72b82",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "ef7c8ecb40e7ab007b2aef5ee7a4dc5b",
"assets/packages/any_image_view/assets/images/not_found.png": "5a8b0b5a27fa16489f7d1be89902ec13",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "27cfa127617ce10593433c073c1c3a58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/assets/images/backend.png": "5e4eaf1d0383e196ab3f668fb1b455bb",
"assets/assets/images/firebase.png": "0e8789d152ed2744d7f7265dc3f1457e",
"assets/assets/images/picture.png": "714ce6bdf250f2a969f3ed246a0210a3",
"assets/assets/images/uiux.png": "e97108e60cfd0f1ead7822c85f0522a0",
"assets/assets/images/statemanagement.png": "bff5cd565bf787cbecdad181aaa6f582",
"assets/assets/images/restapis.png": "17c878302188548f6fe27080e4be1417",
"assets/assets/images/testing.png": "2d4b73b09df7bea38e5b3ba69fa5bb42",
"assets/assets/images/payment.png": "371b8d65eda40c0ce52b78e203a0a2af",
"assets/assets/images/wordpress.png": "f07e2b4cff8523e663eb9801047762eb",
"assets/assets/images/vc.png": "b46336378c753d18f81d0f696310ea02",
"assets/assets/images/flutter.png": "2dd17a7a559cfff76ece7c1808dd9adb",
"assets/assets/images/cs.png": "332dcd028f253c1ecf183995b1466d4d",
"assets/assets/images/dart.png": "cf980172344af2958933a0901bd2eca2",
"assets/assets/images/business%2520manager.jpg": "8f22a68f2ff37ea789127b1db7b17ec8",
"assets/assets/images/map.png": "8b5ac12590fc09e143aad3d44f3790f8",
"assets/assets/images/notification.png": "c40f6988376d7f8f9f09ed98cc396b9e",
"assets/assets/images/architecture.png": "8d9c02c2731733c98ff683afadae79f6",
"assets/assets/images/background%2520work.png": "198bd90bb4faedf67acb7bdbcfc798a8",
"assets/assets/images/ci%2520cd.png": "f628ec6e9c397fff85631ee0c134a51a",
"assets/assets/images/platformintegration.png": "81005391bcb9ee2d7d96bfd67fdb8d02",
"assets/assets/fonts/EBGaramond-Regular.ttf": "cfef53f8ebec7d1dd0ecf4b4caf6384b",
"assets/assets/fonts/EBGaramond-SemiBold.ttf": "28dc0886a23447ac46b47655e676a87d",
"assets/assets/fonts/EBGaramond-Bold.ttf": "1ed82d144b68996d68de42dc8ced491a"};
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
