const photos = [
  { src: 'assets/photos/bocchi1.jpg',  caption: '' },
  { src: 'assets/photos/bocchi2.jpg',  caption: '' },
  { src: 'assets/photos/bocchi3.jpg',  caption: '' },
  { src: 'assets/photos/bocchi4.jpg',  caption: '' },
  { src: 'assets/photos/bocchi5.jpg',  caption: '' },
  { src: 'assets/photos/bocchi6.jpg',  caption: '' },
  { src: 'assets/photos/bocchi7.jpg',  caption: '' },
  { src: 'assets/photos/bocchi8.jpg',  caption: '' },
  { src: 'assets/photos/bocchi9.jpg',  caption: '' },
  { src: 'assets/photos/bocchi10.jpg', caption: '' },
  { src: 'assets/photos/bocchi11.jpg', caption: '' },
  { src: 'assets/photos/bocchi12.jpg', caption: '' },
  { src: 'assets/photos/bocchi13.jpg', caption: '' },
  { src: 'assets/photos/bocchi14.jpg', caption: '' },
  { src: 'assets/photos/bocchi15.jpg', caption: '' },
  { src: 'assets/photos/bocchi16.jpg', caption: '' },
  { src: 'assets/photos/bocchi17.jpg', caption: '' },
  { src: 'assets/photos/bocchi18.jpg', caption: '' },
  { src: 'assets/photos/bocchi19.jpg', caption: '' },
  { src: 'assets/photos/bocchi20.jpg', caption: '' },
  { src: 'assets/photos/bocchi21.jpg', caption: '' },
  { src: 'assets/photos/bocchi22.jpg', caption: '' },
  { src: 'assets/photos/bocchi23.jpg', caption: '' },
  { src: 'assets/photos/bocchi24.jpg', caption: '' },
  { src: 'assets/photos/bocchi25.jpg', caption: '' },
  { src: 'assets/photos/bocchi26.jpg', caption: '' }
];

const photosPerPage = 9;
let currentPage = 1;

/* =========================
   ELEMENT
   ========================= */
const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const pageIndicator = document.getElementById('page-indicator');
const footer = document.getElementById('footer');
const farcasterBtn = document.getElementById('farcasterBtn');

/* =========================
   FARCASTER DRAFT (FIXED)
   ========================= */
function openFarcasterDraft(relativePath) {
  const baseURL = window.location.origin;
  const imageURL = `${baseURL}/${relativePath}`;

  const text = encodeURIComponent(
    `New Bocchi PFP 🌸\n\n${imageURL}`
  );

  const url = `https://warpcast.com/~/compose?text=${text}`;
  window.open(url, '_blank');
}

/* =========================
   RENDER GALLERY
   ========================= */
function renderGallery() {
  gallery.classList.add('fade-out');

  setTimeout(() => {
    gallery.innerHTML = '';

    const start = (currentPage - 1) * photosPerPage;
    const end = start + photosPerPage;
    const currentPhotos = photos.slice(start, end);

    currentPhotos.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo.src;
      img.alt = '';

      img.onclick = () => {
        lightbox.style.display = 'block';
        lightboxImg.src = photo.src;
        caption.textContent = '';
        document.body.style.overflow = 'hidden';

        if (farcasterBtn) {
          farcasterBtn.onclick = () => {
            openFarcasterDraft(photo.src);
          };
        }
      };

      gallery.appendChild(img);
    });

    const totalPages = Math.ceil(photos.length / photosPerPage);
    pageIndicator.textContent = `${currentPage} / ${totalPages}`;

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    gallery.classList.remove('fade-out');
    gallery.classList.add('fade-in');
  }, 200);
}

/* =========================
   PAGINATION
   ========================= */
prevBtn.onclick = () => {
  if (currentPage > 1) {
    currentPage--;
    renderGallery();
  }
};

nextBtn.onclick = () => {
  if (currentPage < Math.ceil(photos.length / photosPerPage)) {
    currentPage++;
    renderGallery();
  }
};

/* =========================
   LIGHTBOX CLOSE
   ========================= */
function closeLightbox() {
  lightbox.style.display = 'none';
  document.body.style.overflow = '';
}

lightbox.onclick = e => {
  if (e.target === lightbox) closeLightbox();
};

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

/* =========================
   FOOTER FADE-IN
   ========================= */
window.addEventListener('load', () => {
  if (footer) footer.classList.add('show');
});

/* =========================
   SWIPE (HP)
   ========================= */
let touchStartX = 0;
let touchEndX = 0;

gallery.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

gallery.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const distance = touchEndX - touchStartX;
  const minSwipe = 60;

  if (distance < -minSwipe && currentPage < Math.ceil(photos.length / photosPerPage)) {
    currentPage++;
    renderGallery();
  }

  if (distance > minSwipe && currentPage > 1) {
    currentPage--;
    renderGallery();
  }
}

/* INIT */
renderGallery();
