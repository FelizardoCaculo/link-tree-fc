const linkTreeFc = "link-tree-fc";
const assets = [
    "/",    
    "/image1.webp",
    "/image2.webp",
    "/image3.webp",
    "/image4.webp",
    "/image5.webp",
    "/image6.webp",
    "/image7.webp",
    "/image8.webp",
    "/image9.webp",
    "/audio/audio.mp3",
    "icons/icon-72x72.png",
    "icons/icon-96x96.png",
    "/icons/icon-128x128.png",
    "/icons/icon-144x144.png",
    "/icons/icon-152x152.png",
    "/icons/icon-192x192.png",
    "/icons/maskable_icon.png",
    "/icons/icon-384x384.png",
    "/icons/icon-512x512.png",
    "/app.js",
    "/css/style.css",
    "/index.html",
    "/manifest.json"
]
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(linkTreeFc).then((cache) => {
           return cache.addAll(assets)
        })
    )
})
this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request).then((response) =>{
                    let responseClone = response.clone();
                    caches.open(linkTreeFc).then((cache) => {
                        cache.put(event.request, responseClone);
                    return response;
                    });
                });
        })
    );
});
