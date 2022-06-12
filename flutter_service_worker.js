'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "92e851a10e7ecf4eb63968d6a43f9b02",
"index.html": "fa767dcd565bd622151b1c8bcf845bdd",
"/": "fa767dcd565bd622151b1c8bcf845bdd",
"js/jsQR.js": "21f93d9a38ffd2f28bf4d60e280bc22e",
"main.dart.js": "092c4c1c7a2fcbea185927ea4d8ff68a",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
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
".git/objects/61/9078168a57c0a5f9b48f960163571384e8b1e2": "a552b0dec8300fc35aad63606c17ded4",
".git/objects/6f/66fa982a614feaf2bf9f9163613e8b7b8d5ae1": "b25805cf5365aad6bdf675839329d812",
".git/objects/9b/514d140bb18e28e911721cbbfbd8080a730e52": "adec7f22189049728592d4e2709c31ab",
".git/objects/9e/a0d7de60ca69b0bbb8081ea2f577b83c429338": "f68c06e4507048120e452fbba24a7ce0",
".git/objects/32/2d939fc63ed7088da4ea30d8704efbec26ffe1": "e749aa701a4384cc8856bb7b0bb332f7",
".git/objects/0b/e961460bd0817f525bcfe70ce764aac74edbed": "41cf7bc229bcc23260ea3c1c86d9b8dc",
".git/objects/33/5dbbc1ccbd47f04700ffeab663d8e4eb841962": "d46ceac75aae58da65de17e611de6509",
".git/objects/05/aa4a4d91631249823db98e9f82cd2ba528957b": "528a15caa416c67e855c27a0c0f9b772",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/02/c1b5b8ef5f99e607efd0f42ce5775d06a94fef": "b96ff31d9e9debdf1ea613886e39e82d",
".git/objects/d7/2235ad7169f3d7968a48fc91683ae7d0f38c86": "d60b4d1424f85d6fb978e237f456ad5d",
".git/objects/b3/3de3f9982996de278931373e29b65f995f6397": "f9c2d12913baee4211a95d55dc32175e",
".git/objects/b4/43d70b30d47fbe4943c9039abc5409b10e6112": "1e507f2026ec14d906310b4e9966e532",
".git/objects/b4/6338fdfe047b0afe1a610e1b01a4397996f750": "7709877a025807e3b05f2b61f63e7cc7",
".git/objects/c7/2056aa9271ed95a323341514aaa88d55118663": "a42759649bd400190cda704bf0608fa9",
".git/objects/fd/937ec17ff03e6c04950720e3ea147a10ebe082": "ab808457ae3af5016012415df5486b84",
".git/objects/fd/fff11a454882b46688977fe657907d5c3fdd14": "78f725b4e1cf33f7e8a5234e7f140ee5",
".git/objects/ca/33b68c98fc665333c4d05fe1f69f7cf6b175de": "83208a3eadd56b1614753122f6f4cb73",
".git/objects/fe/81de3a6cf222ede2f88c6606cec5bd3b66a883": "746e45d7f9ee13d3178f6df5b44735d5",
".git/objects/ed/63f18c2ff42eb6a95f7d7d492c303001e51282": "4b16151105d2de6943b3f79182e6764e",
".git/objects/c1/4a1431b54677cec48f780c75759a173e314819": "40a4e2ca9d5d9418fdaee93675e7ef5f",
".git/objects/c6/e7df15c12d8467f37f54a5676799371337c41d": "192c79b253505b42fe1dc27ef047a82f",
".git/objects/c6/4739ffe9307b6844d1add5a02e4d27689c1ad4": "16483128a5edd02c28e2a2ae8f7c356c",
".git/objects/4b/7431e3b4788e43c203b95c224567af8ff44c03": "1147bb182214cb7c6eeeb0ec4036b6ed",
".git/objects/pack/pack-2b8634d1041b6ca2dcb30bfda606e73843eb0fa4.pack": "224ff46dd1988ff1da4edc232b406169",
".git/objects/pack/pack-2b8634d1041b6ca2dcb30bfda606e73843eb0fa4.idx": "9f8d1dbe3db6395d7a527de86fd0b4cd",
".git/objects/11/88b4054ff47ffb90632244d1a9c65962c0303f": "be12cef3323b1fa57c594bd34606df42",
".git/objects/7d/0c8ce4848a5498f78629b43bbcccde4d75c1e1": "745e3bd3b67a928261a1331e4e1fcb88",
".git/objects/74/7b14a2bdae0edf34c56752afea6e52b88202c5": "4ae1d8a79175c71d55138c50695fae04",
".git/objects/1a/05d54e61128c5f837a377e7b3fc88e9a382f99": "13a4e04d33ce43159d633ce4ac2188da",
".git/objects/1a/802dbd89e7ebba6e3360fcd8e0f54821f34cb6": "3f653903cf93ecfcf7c068a052b9814c",
".git/objects/1a/20ab368bed55c3e93e26a0a5257fd9580c5a9b": "cdc1fd4852533be5dd77a03f424497bc",
".git/objects/8f/64afbb479cf1daf597a93c0891469ea9031d16": "f5154bb21a2bbd6412022d10e0350c00",
".git/objects/86/fead668822a1f56c5d443145528bbc9ddf9ed4": "d5ef429476a95968ad6443ef7fa0c838",
".git/objects/72/94e2a335a36c9f5fde1767aa2376a630539000": "43131110048a3ce5ba220c0a824ad508",
".git/objects/44/cd229349a690e2dfdade0889cc57cb35eff486": "bcee182ab08a657f71e8fab6e1127dba",
".git/objects/9f/26e5097b45d1e8a9734a0915ea9954701ca88a": "8b9a112b48778c76eb901edaaa8f344a",
".git/objects/38/e8b1bdd196fa6b435414dbd69663c1307a7d6f": "e889599c3a2f1a0f7b1aa6b2fc8f6c7a",
".git/objects/91/b9a41fa5405af92bd775d680ab5a4a3ad8cabc": "267b9da230f2a4bdd56fe8a9be41bd52",
".git/objects/62/88701a3e3ff774c1af07ed9ed047ac3d5813b5": "6467ec25d28b8423dd2859d5c7c3bbe3",
".git/objects/30/a570a468c829c0f750f2ca9197148920c646e5": "c19ccc885aa84944ccf56b81c796b20a",
".git/objects/01/6def66750491dee0b3fb4315d39facd496f6f4": "83c41cc9f9d639471e215de52f3a7db7",
".git/objects/06/70c83c90378459d6f567fc149765900697b87b": "cbaca2973b61fdc89906e863e6c740db",
".git/objects/99/08482c4262355df6ede713fc34d96ae813acea": "02212d93dbdeecb788c2238a47d9b02b",
".git/objects/63/bbb1e2e786212a5d3db3a48032840019f0b954": "b73d08525a0719e2f711ece1ac520bc1",
".git/objects/0a/b49ade51e12c2ae2fc19840017e1d415b13685": "2f95d387adf4c7704afb446b7a348ad9",
".git/objects/0a/0a81252a4f38f51767f23b397bd140227e6f56": "feae8db7f9b3aaebd00c423a46e21339",
".git/objects/bf/368fa5c5b54f8d249ab562091f9290124a4882": "81b3907018d80973db9546f6dfa4935d",
".git/objects/bf/7b38c4b0ac881944c6df85fd3b838be4661125": "506377c5bb78cac01b040855f68fd37c",
".git/objects/d3/186c60561a6007a48f297c9592ed0ab4878908": "7a76ae738b1db8658c794d44cf1c3d96",
".git/objects/dc/33c103b225d0c3a72ce088cce516e6ad4f3a00": "49ae56fbb1410f5ee1f1d8be5c8df7d1",
".git/objects/af/c256f09ede6ceb915f5d434039448f9e244fc4": "d2e670635c83e9f2535a3f079d4311c9",
".git/objects/db/214ccd7f971afe7f9b88e19308e86a0a8ec2fe": "6f569687a40c5f11622c8ce97762ae99",
".git/objects/a8/7d836f468321588dc6cb7e7700e9018316f498": "ce876bf7035e76e301ee7dcd7b795e0e",
".git/objects/a8/b85c3ecaa8910a0a0ab9ebcdc7a5c8942a58e5": "454cc8e08ceb91d38057c6fc56b92532",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/cd/d7071fb4a6454233037ca359ab190dd41f3e39": "c07e2ee0228437719af6b251b3c78c35",
".git/objects/cc/c4daf1ba9a87a7c95994a69614e1c2b04afe23": "4103b498e8f19be885ddf93d6f4dad16",
".git/objects/f6/06b6a089e7c76f742e3e321f7cc420441aa044": "af455d3a9c2ca3fd60408ce411928078",
".git/objects/41/00b912c791c90807c852732038491179b922fc": "55449d82a4c74771efdb6632a734779c",
".git/objects/1b/9ccfb5f23093627ffbd792a58e508e410d8d8c": "daca5541a7164cb4886825f0fc235475",
".git/objects/48/3810720542a19be9c1b137bc695dcddeb94948": "f7060f151511f1955b20351f28f77238",
".git/objects/70/4497fb506b45ef0959a6d85bff24ac3b7d9d70": "18de018f106f8c6defc73cc866c20494",
".git/objects/24/e3b1733f64c69dea8b89ac8f5eb663404aa261": "04f185f272357c688c2fb6a97d783e14",
".git/objects/24/e99d37fbc692ece4015d9897084dc81c45230c": "f9972137d23e27a9857d592862ce0d7c",
".git/objects/12/9fd1314a96daa390fe1b26cc5961896fd4118d": "20996eb4c623f1d89aa126c248b5af2d",
".git/objects/85/93929415d157535fba89b81cccd4450552d3fd": "cf6552a634b11024609f23cc90183b71",
".git/objects/71/55ef40dc5ae7d84c67d17a8295d8addc354104": "4aec07ad8f0b97eb8d5d46e34b666555",
".git/objects/1c/966067fb6534c0777884a394ed689117a203fe": "14c44c972e72e9154320fa13fc975e0a",
".git/objects/49/cfc639a10d32a2d6319f7dd1b5b78623e8568e": "a91ebb9ff7027e9b7f67fdc188b5f80d",
".git/objects/2e/4ca62f6919885e7162cc40ff9c5b850da7d011": "31a3cdc63487ea8b45748fe09caba7ba",
".git/objects/8b/4feaafa5feed70cb04d58395c0ae93eec029ad": "66afb1ac2a1c1e1b4c185e4a9c5d6473",
".git/objects/14/aba076a212fd80be6cf4cee2f0a9f5eec2653d": "094e2c7a7206b50915a62abba69ac41c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "03da3cee84eadb9f18123cfdd2ba82b2",
".git/logs/refs/heads/main": "03da3cee84eadb9f18123cfdd2ba82b2",
".git/logs/refs/remotes/origin/HEAD": "65518049ecb02595173301c527cef05b",
".git/logs/refs/remotes/origin/main": "a32c0ae076f1777f8289835fb6d07176",
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
".git/refs/heads/main": "be32579a2530c6a86baf0777254009e2",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "be32579a2530c6a86baf0777254009e2",
".git/index": "6e0e9a78cef907af2f750cc70427c56f",
".git/packed-refs": "abd23cf3dde710f580f9162e24744ad3",
".git/COMMIT_EDITMSG": "fdd80bc13946e8a57abb1577fcd4e87d",
"assets/AssetManifest.json": "a0102793394d24ff121028f23f3cf089",
"assets/NOTICES": "76389694402db53b253454967103cae0",
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
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
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
