'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "92e851a10e7ecf4eb63968d6a43f9b02",
"index.html": "ff1f23a01bf4dc2e124702467132623c",
"/": "ff1f23a01bf4dc2e124702467132623c",
"js/jsQR.js": "21f93d9a38ffd2f28bf4d60e280bc22e",
"main.dart.js": "5f1d40742790d59e5fd79c25decb0fc8",
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
".git/config": "aea514c708f24ea66e36a53a018b37c0",
".git/objects/61/7ccae6fc2aa78aefab5941a884e1eb3bcabf3c": "aa1b70b70480cdf4ae77af4ee1fd5b39",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/92/fbcc8bf79b2717cb9ae774f79600cfaa08f7d0": "a2ccce935c98b4b47302a9d94214bf6f",
".git/objects/0c/8f4a22afc05cec08c3388b63e5817c1548e568": "9fe3e51828e26d6bdda5fd459d943dab",
".git/objects/66/c748ccf71d7d50394e0588c2d196c52da64efc": "76afcb1788980496d0f295853bda4787",
".git/objects/3e/fc623afc6e0c5aaf05b5f027e74b5482ad5b2c": "14c0af409acbd00dbff3dceb9f577ba3",
".git/objects/50/89c388abe8e1580e527783918be07e60b761ac": "fd1856be939796d79e7c59ac3f94e1bf",
".git/objects/50/aab6c3baa88d1b782cf21ec7b889eb09599527": "24073f84c9b14e761bffa98c9a1de585",
".git/objects/57/1c9c0c88177f92f9ba0fc2fadfd5b17ac7289c": "7d8282416e3859c65c6a6d0034a1dd53",
".git/objects/57/93ae175fde3b9b15fc5faf002249965c22efd3": "99cc9801e7455f7fffe4899373668c7f",
".git/objects/3b/8a211ad897f3a98161eb994bd832a2c23eaaf9": "3935d6091e8e23b02d19a924acdd311a",
".git/objects/03/3c9444bbae216bff6bf19910f4ed08f31b81cb": "0f87786bc00adf3baa4473d3d85c1ee5",
".git/objects/03/8c7416795ac0ba02c17367c312074b24c284f1": "b3688a7118d5bb009c4f05e00b4dcad2",
".git/objects/9e/efc49ca80cc952640ada0bc7c4eafa2ef99f46": "d3e5777de4bf896306c97f0551c82133",
".git/objects/04/55c4d38be9e8fbed6930a4c3ba4d7f60fc9b88": "245e64e0522b76548549a957bc855548",
".git/objects/3c/b5c8e1cfdad13333617446ff9f92e9f8bfeaee": "2eaf0235f8731bcac8ea5919c1c37c26",
".git/objects/3c/26b1f0650cd19dfd033b9880c5dc1c4bd0cfc3": "f23161ad1f717cf592ec847b38a97ce1",
".git/objects/56/c0d319139438e5e2e87583a43f8859b40383a2": "8eb68325a0865058d6b884251bc2bc84",
".git/objects/51/dfc9972cac366bd2a1fd28852b79d106a23458": "a6266e40bc7f296bdbf2ae80d27a92d9",
".git/objects/58/37de9280a65dbc5062ce14f38a8b7cbbb8f0c7": "5fc0ce3fa93c69863b065f3e7e753af9",
".git/objects/93/36ae55b107338f6d85229e77cde0841c400c8d": "3a8ae22a89415db5fba4e77a5b436001",
".git/objects/60/21ffd526f1162270348599a48fab9004754091": "c83191f0c4e9bb94fd69514ed8dd6794",
".git/objects/34/24a042af6611cb205b6360d912c78b3e42df1a": "d9c64233516b8d1e1fd237b8387bc43b",
".git/objects/9c/02078524a79162121ba0d9bffa67a5099b5e09": "5fc3bd2d09023e9251e981962a7634f4",
".git/objects/d9/399b65a8633399749c6e8d518df196e92add4a": "bd302cf1eda8e2fd5390aa07aa3393e4",
".git/objects/d7/cb5cee09ecdcc9fe10c83c8cc44f3371fb2ff3": "08d70a0a70893e300726e58688af7ac2",
".git/objects/be/122dd343bafd7730fa94e3f6c802132cb679cf": "10c963c83e88152312c09bb044e5f6eb",
".git/objects/be/39403e97c14d27c22277de3cf361d3aceaf8d4": "3e9e5952111b3294e046a45bafa0f9e6",
".git/objects/be/a9c47b6fc780884198894c0cf435e8b898e71b": "ae45146b834a2f1003cf6848a940516b",
".git/objects/df/5d1f101a849cccc26ab9098532b627c767b78a": "61d84b24190b8bd32c8befb5d5dc6d15",
".git/objects/df/e5d10f80a2a6be725332421376c74589cf85f9": "9d1622d1710a80ece510e8582a091245",
".git/objects/da/2a6838ca5fca0a65f8fe28e6462db6682d384b": "5dab11e458eba35bfa3d093446305633",
".git/objects/b4/e5b4f2ccc7b0eeb7522e5fd449a6c78a605ee8": "988aa1f4612f549dc57d5a6cd1861bc8",
".git/objects/a2/a0cd3b465abd01c0e9e77f79c0a10b98514d2a": "166f4c850cb12dc7b4f04e700dcf4c7f",
".git/objects/bd/2689b7dcea451a429236fba1d1b657b5032b1c": "3c2dc25cb9f3204c828236853e0b7fa3",
".git/objects/bd/6116d5d1e2ced09f2c45978bf1a7d4f83b6c5f": "ebd68901ea574900b0642a86430b95a0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/7a69559960e9f27732c5620145b3311b92e1ef": "ff52fe7c85841b8953962f51500868ae",
".git/objects/bc/c0d0ad105b8d8553c0bbb42c22a80f35783d6a": "04c66ad423ae60db96108305b46fa0c1",
".git/objects/ae/c4c8834a2b7b26f97a12b8f9b2edafa338976d": "7c657d64f28c24b67ec8cc7c2ea502c2",
".git/objects/d8/0480a24092c0c5299a3e99051d36d869f6558a": "df320a986e982e3c4c47848321a21853",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/b267af6facdb8213d5df22974a9515315b2331": "8b77785825bd86f425cae1193d010a58",
".git/objects/e2/904c882e377708db9734252fcf2330455bd8c6": "35bf6a9d643c458515aa0d58e4278a07",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/d4178ad482ed9c58476f8755471c9b5add0942": "460dfeb959f89bba37f1919cb08d5c72",
".git/objects/fd/8f1602a71a75b6889903251b5c06ca9c52f071": "044a6e575993176558b5fa1f5283886f",
".git/objects/f2/f178a73a3dc3f0008cd15bd166648f565cf789": "37cf0248d98069d2637fd193e36414c1",
".git/objects/f5/e2fd860908df73f32f4e6f6bd833730734ec0e": "9e86c5d8a621f86ee49b35704da9aa45",
".git/objects/e3/0704eb86d8f6f58ed36f723af04aa03698f6e3": "8774fbad099e12cb501ead41595ad3a6",
".git/objects/fe/f5d5891374153401a1eb12849148bf844e29ae": "e8313f0f57d04afa4b003aec70e3bc2a",
".git/objects/ec/cd43fccbc65bbdded02c808593d63ec808b4db": "6dd3284bfb283b4af2e6848679704a55",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/715e43360716be61b35003a17948e788406299": "adc0cf69c8a452168274d4d7dee3c236",
".git/objects/20/abf7e4c41b7a7fe655889b6def60c96e25f778": "ddd0dd56d67062aeb4ca7a92464911bb",
".git/objects/20/9ca351aff853f1ea999ef6050dd55e3c45560b": "c30e1999ac93f4340e95b0d119437761",
".git/objects/18/add82f32bdbd1e62c446dba865ea5dea3a0423": "aa0ea60585e51c70a4a79e2f20af58fb",
".git/objects/4b/a6db214ab4e17e02f5440a1dcda228f186e80b": "76d2e58b16a051f4b41c0d7972675eed",
".git/objects/7d/ba2de44ed0b761901ad2bc36283911a2c72085": "3f97f39e62855cf6c066dc7f98fa7188",
".git/objects/16/f9e110ef08c98d7c1b3386c9cddc673ccc6469": "dea2994c24c89c7656834ec8069c8780",
".git/objects/16/e5347bb02f2d68346c8d0c60537b1f3d8b66c5": "df15add7994d2c20164f2d97a3bacdc2",
".git/objects/45/d42c57c0955f5b5a0f1bfe8478796da7781ef8": "dba26608faa11b6c4d63524ea4ee9050",
".git/objects/45/077d9d4a82c00aaf30291e0ef952849cc74db1": "d31dbf406e06136e1facd17105c546af",
".git/objects/45/453ac2ef36428738a6bd931a5bbc1150e472d3": "a3cfe71ae74b493349375ab83b28fbb4",
".git/objects/73/ea1651f0278094f6cbe29eb660404a93425bc2": "a9fd0dbfe4e706d89ce0386f2983283a",
".git/objects/73/24ac8b917c4621e3a0448ddeb5c1ae4c01a706": "fdf667bdfb1cd1329148154f9860eb83",
".git/objects/74/834705ca00f83fdfbf98e1659cb1a1307861d4": "0cce85945117b2e0ed80645966c8a285",
".git/objects/74/e0af66b7426ca79000e773039a26b64e010b98": "9313518c48d66ce6aa557bf3d1dd5264",
".git/objects/17/f7630c16ed81238e39f62cbeea6e8fb090446c": "bf9931be99ef3d1355ff8165f5b97a83",
".git/objects/8a/5e502a885718d7742b7abbb6125a87a2d54f10": "68c9dcbc35fd28f4e2c477e0861aa991",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/f22b9ad1eae7e86377a6cd30ef38d39da459da": "7d3f93839412188245e61175e1911168",
".git/objects/26/6af117edbe8078c0d52a71d6de64ac392db7f3": "85aea20a793c5a558d8578397277bb80",
".git/objects/21/59bd0fc62183bc149c4c571b3eb446369c2b0a": "ed6a21cb293406b85c2de464b60aad43",
".git/objects/4d/f8e708019feb44757ed8b12b66843f2f7adc91": "fcb7f766ab7a83f42627d3be73cc660b",
".git/objects/86/ac33cb8b203ccc202caeaf0755ceed1f3d2d21": "5e55d0c6ba63d44743839c47966b4b94",
".git/objects/72/d2651115213cdd66eccbe687df4526272ee241": "857e6301db1c1440855c719eb981a236",
".git/objects/44/59743ae9e1cdc4674ad96ab0ac2610831fac10": "a7e149b216413bc1f44bbad169af0dba",
".git/objects/2a/f7ed66f52e1b08c104bd9cc184a724c9846e43": "b2dba6d5250aed5db6bd63d7dd17540d",
".git/objects/2a/c597d41030901ca50ba2a1b6e3163dcf7c08e3": "ec969c5ac4c2a3c1d71f52779fb51234",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/b59cc44b888254271bfa6c45f642e3c960a72d": "4ee694b5c8a28294da545c1473120c28",
".git/objects/9f/cf43e0d82def6f0138a93b3b339f9ad70135ca": "dc95036e2cb757e9ef64c359e005bba8",
".git/objects/00/1968ef34d41af8197bd45ab5d77b90f43cd401": "7a6c657c0cf5ada3ebf7fa79222cbc51",
".git/objects/5c/5ae8cf04f093c39471602d718e0554daa6e067": "c9b80b6067f515c451db6868d237bf99",
".git/objects/5d/186bc5436bacd955cd60486374735bf8655b92": "99279dcb8455509307160c8aede400ff",
".git/objects/62/2563d604e3e4326b5b468eaff6edda364fc77e": "b5f73e0da557a42b652f01efbf7a90b4",
".git/objects/98/9c0b6d62a38404585fca1a24e29da89479c7b1": "b86a936af028d4f2ac6ed2ad398e16e4",
".git/objects/53/f368b694f52f1f478d4db42e8f01ef70639f21": "cc3dbd61714788fa842997cd20681680",
".git/objects/3f/5e5654464dfda62af2d0b8c3e78b6a60ed4404": "8d5cdda3a959b751a281726e70169326",
".git/objects/5e/ae2d5efc9627ac630f8a0e7b0fbce465ce7f86": "47d1bc4deafccfaf4ed7d0da8b74fbbc",
".git/objects/5b/4afe4b316f75d98667be507ed2f332ed235252": "68ff8c8487e8c17399459a5feccbc78a",
".git/objects/37/c49901c70bbf2896cc9ec23c2fd3ff69f35eca": "36c213a0933033a3df105a9e47446659",
".git/objects/06/6ffbc5c9189efc85c512ac7e5182a15fc919f1": "055569d0829d0838cbc43d16adbf52b0",
".git/objects/6c/d8b63f8e8e7e5192396b7ed8bc16ed3b19c8d4": "4765dacc1067dcf8307fe630e529b0a7",
".git/objects/52/c8d81a4d775b1fa605427d2650662fa7d95fbc": "9db506c5ea1013a268da49ab66f589ea",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/55/44c010ec3d33c7358e6d86ac0d8a63184ffc4e": "48e72ef957e476c55f63ac8f26e0fa66",
".git/objects/0a/2ffe303579f0776cb701dfc746042e01cdff7f": "fe5ac727f6599579f5c02e27c4fc42f4",
".git/objects/0a/0f64d7957ddefaadc8d18909949d8cdbcdff9c": "9c82f9517311e7b7bf0a47a058445847",
".git/objects/bf/dcd972d70c9e37376cdfa9ab55d0e7a3065623": "885626ffed0d14728de1159d9405fc44",
".git/objects/bf/713277168b0595678afecca14b46f1c0a4402c": "09e9177c58cfed1799b4bbb0e44b38c6",
".git/objects/a7/47f7e654c4e760dcc5fd6a6aec0bfc617a5ed4": "180ae8e37df5553c56dd953ba80e5cd8",
".git/objects/b8/dba478ceac492e6a218c0ffe4f4a38518f1976": "248d9095f22d5c18fc2aba84c915e487",
".git/objects/b8/795e983941715a98d094ca061e5f8e603cad01": "efbf198c0a0e51cbcaa093d768a479b4",
".git/objects/dd/449ceea10e559ff07ffc7f7993fb1d003b11e1": "317d7a9edcd17888450e7920e371a8de",
".git/objects/dd/bd4e68b2fdb2dea9a51f6f051c20ed1b175ad3": "8ef59b7496ad60c0d9714f953636f797",
".git/objects/a9/4edf43ad53a1c4139359cbc1d3c0ffc4de095f": "e985d7f3cfadd863a16448d2d95f36bc",
".git/objects/d5/a1282143e1dfca0e1eea03dd199a8d6e637c83": "1bb77caa523cdd4aeeaf3801b96c45fd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7517bdc939d8ad2c04691a509ca3786afe3b6b": "81532f9130caf08ccde9ae38fea4429a",
".git/objects/db/3e3981bf7c754ef958f53d9c41291943eda911": "17f971c0da733dbb9f41784ecd6d607d",
".git/objects/db/06cb42f9f757c0f9b51a142c788ea1c5564316": "da7bec5a5642459499504cf56df0fc9c",
".git/objects/db/fcc14a4eec9cb678f8daf492b989285fe8e97a": "7128ec8db65e03af22ee2208ab0911b6",
".git/objects/a8/ee281b07b71ba25ed271aa5ddd36be4de4fa38": "887bcb646e38491ddefd2e893a58ffef",
".git/objects/de/13b7c04872130bdaa64c57837455310750ca34": "5e4dd07631b5210c74bb66d7c5f08ddc",
".git/objects/de/8caaadc034ac75f7d08380ee717bd370ab7817": "3823e4628c8b1a517ee1fa8661e2b1c7",
".git/objects/a6/b56c2f9d5b1e7915699aeff5efd366f489e1c2": "1e4e97303f3dfd8fef3c9eb0ddc053ac",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/25fba40c3c4c5d55a7f7d74dc9304209d8756b": "54736c49dfc9a590dc95d881010fc9a3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/f2c9a9b37e3d029369e98cda2e80a2e9591f46": "c362f5a41f61af1ec3607dd2f13418f4",
".git/objects/ef/761327c9505889cdec9e55f6eee42b373f1027": "165a941edc253b018d9b6183b23362b9",
".git/objects/c3/6f3d96bb44d12f8c94f5f470a8c10317843781": "a81add23f5b6ba291e2a2608d13d1e3f",
".git/objects/e1/2d34a2077f4da7d5048973ad1057d328c8c87e": "167541a1573c460526e5f42abbf8d7f2",
".git/objects/cd/7a3d22a8b9b7ac0e0d04d40caf9ec8d9387763": "b9707fac283d7f3feabc0cfe965cfc75",
".git/objects/f0/f893309cd85798d4e5abdecf0c08b0f232d6db": "0bfa647f64aa6c70b388f3f634f91fba",
".git/objects/c5/a5dad62f85d8e133b260abcf652e2516805af5": "28751c3fda074c751362ef5ceb912df3",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/67a0e7ae0c8dc8d046eea2a692aedaed2208cc": "2f5fb4d9f1b265d0e9ed0827b1a09651",
".git/objects/f1/dc2934435653757f64417bb01c8f574ec15d6d": "2ed450405ab194cd2aabbc1f478fb8a5",
".git/objects/ce/f5b9b23c349b00eaf22c98c55078ad46d3723d": "9f9221034c538883f3d370aa7d43ef71",
".git/objects/ce/bfc68e9fcdf78c3a55e421f7a19aaaf11705dd": "15756fc1a52a84574ab540088dcf4c01",
".git/objects/ce/5b4179cbf8e88a3b23266c238f088ec48bf53a": "5ce4f28cb5dd41444ab1a86527807ec4",
".git/objects/e0/a1ddc7e2dcbc566d21d18ee1c371ca3455a5b5": "91609c0895f7b275531b602e3d441989",
".git/objects/e0/d8619346ece0f1fe272dd4ab11138580493318": "f028a9ebf8bca0cf2b80317967b4c0d9",
".git/objects/46/7fd237212876bfbcdbe9493125b08821f055a6": "1f449fc5aa3b15c39ca2ee04ff1f6aa4",
".git/objects/46/48d43a712a37c8647b46df4dc3c8c672fd3096": "8ecc66e0cf10419097f2733873df9777",
".git/objects/2c/fcd0815261ff7f6e59cbae0abe912b6abfea61": "005a7e63dbed79c871f5fb43843f4b4d",
".git/objects/2c/69761e4f8fcc6094ddf34fa218753f643f29f1": "5f162ba1065168cc11eb6e8fcc7fe41d",
".git/objects/2c/bca90bb9635f54908814cbe5e5b8f057a5e1a6": "b3d2e096d1e4bf53d199780836fddad2",
".git/objects/79/7ff85ddff8addf4517c231d88851ee5461d498": "b630eac6e6f4a00c135f2a80ef9f2a61",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/a50efc46fcefcb2c4f97ce68a21c474f97efd1": "c771d5be4725232d7f1ccff1e84b1321",
".git/objects/77/7be3f1df9ed756021ad3bbfe14495bace603e0": "35dbe824a32e3e99e3564dda718b8476",
".git/objects/48/07c717fbd89f1de11bac8e6b37dfea7f21df15": "757617b783f3e35857c591bac40eb22a",
".git/objects/70/7f610de85046da091ec6eab461d1fbc7afb8e3": "ea331287d69444c4108a078a3e211c3a",
".git/objects/4a/54bb2c34858b2bdc5220ac6c75e7509102ce3f": "c74e61eac56bf9abe79c32fae51602a9",
".git/objects/4a/f93d4b0cc41e2a9e7b98a03bf628c64594b8d9": "17fb25d79167677401842ea6b4e8be17",
".git/objects/24/3fdd421bbffb34ed42b0cc293ac694077cfc85": "80801eb4bfb6b6dc0ae0d34de1c89dd1",
".git/objects/24/fd1c27b501e5a236b00bcc88799cced1c3e99d": "cfd1ac1c2314e4838aa9e2178cadd6cb",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/05d32e30b163e5a393be6d45a3a679fea385ed": "2814c2fa79535cec3fc73cac6992f358",
".git/objects/8d/81ee7f04393c4d7b38f99c9dc5d89083eba7cc": "d4c8c5801077d206372bde5eaef722f5",
".git/objects/8c/06538df276f5e7725ad689674f5e1ffbeae8b0": "7f1df170544f32eda6f69d53e630e1b8",
".git/objects/85/5fcac84ac45c80d2b53465831ad76314ab143a": "7029f82c755e289cc3e525133f223145",
".git/objects/85/5c28a58a11be915e26d8d1e6d2d5eb71d3cf2d": "4cfd168336fda3c7f502c0973cdf35de",
".git/objects/71/52986f27652e56fa98917f9e31528ca83d1467": "89800db989d8465d0276818cc02cb787",
".git/objects/71/4d9af87cba34056df91fdf363c46f52384f713": "52520be34f9df541de358b0020fdc038",
".git/objects/71/b0d48dddcb1ffb99a494bc030c950613c2712d": "e93d22611ad77e51c54c9af3a1c0cd82",
".git/objects/76/67b6a377d16ac13bfa59e332af31feda6fd86a": "d8d559f76cfa2483a2bbde467486dd1c",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/4f87c3535b7bf08bd793a330d7aeeca20fbfd0": "547edc9bf8c378d01a8cb42e57558574",
".git/objects/82/7738601fde3ad9a71942b0d63b4ee085de8ec2": "a1fa7d8539db66ec2bd088b29681a25f",
".git/objects/82/ecaf479b73beafc863768683cc6fe687bf2f0c": "47dbdd4f3fc6c21c562b4a353f644dba",
".git/objects/82/aa73871308feccf8283fa1d87a66e78306f2da": "0c547fb580cd728d9a518a0e72683b05",
".git/objects/82/cd4c86ca917863009aeb5965eb96d4cb679100": "23ded8b50fd5c109b8c867428d977f9e",
".git/objects/49/692d8861b44ab018d455087f835bd91928c0a6": "f4df65cd815f10dc6b7f83b6f1ca4122",
".git/objects/78/454f84f0c0a50cc3d4bf3e981591f61bfee317": "09f87ff9e18e5c8d4f045eefba2efc80",
".git/objects/78/de185c08941b7d7d29ca59e1ed44aeb781231e": "f6ebd92f195b521c7fbe3030da91b854",
".git/objects/7f/c1ef8181c42a29e6777bb4bbbb08665d3df7b8": "5ef9b1cf993597892134b368518687e6",
".git/objects/7a/1d2a51fec025baebd00ce1b219bd0e22d86c53": "f6fac14627cb39ed7134788db75861e7",
".git/objects/14/cfb12c37ceccd5bb17b1557c1f0fddf0d644e6": "ba81cf7f70da6e0af546e0f7457dc674",
".git/objects/22/659381b88b6522077730350c0afe2b4803ffab": "bf370c807bf41bbdaa94c00c5a174a3f",
".git/objects/25/74092906356fd8d576a70b4ffcbdfb84d00313": "488126a812eaa284edf9f7397aa19c1b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a7c1017279b2e1eb5579a13446cc2e4f",
".git/logs/refs/heads/main": "a0dee8035ce7126ac6c1f56b087f0757",
".git/logs/refs/remotes/origin/main": "1ce2cd8d9f5e8ec673a7334e976e7dcf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "fcdebc1dd8cc98acb2a01fb1ff47e614",
".git/refs/remotes/origin/main": "fcdebc1dd8cc98acb2a01fb1ff47e614",
".git/index": "c25b7b2d6a886f897f8cd74c0d5013af",
".git/COMMIT_EDITMSG": "fdd80bc13946e8a57abb1577fcd4e87d",
"assets/AssetManifest.json": "f19823c5f618ad44d8926ce05e10bdee",
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
"assets/assets/icons/rubyRank.svg": "6c6883a8432ecac5e85629849456ad99",
"assets/assets/icons/energy.svg": "1a05a36d48e27f4f4dce5c1eb7f4c0ce",
"assets/assets/icons/gems.svg": "cd66bb5ddbc8d1180c03df2a14def2a3",
"assets/assets/icons/goldRank.svg": "a4ff41ccc844cce0f3270455ba1f65d1",
"assets/assets/icons/emeraldRank.svg": "cf6596d12241152c3960dca6a1434cf7",
"assets/assets/icons/diamondRank.svg": "7525a10ab6ba88dcb3250644d3b67f6c",
"assets/assets/icons/sapphireRank.svg": "c8f9e6ddd596240157dfff745fb28ff1",
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
