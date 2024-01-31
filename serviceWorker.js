const linkTreeFc = "link-tree-fc";
const assets = [
    "/",    
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
    "/image6.jpg",
    "/image7.jpg",
    "/image8.jpg",
    "/image9.jpg",
    "/icons/icon-72x72.png",
    "/icons/icon-96x96.png",
    "/icons/icon-128x128.png",
    "/icons/icon-144x144.png",
    "/icons/icon-152x152.png",
    "/icons/icon-192x192.png",
    "/icons/icon-384x384.png",
    "/icons/icon-512x512.png",
    "/index.html",
    "/css/style.css",
    "/app.js",
    "/manifest.json"
]
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(linkTreeFc).then((cache) => {
           return cache.addAll(assets);
        })
    );
});
this.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.resquest).then((response) =>{
            return response || fetch(event.request).then((response) => {
                let responseClone = response.clone();
                caches.open(linkTreeFc).then((cache) => {
                    cache.put(event.request, responseClone);
                    return response;
                });
            });
        })
    );
});
