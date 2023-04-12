const linkTreeFc = "link-tree-fc";
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/app.js",
    "/manifest.json",
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
