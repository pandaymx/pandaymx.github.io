if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let n={};const r=e=>a(e,c),f={module:{uri:c},exports:n,require:r};s[c]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(d(...e),n)))}}define(["./workbox-b584cb72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-c5kQbwmB.js",revision:"72e5c9444cc9dad824c9ae940d9b2124"},{url:"assets/advanced.html-BNysTM90.js",revision:"8af5b8c646762c0b676dc0ca60651e4c"},{url:"assets/app-CHcoNCUT.js",revision:"80b7c316d76e15983bfc185a37292fcf"},{url:"assets/basic.html-CBNwKD8Q.js",revision:"f90ee32d3ec06ab900dfeae8b88aa4a8"},{url:"assets/changeLog.html-CJHvsngK.js",revision:"464d20e6aaab84a9191fcb1b9e30b35a"},{url:"assets/changeLog.html-CX-Xy5do.js",revision:"32b3e13a0d759f0fa8e80ec727f43d88"},{url:"assets/icon/advanced.svg",revision:"6d26e5e4e07ed30422aea16d7e93d56e"},{url:"assets/icon/basic.svg",revision:"48bf2e352a1738f1e526ce91165860fd"},{url:"assets/icon/changeLog.svg",revision:"7261f7f37990fbbac5605f1f10c5b991"},{url:"assets/icon/extend.svg",revision:"7e814ec689dd9d7d6cb2221bdaea162c"},{url:"assets/icon/introduction.svg",revision:"43727fc6f2d4a0e4fc118ff589f18c9b"},{url:"assets/icon/markdown.svg",revision:"b198e99a504924e392f83b047167f5b0"},{url:"assets/icon/portfolio.svg",revision:"80482fcd1c3269f5f30a9425c4ae7e32"},{url:"assets/icon/technology.svg",revision:"38eca595f7c2750310860e2edc4d9727"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-4f8WLCaX.js",revision:"a59ee26c2a27ffa1a7fdb106c3a939fd"},{url:"assets/index.html-9OOQoAmh.js",revision:"5f0406a1d9af908e63985df95f9c4d0c"},{url:"assets/index.html-adFAv2FK.js",revision:"e40f7a7fd21c85d4bc5b9bd7e966ba5e"},{url:"assets/index.html-BESY26Nx.js",revision:"699e446ec183c9fc0d6227a264925c95"},{url:"assets/index.html-Bmmzi9zF.js",revision:"f52f4ec20055fb547459be9ed9ad37a5"},{url:"assets/index.html-BpRmlkEN.js",revision:"9a03aecde913668ed9f1e0788a089690"},{url:"assets/index.html-Bro2EDPa.js",revision:"93567dd1bf7cc65576e09bd663d25c88"},{url:"assets/index.html-C-poqkdd.js",revision:"290374f0aa3c67051d9c93892da5705c"},{url:"assets/index.html-C3DRWE8t.js",revision:"6683e061241f9e3ece47948d209c735a"},{url:"assets/index.html-CEKOjDHd.js",revision:"f8fc2cf2cfc242f26daee0bfe1e806f1"},{url:"assets/index.html-CIqkHM68.js",revision:"0449edf2a056c78f43772454ed352b25"},{url:"assets/index.html-ClKD8IOz.js",revision:"675f4587fac3a6c710d8efd076ea94ed"},{url:"assets/index.html-cMku1Qdm.js",revision:"54502cb9d8a2f7b706fbf1ccf5940c89"},{url:"assets/index.html-CP4tPUlU.js",revision:"3adeb47d9d762e822334d149b0ad80af"},{url:"assets/index.html-CtZNfmu-.js",revision:"d7b25ef53e12fc8d30a804b9ce0f068f"},{url:"assets/index.html-daRpYMf_.js",revision:"52ba8b63acc73cda5a03293956551d6c"},{url:"assets/index.html-DG3dyzcd.js",revision:"12e9313fdcdaa68f94a33158d343d202"},{url:"assets/index.html-DM0Wmenv.js",revision:"079759c54262af2905c9de3b0802248a"},{url:"assets/index.html-DO8xll4b.js",revision:"c5b52a7be9b677b390fdabfc8bb65d41"},{url:"assets/index.html-DoCS4aPv.js",revision:"dc40b1a0b7fde0ea9be0fdc641f85391"},{url:"assets/index.html-hL34n5p7.js",revision:"1d197c8fd227d4e6a4afb862e4d2dcdb"},{url:"assets/index.html-qfgEPLKb.js",revision:"abf1e9c8b4eb94163af0dbbb93776bce"},{url:"assets/intro.html-BJakoYGJ.js",revision:"ecb0f24db749d92c7d6a62e5000953e1"},{url:"assets/intro.html-nV4nbUbd.js",revision:"ee1f6d31d64f93b61168b8d72756e236"},{url:"assets/introduction.html-DIH3tf4b.js",revision:"08c2168e51cc82da672fb53c8397692a"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/portfolio.html-BdDDI7AJ.js",revision:"698732abd6d59c0c71a05fbc822484c2"},{url:"assets/setupDevtools-7MC2TMWH-CSzHCEEM.js",revision:"01e4c434cbaab75e0d65ef9ab0f97395"},{url:"assets/style-D8Rvjm5J.css",revision:"adc8df561a0b282583aef1fb069a1482"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"d1a50f49f93eb361012b54c159bbe1ca"},{url:"article/index.html",revision:"d674f722d52968139bab9435cfe92191"},{url:"category/index.html",revision:"ea7ae05d1df57ee69d11fe9c9d3407de"},{url:"category/markdown/index.html",revision:"0b6fb8f6d6e2317d37e89e585593df51"},{url:"category/实用技术/index.html",revision:"c80af64bb86e2ae0885fadcfc97a9c62"},{url:"changeLog.html",revision:"ac0491a7c5e412336b178dad2af5364d"},{url:"en/article/index.html",revision:"b4ee7e9ede62b71b4ada67a73773fce7"},{url:"en/category/index.html",revision:"ddcd6dc22ebacfddf1abbc42353bd5c8"},{url:"en/changeLog.html",revision:"5fdb73e30ad0d38e328bff06f764e65b"},{url:"en/index.html",revision:"75bd49169eb4a8a1f8fdc0dcd57a1ebd"},{url:"en/intro.html",revision:"02cf633bfde366cb0021306a9ef0ba51"},{url:"en/recent-updated/index.html",revision:"ec181979d3aae0b12f8284522bfb6a68"},{url:"en/star/index.html",revision:"fbc5e9d0529e8900afd2bdb1bb27cfa6"},{url:"en/tag/index.html",revision:"ef36e273bffe03ff27a8af4658dce383"},{url:"en/technology/index.html",revision:"c030c885fa44b389e41d03089c2ed8e3"},{url:"en/timeline/index.html",revision:"daaa4ce740093b98c97e3752cb332e44"},{url:"index.html",revision:"22905dee74bda75b6a0e463ab0ba7def"},{url:"intro.html",revision:"45181648931537d4e9396fb0fec09c2b"},{url:"portfolio.html",revision:"77797d04a57cc7fd15b00dfe25a6be4e"},{url:"recent-updated/index.html",revision:"487f9c8e419983bbbb07eac75e6ffc31"},{url:"star/index.html",revision:"cc70449da5f1206935f0853683b07d3b"},{url:"tag/index.html",revision:"5e1f21227651294a9963028f8b807a6d"},{url:"tag/基础/index.html",revision:"5d85fa462216f14051576060f6722aa2"},{url:"tag/导读/index.html",revision:"82c6862316488bb8ce07cee4fc4d4908"},{url:"tag/进阶/index.html",revision:"6d5eb6186e67b658883a4454e5523586"},{url:"technology/index.html",revision:"b2ba28e61b436b1e9ac4bb4c959fbb10"},{url:"technology/markdown/advanced.html",revision:"028a0531ac6aadb41057745ab570276c"},{url:"technology/markdown/basic.html",revision:"7c98704559a3b128a392eebe35012f64"},{url:"technology/markdown/index.html",revision:"435a1f8aad5fff293e91eb036a5ef6c8"},{url:"technology/markdown/introduction.html",revision:"a74c505c5ec63cebdc85f0d094a6d438"},{url:"timeline/index.html",revision:"e9c40ee6fca9fb37a4c158e6c7a40f8a"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/images/cover1.jpg",revision:"1a661f8cca025ca27a846090c11b86ad"},{url:"assets/images/cover2.jpg",revision:"b228edd2b9054c83cb464d6b1ed8a4ae"},{url:"assets/images/cover3.jpg",revision:"88358b4d02ef94e59f1f563f38a94fad"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"},{url:"wxDonation.jpg",revision:"891b5665bcf0e1b6347cb0eaebc4c4c5"}],{}),e.cleanupOutdatedCaches()}));
