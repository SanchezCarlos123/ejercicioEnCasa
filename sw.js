if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let s={};const d=e=>c(e,f),o={module:{uri:f},exports:s,require:d};i[f]=Promise.all(a.map((e=>o[e]||d(e)))).then((e=>(r(...e),s)))}}define(["./workbox-926a8ce9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about.html",revision:"7b9f2bde0dbc44cd7cdee6855e4fa2fd"},{url:"classes.html",revision:"3085d56e3def01ce95401fcdee607c48"},{url:"css/styles.css",revision:"4b1d01cfc23c60232e8e1007aff4e13d"},{url:"image_icono.jpg",revision:"2fe40702f217442f211003f5bcf8666d"},{url:"images/android-chrome-192.png",revision:"e4393bc53d6fd55c4bf60f13f00f9d11"},{url:"images/apple-touch-icon.png",revision:"d461a918f7af2c2206750026687a6cc5"},{url:"images/classes-hero-image.jpg",revision:"f9ee9f4c6f0fcbd65222221704224a9f"},{url:"images/descarga.jpg",revision:"a0f978ce13c6e97ff7fc2e2070dc4cfe"},{url:"images/facebook-logo.png",revision:"936aec3f53e71feaa394020ffa063009"},{url:"images/favicon-32.png",revision:"9bca094a420d19e2a673a0c0fef79cce"},{url:"images/favicon.ico",revision:"823acc7ead0fc5e09a200cedc579bde8"},{url:"images/fitness-group.jpg",revision:"0aa705592f459839fd4781c877c68c52"},{url:"images/food-chicken.jpg",revision:"178a7dcffce064dd4a37147bd4aece06"},{url:"images/food-heart.jpg",revision:"b6d4cba3ba6e84ab97863e729a62da52"},{url:"images/food-thought.jpg",revision:"affbd25bc62deb577ce7c8556b5c2d21"},{url:"images/forward-fitness-logo.png",revision:"72c4fc6bb6c4d39f9132904848cf49db"},{url:"images/fresh-food.jpg",revision:"0aaf6da58bbf265957223586390d30b0"},{url:"images/hero-image.jpg",revision:"1dff9bcd8d0fe3b66a58168087bb2e56"},{url:"images/hero-veggies.jpg",revision:"6c8d4294cd9e28d054d1975cd02801bc"},{url:"images/LOGO.webp",revision:"ff9eb9cc097c837cfcd70cb5a6450a1c"},{url:"images/people-with-weights.jpg",revision:"f9fa238f03f32074b55c35f13142b2e6"},{url:"images/people-workingout-machines.jpg",revision:"5f944aed9f1b681bff19fef3b5701e3c"},{url:"images/personal-trainer.jpg",revision:"f52764e1d4dc3f45fd0698899f5602ad"},{url:"images/SKIPING1.gif",revision:"e4fe4787307c389b80c1f5b3c517ccf6"},{url:"images/SKIPING2.gif",revision:"349deb5a05adc6fe9dc3ddb017478b01"},{url:"images/SKIPING3.gif",revision:"59774e7da7a3b5b5ca04e17ef5cca122"},{url:"images/SKIPING4.gif",revision:"22a7e300b57786449e1cad847b28e0cd"},{url:"images/SKIPING5.gif",revision:"d4c016be5b93431c5ae3a9b3316ac372"},{url:"index.html",revision:"3e53217a91a863109b7cc1ce3e045108"},{url:"media/burpees-descriptions.vtt",revision:"6a70ca64e7ee6974870ca6e703b020be"},{url:"media/burpees.mp4",revision:"f1b53bf606c471a7b1e753619ad9b19d"},{url:"media/descriptions.vtt",revision:"7b84e1627fee2cf2124d9d5eca9bc347"},{url:"media/mc.mp4",revision:"4821685ee7217f45f836cdfc811d3931"},{url:"media/mountain-descriptions.vtt",revision:"8a4ea19c5ed7fee6bb3e98efba3fba96"},{url:"media/plank-descriptions.vtt",revision:"08c399d39b4517d3e89ae5080b12b520"},{url:"media/plank.mp4",revision:"fd455a378e062f21ec8f396d857b1f0a"},{url:"nutrition.html",revision:"3c495762d7513d185f7bbba8b763817b"},{url:"scrpit.js",revision:"8c26761685ce307f7151c4235ec914e2"},{url:"template.html",revision:"fb8421bb29c4504fa223d3a5be3e6ed7"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
