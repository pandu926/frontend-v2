const CACHE_NAME = "my-cache";
const CACHE_FILES = [
  "/back.svg",
  "/edit.svg",
  "/home.svg",
  "/history.svg",
  "/logout.svg",
  "/profile.svg",
  "/sertif.svg",
  "/presenation.svg",

  // Tambahkan semua gambar yang ingin Anda cache di sini
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_FILES);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
