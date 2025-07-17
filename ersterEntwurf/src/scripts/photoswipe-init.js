// src/scripts/photoswipe-init.js

// Sicherheitsabfrage: Nur im Browser ausführen, nicht auf dem Server!
if (typeof window !== "undefined") {
    import('https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.js').then((module) => {
      const PhotoSwipeLightbox = module.default;
  
      const lightbox = new PhotoSwipeLightbox({
        gallery: '.gallery-grid',
        children: 'a',
        pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js'),
      });
  
      lightbox.init();
    });
  }
  