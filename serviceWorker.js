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
    "/images/icons/icon-72x72.png",
    "/images/icons/icon-96x96.png",
    "/images/icons/icon-128x128.png",
    "/images/icons/icon-144x144.png",
    "/images/icons/icon-152x152.png",
    "/images/icons/icon-192x192.png",
    "/images/icons/icon-384x384.png",
    "/images/icons/icon-512x512.png",
    "/index.html",
    "/css/style.css",
    "/app.js",
    "/manifesto.json",
]
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(linkTreeFc).then(cache => {
            cache.addAll(assets)
        })
    )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})
