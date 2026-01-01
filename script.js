const photos = [
  { src: 'assets/photos/bocchi1.jpg' },
  { src: 'assets/photos/bocchi2.jpg' },
  { src: 'assets/photos/bocchi3.jpg' },
  { src: 'assets/photos/bocchi4.jpg' },
  { src: 'assets/photos/bocchi5.jpg' },
  { src: 'assets/photos/bocchi6.jpg' },
  { src: 'assets/photos/bocchi7.jpg' },
  { src: 'assets/photos/bocchi8.jpg' },
  { src: 'assets/photos/bocchi9.jpg' },
  { src: 'assets/photos/bocchi10.jpg' },
  { src: 'assets/photos/bocchi11.jpg' },
  { src: 'assets/photos/bocchi12.jpg' },
  { src: 'assets/photos/bocchi13.jpg' },
  { src: 'assets/photos/bocchi14.jpg' },
  { src: 'assets/photos/bocchi15.jpg' },
  { src: 'assets/photos/bocchi16.jpg' },
  { src: 'assets/photos/bocchi17.jpg' },
  { src: 'assets/photos/bocchi18.jpg' },
  { src: 'assets/photos/bocchi19.jpg' },
  { src: 'assets/photos/bocchi20.jpg' },
  { src: 'assets/photos/bocchi21.jpg' },
  { src: 'assets/photos/bocchi22.jpg' },
  { src: 'assets/photos/bocchi23.jpg' },
  { src: 'assets/photos/bocchi24.jpg' },
  { src: 'assets/photos/bocchi25.jpg' },
  { src: 'assets/photos/bocchi26.jpg' }
];

const photosPerPage = 9;
let currentPage = 1;
let activePhoto = null;

/* ELEMENT */
const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const farcasterBtn = document.getElementById('farcasterBtn');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const pageIndicator = document.getElementById('page-indicator');
const footer = document.getElementById('footer');

/* FARCASTER (NO SPASI, NO NEWLINE) */
function openFarcasterDraft(photoSrc) {
  const imageURL = new URL(photoSrc, window.location.origin).href;
  const encodedImageURL = encodeURIComponent(imageURL);
  const text = "[add your quote here]%0A" + encodedImageURL + "%0AFollow: @bocchi ✨";
  window.open("https://warpcast.com/~/compose?text=" + text, "_blank");
}

/* RENDER GALLERY */
function renderGallery() {
  gallery.innerHTML = '';

  const start = (currentPage - 1) * photosPerPage;
  const end = start + photosPerPage;
  const currentPhotos = photos.slice(start, end);

  currentPhotos.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.src;

    img.onclick = () => {
      activePhoto = photo.src;
      lightbox.style.display = 'block';
      lightboxImg.src = photo.src;
      document.body.style.overflow = 'hidden';
    };

    gallery.appendChild(img);
  });

  const totalPages = Math.ceil(photos.length / photosPerPage);
  pageIndicator.textContent = `${currentPage} / ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

/* BUTTON FARCASTER */
farcasterBtn.onclick = () => {
  if (activePhoto) {
    openFarcasterDraft(activePhoto);
  }
};

/* CLOSE LIGHTBOX */
lightbox.onclick = e => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  }
};

/* PAGINATION */
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

/* FOOTER */
window.addEventListener('load', () => {
  if (footer) footer.classList.add('show');
});

/* INIT */
renderGallery();
