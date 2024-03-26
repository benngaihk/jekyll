                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/2024/03/26/wechaty-in-2024gdc/","revision":"082f7283d2915ebd8d89b43f41d57caa"},{"url":"/2024/02/18/wechaty-gsod-gifts/","revision":"d51f4db6225b3e6d63759529f13e7fc3"},{"url":"/2024/02/05/devfest-silicon-valley-google-developer-group-tensorflow-js/","revision":"a40a312ac78808d0da236240f9f03ea7"},{"url":"/2023/11/21/digital-socialworker-assisstant/","revision":"27827dde3c7ad1f5bae6a78ce8cffe21"},{"url":"/2023/10/24/game-designer-group-on-wechat/","revision":"77b13bbdbdd29a2ef4cb89a2b9f85394"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Wechaty',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
