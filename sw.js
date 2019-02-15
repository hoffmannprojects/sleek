/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","48a206a8e64a8f1ae919a4a3b47e10f9"],["/about/index.html","3ee131a1f6c0eccb9f212435c73debd2"],["/assets/css/main.css","dd23c2575e578ff1cd2f39aad623c9f1"],["/assets/img/connection.jpg","4cae98dd6bfbe16b6a7d6a6e2e692632"],["/assets/img/favicon.jpg","ffb9f5c8afdda7fa4f3fd697e5147182"],["/assets/img/icons/android-chrome-192x192.png","4df4c8779d47bcaa69516050281773b9"],["/assets/img/icons/android-chrome-256x256.png","939ec88a61f407945a27d867fca1651d"],["/assets/img/icons/apple-touch-icon.png","366666899d15cf8f6811cc73ee0d63de"],["/assets/img/icons/favicon-16x16.png","f625044491b20a5df78571ba266cbcf6"],["/assets/img/icons/favicon-32x32.png","67502381e45848a4ab76123364675ffe"],["/assets/img/icons/icon-github.svg","46d089384d19077a7990aa13bbb16643"],["/assets/img/icons/icon-instagram.svg","386f48e7440160096385614b2ec91930"],["/assets/img/icons/icon-twitter.svg","d2508d22e42c11e177ae430d33b343d9"],["/assets/img/icons/mstile-150x150.png","1cea2ceb806d1a018330a51a1d8b73b6"],["/assets/img/icons/safari-pinned-tab.svg","5aa56ac96362cc1bb12c2848a6b6c1b7"],["/assets/img/other_collections/tim.jpg","a3d0cd606bb644b31cb55612f7730fba"],["/assets/img/other_collections/tim_lg.jpg","9e252c5dd279a0d0f764061219a6118d"],["/assets/img/other_collections/tim_md.jpg","def82a5735e98cc43e58138ffebe08b5"],["/assets/img/other_collections/tim_placehold.jpg","0e7f0b8b1a311b4c94eb2d753795ac2a"],["/assets/img/other_collections/tim_sm.jpg","3b41a7be420b6346815001c2aeb843e3"],["/assets/img/other_collections/tim_thumb.jpg","8c07fb5f13912e20b5e74f9f4cc94d2c"],["/assets/img/other_collections/tim_thumb@2x.jpg","0d3ebb21491d6cb5010b9cb456d32233"],["/assets/img/other_collections/tim_xs.jpg","4cab0b05bf449d697b160f8066e9e896"],["/assets/img/portfolio/bowlmaster-01.jpg","efbf19c19629266bec1164e307956cd6"],["/assets/img/portfolio/bowlmaster-01_lg.jpg","52a442c9ff35b0b8d90168479c4ade6d"],["/assets/img/portfolio/bowlmaster-01_md.jpg","60cf663435ca8427f2776ec17b19dd40"],["/assets/img/portfolio/bowlmaster-01_placehold.jpg","95eace8571f62eefe6d44fd700d54ecf"],["/assets/img/portfolio/bowlmaster-01_sm.jpg","7a4b6332e26b889b2a486b30c4d5f73b"],["/assets/img/portfolio/bowlmaster-01_thumb.jpg","4c47af2d21a7d9e1e0f23a21259f143d"],["/assets/img/portfolio/bowlmaster-01_thumb@2x.jpg","b19a86f8f347459dae2169a42dc46ebc"],["/assets/img/portfolio/bowlmaster-01_xs.jpg","88f26723bc7d84e0a4b9c37389b60864"],["/assets/img/portfolio/bowlmaster-02.jpg","c267fb01207f1373fdb2f0b1f55bfaa9"],["/assets/img/portfolio/bowlmaster-02_lg.jpg","02eff43a575c6fb4c76aad19e65752b1"],["/assets/img/portfolio/bowlmaster-02_md.jpg","fe1d7bedae5a70155c4929df2769c210"],["/assets/img/portfolio/bowlmaster-02_placehold.jpg","c2343d17c06c059f78e0b0e7dff19479"],["/assets/img/portfolio/bowlmaster-02_sm.jpg","06bc07cc1fc0cdfae5cb99422aa5ce39"],["/assets/img/portfolio/bowlmaster-02_thumb.jpg","12a3f2adb5a4c12bc283c9379376d6af"],["/assets/img/portfolio/bowlmaster-02_thumb@2x.jpg","0e7810298579df7bead1130923cbc335"],["/assets/img/portfolio/bowlmaster-02_xs.jpg","bc8c526bbe30630fcff73ea3acb4a4bc"],["/assets/img/portfolio/bowlmaster-03.jpg","40d7a3eded8a047686e59c32a11b4bac"],["/assets/img/portfolio/bowlmaster-03_lg.jpg","b3ed62d44c7b6cb110412205d332ef07"],["/assets/img/portfolio/bowlmaster-03_md.jpg","497c58bcb935332bf46b505a562957dd"],["/assets/img/portfolio/bowlmaster-03_placehold.jpg","95d5e4eb1fd852c859ca95a4a9bbdb58"],["/assets/img/portfolio/bowlmaster-03_sm.jpg","8229e8a278c365fff3d0f32069649b36"],["/assets/img/portfolio/bowlmaster-03_thumb.jpg","9074db69e39bfbc60d4d9d4817ae06e8"],["/assets/img/portfolio/bowlmaster-03_thumb@2x.jpg","bc3b66965ff58eb543501d7b4ddebf3f"],["/assets/img/portfolio/bowlmaster-03_xs.jpg","8cf8d8026236a03e3aea010b535df1f4"],["/assets/img/portfolio/bowlmaster-04.jpg","273840dc7275ec5dc33d991454f107b7"],["/assets/img/portfolio/bowlmaster-04_lg.jpg","7746d4974b08d601d767eb2845bca3a3"],["/assets/img/portfolio/bowlmaster-04_md.jpg","69d622ea74dcb213222ee10499bdac03"],["/assets/img/portfolio/bowlmaster-04_placehold.jpg","6e3f9d2871b3ff2d5a6697eb37934016"],["/assets/img/portfolio/bowlmaster-04_sm.jpg","f8c6f7a9b5f943ccf5c8c87a5b29dd90"],["/assets/img/portfolio/bowlmaster-04_thumb.jpg","1cc6f6304d6ca672c4a41c3d8172490c"],["/assets/img/portfolio/bowlmaster-04_thumb@2x.jpg","1e883affcb754023aeaa28deb3e83117"],["/assets/img/portfolio/bowlmaster-04_xs.jpg","f5a276faf179131523bac447c5eaeb00"],["/assets/img/portfolio/bowlmaster-05.jpg","608eb0a3a796f48efc247f31677d1a02"],["/assets/img/portfolio/bowlmaster-05_lg.jpg","7f3a8d63ed35b5f6bb22d5659cafa1ac"],["/assets/img/portfolio/bowlmaster-05_md.jpg","00f8587060e17cfcb13e985813630f4b"],["/assets/img/portfolio/bowlmaster-05_placehold.jpg","80cfac615193cf0f148c69a9378ae647"],["/assets/img/portfolio/bowlmaster-05_sm.jpg","f739d9beaa2e8ddd4262c9ee53357910"],["/assets/img/portfolio/bowlmaster-05_thumb.jpg","7f40c4d1457498a19ba8750f471d77c5"],["/assets/img/portfolio/bowlmaster-05_thumb@2x.jpg","cb02abbcf41bdb5c1d3549414308a0c6"],["/assets/img/portfolio/bowlmaster-05_xs.jpg","be9662c6f3f1a2fc1e9fd98472aa8faa"],["/assets/img/portfolio/bowlmaster-06.jpg","9b74dade5c8d4ce9f58bb7feaae5b143"],["/assets/img/portfolio/bowlmaster-06_lg.jpg","03fa917bc4c37bcaf8b2dd77b5fc81f1"],["/assets/img/portfolio/bowlmaster-06_md.jpg","cf9e6471e1f179653f853f8e2a0ef252"],["/assets/img/portfolio/bowlmaster-06_placehold.jpg","b217e3983dcf296c41c4c672e65c0da6"],["/assets/img/portfolio/bowlmaster-06_sm.jpg","416a34bd2f41b082343f45bec044ead2"],["/assets/img/portfolio/bowlmaster-06_thumb.jpg","d6d25f81bbf21129bffdf2457e1feb89"],["/assets/img/portfolio/bowlmaster-06_thumb@2x.jpg","aab706c0a78f6c2f8bc4a14af777502d"],["/assets/img/portfolio/bowlmaster-06_xs.jpg","89ba91fa60ee19130f9d8e53e504f729"],["/assets/img/portfolio/bowlmaster.jpg","791b8820032d0da5ca721cfe6ce410e2"],["/assets/img/portfolio/bowlmaster_placehold.jpg","791b8820032d0da5ca721cfe6ce410e2"],["/assets/img/portfolio/bowlmaster_thumb.jpg","791b8820032d0da5ca721cfe6ce410e2"],["/assets/img/portfolio/bowlmaster_thumb@2x.jpg","791b8820032d0da5ca721cfe6ce410e2"],["/assets/img/portfolio/escape01.jpg","c8c7654dd5a0852bc8e3528b0f269ba0"],["/assets/img/portfolio/escape01_lg.jpg","e8cf24362717cb37ac919b11d06b6df2"],["/assets/img/portfolio/escape01_md.jpg","79bc00afb3f1c2a0b3bd0b4d22e502d2"],["/assets/img/portfolio/escape01_placehold.jpg","841607c54e1dd0d4ff5fd4e23e9e43c3"],["/assets/img/portfolio/escape01_sm.jpg","3a17373964703feb9c4dcbbfa260ad84"],["/assets/img/portfolio/escape01_thumb.jpg","19bae144ef28a6fed287b51599c806e7"],["/assets/img/portfolio/escape01_thumb@2x.jpg","a40a14a8815c765fa68fbc09fc7c21c2"],["/assets/img/portfolio/escape01_xs.jpg","f3ee74fbfb0a2fd33387811e1cbd5036"],["/assets/img/portfolio/escape02.jpg","f6f7a5eb66640eab65072cf79cbe4435"],["/assets/img/portfolio/escape02_lg.jpg","e2cb81e34fef3c6b75ef70c11b6697ad"],["/assets/img/portfolio/escape02_md.jpg","2496b278ba1c45f3622b9baddf6f8b0d"],["/assets/img/portfolio/escape02_placehold.jpg","ff9b2c337ca23b18707b8b4224b05784"],["/assets/img/portfolio/escape02_sm.jpg","8e614a83230f267f24f6de18aaa4d28e"],["/assets/img/portfolio/escape02_thumb.jpg","e4e3fc9c41ee6decb7c690ed313f38e2"],["/assets/img/portfolio/escape02_thumb@2x.jpg","3505b239370360b79fe5985c650c6916"],["/assets/img/portfolio/escape02_xs.jpg","2253dff6e2758fae5cf1d3171a197969"],["/assets/img/portfolio/escape03.jpg","21d8e7cd935b5956f9124f445b7c0fe0"],["/assets/img/portfolio/escape03_lg.jpg","1ba80969eb3b57220ad6e209b368bc55"],["/assets/img/portfolio/escape03_md.jpg","4d6b4520cd7717f10cf79adcdcb05798"],["/assets/img/portfolio/escape03_placehold.jpg","4ddfb706e08cc4ae00581b24183f160b"],["/assets/img/portfolio/escape03_sm.jpg","58c87ef5879138ade91a85ef7e3abeb6"],["/assets/img/portfolio/escape03_thumb.jpg","152b26ea7d16fc68ca977e704fda01ee"],["/assets/img/portfolio/escape03_thumb@2x.jpg","976fdbec40905954e9570f718924c20e"],["/assets/img/portfolio/escape03_xs.jpg","ae22e5b69b93727254977cd104f6adaf"],["/assets/img/portfolio/escape04.jpg","d0f219100e11ee5274a57d688b50ad4b"],["/assets/img/portfolio/escape04_lg.jpg","68746b9ee73096df5fb211a3871659c3"],["/assets/img/portfolio/escape04_md.jpg","a9265d6ff6b3e3cdfeb5926177742709"],["/assets/img/portfolio/escape04_placehold.jpg","a34869ca11c30cd3270b2d031a8e7b6c"],["/assets/img/portfolio/escape04_sm.jpg","aef8defc4c49dcdc5154096207ddb178"],["/assets/img/portfolio/escape04_thumb.jpg","0f62016e6784cfe88e2861de57ce1a1b"],["/assets/img/portfolio/escape04_thumb@2x.jpg","15a6ddd626d72ae2eebbaeb03b22f6f9"],["/assets/img/portfolio/escape04_xs.jpg","5da8649081e8c63b2a2c715d51c02ebd"],["/assets/img/portfolio/escape05.jpg","26345532e24a0f0e2239d1bffc39e996"],["/assets/img/portfolio/escape05_lg.jpg","b3de1d035cdb8732c6909c0a289d703c"],["/assets/img/portfolio/escape05_md.jpg","b42719fc9657ad7a4840c07a7d53692e"],["/assets/img/portfolio/escape05_placehold.jpg","6c1e04f45f124b6cd77b5e54882d39bc"],["/assets/img/portfolio/escape05_sm.jpg","57f6e38f82d38adbc9e39f11f362cc19"],["/assets/img/portfolio/escape05_thumb.jpg","ac08a6bf10c991afea134fd722e6d82e"],["/assets/img/portfolio/escape05_thumb@2x.jpg","1d9b9ca4cdaa1a0860e8fefb2c8fd556"],["/assets/img/portfolio/escape05_xs.jpg","c6e2cca1e67a9c4a46ad6e2234e7652a"],["/assets/img/portfolio/giz-design-thinking-cologne-01.jpg","06b94ecc7a4d1b77f9fb88380b186cd8"],["/assets/img/portfolio/giz-design-thinking-cologne-01_lg.jpg","ed62f02e370a7082092d06799f7a251b"],["/assets/img/portfolio/giz-design-thinking-cologne-01_md.jpg","3fa81443b3324465aaaf713cea041116"],["/assets/img/portfolio/giz-design-thinking-cologne-01_placehold.jpg","be95d9ff543306367ac344ed45f86002"],["/assets/img/portfolio/giz-design-thinking-cologne-01_sm.jpg","9a24a83d8423c77783dad87d9a1e3f65"],["/assets/img/portfolio/giz-design-thinking-cologne-01_thumb.jpg","1b6f5227daccd9e9f43b67c8b60e608f"],["/assets/img/portfolio/giz-design-thinking-cologne-01_thumb@2x.jpg","04d66883b0fd6747733c3dc0012b0342"],["/assets/img/portfolio/giz-design-thinking-cologne-01_xs.jpg","68a148ed3e6b147ad06b856952462d72"],["/assets/img/portfolio/glitch-garden-02.jpg","1a66ef2a08fabfea49e5e563b4e4b87b"],["/assets/img/portfolio/glitch-garden-02_lg.jpg","8e8529360fe90083cc6d9b2a31a28dfc"],["/assets/img/portfolio/glitch-garden-02_md.jpg","1f84222d69ebd9852f76eb9648ce8a16"],["/assets/img/portfolio/glitch-garden-02_placehold.jpg","e5d1d1011a6205be3bf9767ef802520f"],["/assets/img/portfolio/glitch-garden-02_sm.jpg","621dffc2f13e53638e7c9b2d280a7621"],["/assets/img/portfolio/glitch-garden-02_thumb.jpg","be86b9d2608e47392ac793de9cd3838f"],["/assets/img/portfolio/glitch-garden-02_thumb@2x.jpg","841c3a3f410ce242fa26a6e4132ea36b"],["/assets/img/portfolio/glitch-garden-02_xs.jpg","18a5353ec5a0d8694e255fe3124fec75"],["/assets/img/portfolio/glitchgarden01.jpg","75c58561351a71c94c44ec35baafbf07"],["/assets/img/portfolio/glitchgarden01_lg.jpg","205f882663bf53a54143becbb1e973f7"],["/assets/img/portfolio/glitchgarden01_md.jpg","5796f9e83068922b66f01f76ce16d5a7"],["/assets/img/portfolio/glitchgarden01_placehold.jpg","8102a2fba2e3ba97ff2f758257c4d822"],["/assets/img/portfolio/glitchgarden01_sm.jpg","a136611f86904d0e555a7c499b87a5d4"],["/assets/img/portfolio/glitchgarden01_thumb.jpg","302b834a0aeaf9392ed6971cc4acf8c5"],["/assets/img/portfolio/glitchgarden01_thumb@2x.jpg","a8c6ec9eb5f5832557960cb2f815daf5"],["/assets/img/portfolio/glitchgarden01_xs.jpg","5111951feb21dd9acefeae1be695efaa"],["/assets/img/portfolio/glitchgarden03.jpg","931623af114b8d12c599bd22a8930229"],["/assets/img/portfolio/glitchgarden03_lg.jpg","b28d77c4679fc3a0ac3caee6a7dc0d1d"],["/assets/img/portfolio/glitchgarden03_md.jpg","1b434ac657273d4f2c3e20230340ffd0"],["/assets/img/portfolio/glitchgarden03_placehold.jpg","0cb939ac22be6b41938bebf928eb77c7"],["/assets/img/portfolio/glitchgarden03_sm.jpg","6ae336fcb0e14ddcd45d508bb8410644"],["/assets/img/portfolio/glitchgarden03_thumb.jpg","f88f80267b34f6ed1753e02e2f3c4b5d"],["/assets/img/portfolio/glitchgarden03_thumb@2x.jpg","236b7fba2f890f7c14d2e7a74ecbf867"],["/assets/img/portfolio/glitchgarden03_xs.jpg","c91b8e2ac0332c6ef6be486606a208be"],["/assets/img/portfolio/glitchgarden06.jpg","eba12c74e03a3c3937e135394b81583f"],["/assets/img/portfolio/glitchgarden06_lg.jpg","15b76b2c7aed052aed957d1ac9a22f38"],["/assets/img/portfolio/glitchgarden06_md.jpg","15d6395f77149c597746c206617a54dd"],["/assets/img/portfolio/glitchgarden06_placehold.jpg","01496f8ec361d4c6ba6b9d739c2a6419"],["/assets/img/portfolio/glitchgarden06_sm.jpg","a8a6aba596f9e16ce5f909430500906b"],["/assets/img/portfolio/glitchgarden06_thumb.jpg","7f876da5237e19c1b00f37e9f2239daa"],["/assets/img/portfolio/glitchgarden06_thumb@2x.jpg","2a4fb196927742f81ab342dbe950ef1b"],["/assets/img/portfolio/glitchgarden06_xs.jpg","df851e64b0c67e22a15e1a86d69889c8"],["/assets/img/portfolio/glitchgarden10.jpg","059b4b12e4be9d212d77e0c49fc1252a"],["/assets/img/portfolio/glitchgarden10_lg.jpg","8cab09b2f600ae365a40a4bc83e1de5e"],["/assets/img/portfolio/glitchgarden10_md.jpg","e433f89dde439c81ae5051aedf90242c"],["/assets/img/portfolio/glitchgarden10_placehold.jpg","55104f20c13c90290276664181dd4885"],["/assets/img/portfolio/glitchgarden10_sm.jpg","612b05972b0666216c6055fffbc8fb1e"],["/assets/img/portfolio/glitchgarden10_thumb.jpg","906fc072e5426807c1beaff1c02acea5"],["/assets/img/portfolio/glitchgarden10_thumb@2x.jpg","1071cf8746977c948027303ebb14646f"],["/assets/img/portfolio/glitchgarden10_xs.jpg","4ae6a07ac27f20e4572a5a95beef9192"],["/assets/img/portfolio/glitchgarden11.jpg","948c25b3e3e08f410ed5220a344d5a11"],["/assets/img/portfolio/glitchgarden11_lg.jpg","3bea63b8784842a9b6ddd2e3bf2537ad"],["/assets/img/portfolio/glitchgarden11_md.jpg","deba952e9920444d6eb50dda9db28024"],["/assets/img/portfolio/glitchgarden11_placehold.jpg","23362bfd7b7ef88aae6cd040f8a872a5"],["/assets/img/portfolio/glitchgarden11_sm.jpg","3c339f7c19e343e3754e8d5748c79bfc"],["/assets/img/portfolio/glitchgarden11_thumb.jpg","2de204b11fd8844b58de2e9737748778"],["/assets/img/portfolio/glitchgarden11_thumb@2x.jpg","8c5fdb9d4d2f78eda13c499b6c3db966"],["/assets/img/portfolio/glitchgarden11_xs.jpg","ad0bb3d1bed4e4273d39b3aa6a450d4b"],["/assets/img/portfolio/glitchgarden12.jpg","712c381e40e5d06767ad20a570baa003"],["/assets/img/portfolio/glitchgarden12_lg.jpg","724d039e5ffb18adbb5ef906db7ae316"],["/assets/img/portfolio/glitchgarden12_md.jpg","620ec441901ea780d3b1b875f680fb3a"],["/assets/img/portfolio/glitchgarden12_placehold.jpg","1842b0a82d509119eaef4e109b940ef0"],["/assets/img/portfolio/glitchgarden12_sm.jpg","adfcde6c6ab2a81c5ca6be5c18b024ad"],["/assets/img/portfolio/glitchgarden12_thumb.jpg","f43d286463e1eb3649764800b165f2bf"],["/assets/img/portfolio/glitchgarden12_thumb@2x.jpg","3eb0b1c729b26f326e75617fa09a4967"],["/assets/img/portfolio/glitchgarden12_xs.jpg","5cd58d733ee1559bd85b2e1f509d524f"],["/assets/img/portfolio/jumpin-01.jpg","7744eac34fc82b8561784efa0291b0a2"],["/assets/img/portfolio/jumpin-01_placehold.jpg","7744eac34fc82b8561784efa0291b0a2"],["/assets/img/portfolio/jumpin-01_thumb.jpg","7744eac34fc82b8561784efa0291b0a2"],["/assets/img/portfolio/jumpin-01_thumb@2x.jpg","7744eac34fc82b8561784efa0291b0a2"],["/assets/img/portfolio/laserdefender01.jpg","89a178cc996a9efb28028430afa76f05"],["/assets/img/portfolio/laserdefender01_placehold.jpg","89a178cc996a9efb28028430afa76f05"],["/assets/img/portfolio/laserdefender01_thumb.jpg","89a178cc996a9efb28028430afa76f05"],["/assets/img/portfolio/laserdefender01_thumb@2x.jpg","89a178cc996a9efb28028430afa76f05"],["/assets/img/portfolio/machine-learning-ai-pong.jpg","6c7788270af654fc1e874543d547e8f8"],["/assets/img/portfolio/machine-learning-ai-pong_lg.jpg","e9e4db21e7dae63502af13e608205d4c"],["/assets/img/portfolio/machine-learning-ai-pong_md.jpg","960631c7a0224a1441acd78a222347a5"],["/assets/img/portfolio/machine-learning-ai-pong_placehold.jpg","10623c58cef2debfca84c5d340f09df4"],["/assets/img/portfolio/machine-learning-ai-pong_sm.jpg","9ca5cc5e9dcdfd4246bae18892e4a435"],["/assets/img/portfolio/machine-learning-ai-pong_thumb.jpg","70ac79aca98a091320ea66fb1ce044c8"],["/assets/img/portfolio/machine-learning-ai-pong_thumb@2x.jpg","2174f2caa0be8cc63ccf7f940ac76f92"],["/assets/img/portfolio/machine-learning-ai-pong_xs.jpg","08b9e00270a9bfe64eeb2019ef705ee3"],["/assets/img/portfolio/mobile-ux-01.jpg","e95262a0e82786523999528359887877"],["/assets/img/portfolio/mobile-ux-01_placehold.jpg","e95262a0e82786523999528359887877"],["/assets/img/portfolio/mobile-ux-01_thumb.jpg","e95262a0e82786523999528359887877"],["/assets/img/portfolio/mobile-ux-01_thumb@2x.jpg","e95262a0e82786523999528359887877"],["/assets/img/portfolio/multi-display-network-player.jpg","5d2683e7ac304d1a1608d9da270d1d88"],["/assets/img/portfolio/multi-display-network-player_lg.jpg","8e0f103151efe777e8075fc6e6f73585"],["/assets/img/portfolio/multi-display-network-player_md.jpg","8d1453733909b0b6b925d9da199b1ce6"],["/assets/img/portfolio/multi-display-network-player_placehold.jpg","81e4ca15cba7497ffb9bbc01068fb62b"],["/assets/img/portfolio/multi-display-network-player_sm.jpg","2f562be3de3112cf563b69768bbeb9fd"],["/assets/img/portfolio/multi-display-network-player_thumb.jpg","74016766d2fd82153208b9194261c4e1"],["/assets/img/portfolio/multi-display-network-player_thumb@2x.jpg","330a945a1632a7741daec6cfa4d68db5"],["/assets/img/portfolio/multi-display-network-player_xs.jpg","1366c253beb633f468e76ac0d25b2168"],["/assets/img/portfolio/musik-01.jpg","21278bfa6ba8528094e48d8327939035"],["/assets/img/portfolio/musik-01_lg.jpg","791aa6ae588bafcdf491aaf2db038693"],["/assets/img/portfolio/musik-01_md.jpg","0a0ce9800fa879ca7f4cd460482337d2"],["/assets/img/portfolio/musik-01_placehold.jpg","ad60c454161f94e9bbb2f7ed6e147efc"],["/assets/img/portfolio/musik-01_sm.jpg","d9f54cdc34304ef18c2effc22dbb0bce"],["/assets/img/portfolio/musik-01_thumb.jpg","5d1d8ae26bef93245707748d1c5911f1"],["/assets/img/portfolio/musik-01_thumb@2x.jpg","5a0ad29d23b084a4ecba7eb569f9c5e9"],["/assets/img/portfolio/musik-01_xs.jpg","99e293398b08f8b130c5793bd6f30b06"],["/assets/img/portfolio/nein-mann-01.jpg","e6ab9afdeafc56d13e6368789b5da087"],["/assets/img/portfolio/nein-mann-01_lg.jpg","fbdbe9372b7be77e0da5ca0f30710e36"],["/assets/img/portfolio/nein-mann-01_md.jpg","077112fe6649ca8df1cb9e760a0a5475"],["/assets/img/portfolio/nein-mann-01_placehold.jpg","3c27473f227d0e18fff260068e211d6d"],["/assets/img/portfolio/nein-mann-01_sm.jpg","525c8799eb9673b8fdea3994832bed21"],["/assets/img/portfolio/nein-mann-01_thumb.jpg","cafcc4acfcc389dae5900ce67ef759cc"],["/assets/img/portfolio/nein-mann-01_thumb@2x.jpg","bd77aa020ac01cd1e64d91928e123b3e"],["/assets/img/portfolio/nein-mann-01_xs.jpg","29419103fd94742d3d3d746cf37189b4"],["/assets/img/portfolio/sue-em-all-01.jpg","8423f109fc8240cb4618b45b93e708a2"],["/assets/img/portfolio/sue-em-all-01_placehold.jpg","8423f109fc8240cb4618b45b93e708a2"],["/assets/img/portfolio/sue-em-all-01_thumb.jpg","8423f109fc8240cb4618b45b93e708a2"],["/assets/img/portfolio/sue-em-all-01_thumb@2x.jpg","8423f109fc8240cb4618b45b93e708a2"],["/assets/img/portfolio/sue-em-all-02.jpg","5818629a3ec805a6a3a6f77247558b57"],["/assets/img/portfolio/urlaub-01.jpg","5afce4e1ea8b119e0d02b0c9ac72e910"],["/assets/img/portfolio/urlaub-01_lg.jpg","b7bd93e87bb51e44e59aba0404d0e709"],["/assets/img/portfolio/urlaub-01_md.jpg","9a5f000311327dca4007607948a329d4"],["/assets/img/portfolio/urlaub-01_placehold.jpg","b1790b9213fafec0f80503d2c9e3920e"],["/assets/img/portfolio/urlaub-01_sm.jpg","4e1ac262ca69160db558b61aaf723f36"],["/assets/img/portfolio/urlaub-01_thumb.jpg","3d82bc7bf1ae015736a51f272797d03c"],["/assets/img/portfolio/urlaub-01_thumb@2x.jpg","71275c3c434c21bc83251bc17d254ffe"],["/assets/img/portfolio/urlaub-01_xs.jpg","b87784170b9adb83d0eeec656f8b4c8c"],["/assets/img/portfolio/weightless-12.jpg","eb2690cf1587fb4ef0896db579a552d7"],["/assets/img/portfolio/weightless-12_lg.jpg","8431ec3b95a3e079e15cee102643bdb6"],["/assets/img/portfolio/weightless-12_md.jpg","3ca52785827a4673609b4b2c4e0e97c2"],["/assets/img/portfolio/weightless-12_placehold.jpg","236dc00584cd8d7cae8572c7bab8f2c9"],["/assets/img/portfolio/weightless-12_sm.jpg","fb1efa41222e6e007dd3775d9161f909"],["/assets/img/portfolio/weightless-12_thumb.jpg","ed2a93e8f4a5bcbb9d9b24a65acf1c91"],["/assets/img/portfolio/weightless-12_thumb@2x.jpg","379845722b3aede7e5dbf76c139f6790"],["/assets/img/portfolio/weightless-12_xs.jpg","1a7bc80eb10746ec21be621664be1442"],["/assets/img/portfolio/zombie-runner-01.jpg","52be222c4e69e2b1285f1c654a16964f"],["/assets/img/portfolio/zombie-runner-01_lg.jpg","3b736d27c7746645e8868f0dda9c48c1"],["/assets/img/portfolio/zombie-runner-01_md.jpg","5614e18c65c163785b957e91e4cc0d26"],["/assets/img/portfolio/zombie-runner-01_placehold.jpg","71685a26cf28e2d4b6351989680aec75"],["/assets/img/portfolio/zombie-runner-01_sm.jpg","93c084974e8da24bc605cd67e39d0dd4"],["/assets/img/portfolio/zombie-runner-01_thumb.jpg","a84daeab3fdb57639f544f54101eb1e4"],["/assets/img/portfolio/zombie-runner-01_thumb@2x.jpg","1775290cf0d33e8e4fde533158d220ba"],["/assets/img/portfolio/zombie-runner-01_xs.jpg","b1299a347014d160699018a5a96e7a2d"],["/assets/img/portfolio/zombie-runner-02.jpg","413d356cf2a46922a9f90a2018d85af4"],["/assets/img/portfolio/zombie-runner-02_lg.jpg","b205cb796526a4b4fe1186daf8db93ff"],["/assets/img/portfolio/zombie-runner-02_md.jpg","a94d89f2204d5edbd41fa7ada4ddbbdf"],["/assets/img/portfolio/zombie-runner-02_placehold.jpg","d980a8f84eddac2cdba9ef3b1da4b809"],["/assets/img/portfolio/zombie-runner-02_sm.jpg","ca622cfeea596f2c71b31a9ad3815167"],["/assets/img/portfolio/zombie-runner-02_thumb.jpg","06c7423a487d34bf57c1e384cc786560"],["/assets/img/portfolio/zombie-runner-02_thumb@2x.jpg","e760712166287cc3a0cf726a56a55c13"],["/assets/img/portfolio/zombie-runner-02_xs.jpg","cff835d78d28be820dfbff8238567edd"],["/assets/img/portfolio/zombie-runner-03.jpg","ca1c5b9851a4ec65d777bdb7edc95bf6"],["/assets/img/portfolio/zombie-runner-03_lg.jpg","74b8956bd1a3c3a27601e4cbf0bbe136"],["/assets/img/portfolio/zombie-runner-03_md.jpg","83bde679ceb4e077f3a66f49c9a2bd35"],["/assets/img/portfolio/zombie-runner-03_placehold.jpg","bd9f4c6e430595e37f91eb3b3507b5a4"],["/assets/img/portfolio/zombie-runner-03_sm.jpg","feae8d65c47e6dbff3935662f2ff549d"],["/assets/img/portfolio/zombie-runner-03_thumb.jpg","f2c0d8b10b0320d8936a16b53de08367"],["/assets/img/portfolio/zombie-runner-03_thumb@2x.jpg","0fa484cfaf0c68afc71efc378a8b1ee6"],["/assets/img/portfolio/zombie-runner-03_xs.jpg","9e4507485bec046808c7f6e29d9adeca"],["/assets/img/portfolio/zombie-runner-04.jpg","ba1cafa88d0a521df6cc41fdefe76492"],["/assets/img/portfolio/zombie-runner-04_lg.jpg","5eca20b3d7a6ad620331f5c495d98e9d"],["/assets/img/portfolio/zombie-runner-04_md.jpg","c10977378af437525716a1d0f3692a82"],["/assets/img/portfolio/zombie-runner-04_placehold.jpg","1550850f08c74c7093efc37ce7fd6d76"],["/assets/img/portfolio/zombie-runner-04_sm.jpg","89c98eb6dda3dac5a3272c27499ec0c4"],["/assets/img/portfolio/zombie-runner-04_thumb.jpg","39b8eef2adfda3c64048def4d1d595d3"],["/assets/img/portfolio/zombie-runner-04_thumb@2x.jpg","a8cc8483e7602e20e42e2ef216c1b4a6"],["/assets/img/portfolio/zombie-runner-04_xs.jpg","b2b44619dd4e171662297240441319cf"],["/assets/img/portfolio/zombie-runner-05.jpg","12e6892bc5717e93e780480be6237d2c"],["/assets/img/portfolio/zombie-runner-05_lg.jpg","8b13909ef751b81cfa5d9676b1f69117"],["/assets/img/portfolio/zombie-runner-05_md.jpg","df7f9cacaeb9c7308b1e9d572f601aa0"],["/assets/img/portfolio/zombie-runner-05_placehold.jpg","9c60bc5588b4c3c288d851e7d83a143f"],["/assets/img/portfolio/zombie-runner-05_sm.jpg","7ebdcf57423fdcb8d3c61e953fab5cdb"],["/assets/img/portfolio/zombie-runner-05_thumb.jpg","d01269f10bb5e24ac3603bb9fea53945"],["/assets/img/portfolio/zombie-runner-05_thumb@2x.jpg","45158ab54c4dddb66d28de51dc567d0a"],["/assets/img/portfolio/zombie-runner-05_xs.jpg","6325d23ae85096ac5f82653a5197e2cf"],["/assets/img/portfolio/zombie-runner-06.jpg","19f23677fd6463bdcc762636db914da0"],["/assets/img/portfolio/zombie-runner-06_lg.jpg","d44aa2a2113ece370719a661cf2d55ae"],["/assets/img/portfolio/zombie-runner-06_md.jpg","f04d432caa1832a204e33d8995b7531e"],["/assets/img/portfolio/zombie-runner-06_placehold.jpg","5a8c57e786c770b0ca1a5bf16b1ecd0e"],["/assets/img/portfolio/zombie-runner-06_sm.jpg","c7610a353d54cdc626056330bc846d35"],["/assets/img/portfolio/zombie-runner-06_thumb.jpg","ffd540397b80afbc5c616ccfe788044b"],["/assets/img/portfolio/zombie-runner-06_thumb@2x.jpg","31aff33fbeba7e73e20db97f75d0026c"],["/assets/img/portfolio/zombie-runner-06_xs.jpg","eb203307749fc360cc8e50c1b8b8b10b"],["/assets/img/posts/complete-unity-developer-course-certificate.jpg","955de2e11b100d5c388237938432127e"],["/assets/img/posts/complete-unity-developer-course-certificate_lg.jpg","fe021ab36b6e7a4a27d21e82e23aaaee"],["/assets/img/posts/complete-unity-developer-course-certificate_md.jpg","fa6064e4ff7aec06418cf787eea4a616"],["/assets/img/posts/complete-unity-developer-course-certificate_placehold.jpg","054b4e38239fef19bac880bae704f09c"],["/assets/img/posts/complete-unity-developer-course-certificate_sm.jpg","6614d72ff3e596beaf09407b57b423b1"],["/assets/img/posts/complete-unity-developer-course-certificate_thumb.jpg","71b10540c62bf3925b9cbbef5d83b220"],["/assets/img/posts/complete-unity-developer-course-certificate_thumb@2x.jpg","1b1a228b18300104bfbfedeec7756ef4"],["/assets/img/posts/complete-unity-developer-course-certificate_xs.jpg","c2efe0e67fc25703593a0e3d57fb0aa2"],["/assets/img/posts/csharp-advanced-course-certificate.jpg","15aa5c2fab6278a6949575059926af94"],["/assets/img/posts/csharp-advanced-course-certificate_lg.jpg","fc53031fd61438415d0329a25034d2a2"],["/assets/img/posts/csharp-advanced-course-certificate_md.jpg","6db588068f4dac74efc508121d8869ac"],["/assets/img/posts/csharp-advanced-course-certificate_placehold.jpg","64ae0f47f4402a87539d135237194cb2"],["/assets/img/posts/csharp-advanced-course-certificate_sm.jpg","154505770f5dfc697325c0ed14dee0ab"],["/assets/img/posts/csharp-advanced-course-certificate_thumb.jpg","8f68ba84157bc9452daa84cba8b13c3d"],["/assets/img/posts/csharp-advanced-course-certificate_thumb@2x.jpg","775df89fff8102568bb01ec710454858"],["/assets/img/posts/csharp-advanced-course-certificate_xs.jpg","bdb7ef0ac2b5c0660596dfc4fbac8aa2"],["/assets/img/posts/csharp-intermediate-course-certificate.jpg","b07af9109de208230349ad72e1e3eea8"],["/assets/img/posts/csharp-intermediate-course-certificate_lg.jpg","62f90e7e89c149c2d01fad2f3842a9bb"],["/assets/img/posts/csharp-intermediate-course-certificate_md.jpg","f24536900b075874c1d698e79b837e7d"],["/assets/img/posts/csharp-intermediate-course-certificate_placehold.jpg","3c183ceff3cc91b386b4e7ea4396da6b"],["/assets/img/posts/csharp-intermediate-course-certificate_sm.jpg","757c1adca09b5a8c59c020662901e0b1"],["/assets/img/posts/csharp-intermediate-course-certificate_thumb.jpg","7f58aaa71ff2cbc85127871eea803707"],["/assets/img/posts/csharp-intermediate-course-certificate_thumb@2x.jpg","379f944b19d350d4b6eb4d2b3a4e11df"],["/assets/img/posts/csharp-intermediate-course-certificate_xs.jpg","0ba06770fdb07d1d6aa433d45e44677b"],["/assets/img/posts/machine-learning-with-unity-certificate.jpg","926b805ce681cdeb49321fa57a571a27"],["/assets/img/posts/machine-learning-with-unity-certificate_placehold.jpg","926b805ce681cdeb49321fa57a571a27"],["/assets/img/posts/machine-learning-with-unity-certificate_thumb.jpg","926b805ce681cdeb49321fa57a571a27"],["/assets/img/posts/machine-learning-with-unity-certificate_thumb@2x.jpg","926b805ce681cdeb49321fa57a571a27"],["/assets/js/bundle.js","df854a763d7d3fd95381b95081eb822f"],["/blog/index.html","d1d18588489662ae9530177f265ed24e"],["/categories/index.html","22a9a70f6e13c553f057c23e3118455b"],["/contact/index.html","4d3b8c0805ceccd706b098ed5128dfc8"],["/csharp-advanced-course-completed/index.html","90e3b148fdc12b0de6ac6620e03bfd1b"],["/csharp-intermediate-course-completed/index.html","ee4b37e52c6e7f11b322557abbcc7d78"],["/index.html","ebb73afbcf6c4cf626cb819cffdb8345"],["/portfolio/bowlmaster/index.html","9d10747132b0c15e34cd1347ad459d63"],["/portfolio/escape/index.html","d937d4ef9349a47977bcd8ce7799996d"],["/portfolio/glitch-garden/index.html","2534111291cbe4c1c1584e6cae3661fd"],["/portfolio/jumpin/index.html","f2b65d4d962a5792190bd3b572ad4cc7"],["/portfolio/laser-defender/index.html","162fc911fa59eb38cc54f5e3dcb4f2d8"],["/portfolio/machine-learning-ai-pong/index.html","cdc7c71761f328a59cc3705102e7f585"],["/portfolio/multi-display-network-player/index.html","109fe53d8857dfa0b72b9ff04bcf6c28"],["/portfolio/nein-mann/index.html","07aae266aa32fe3c39ffa8943b498657"],["/portfolio/urlaub/index.html","9517a778554b495ac29bf2be36c82d23"],["/setting-up-jekyll-for-github-pages-on-windows-10/index.html","eee629ddfaeb151d4ea8ce985185a9e6"],["/setting-up-unity-project-for-git-version-control/index.html","3c4f1712d1375d0b64f4a093770652f6"],["/sw.js","d96e9b554fa2c9a13762c1346ddb7b72"],["/unity-csharp-course-completed/index.html","e950178e6cb565660b2d3b1ca5dd1b64"],["/unity-machine-learning-course-completed/index.html","4035aadcedcad3a27909bafd6bd93b0f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







