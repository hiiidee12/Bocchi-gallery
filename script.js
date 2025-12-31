const photos = [
  { src: 'assets/photos/bocchi1.jpg', caption: 'chibi bocchi' },
  { src: 'assets/photos/bocchi2.jpg', caption: 'k-on bocchi' },
  { src: 'assets/photos/bocchi3.jpg', caption: 'christmas bocchi' },
  // ➕ Tambahkan sesuai jumlah foto kamu
];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

photos.forEach(photo => {
  const img = document.createElement('img');
  img.src = photo.src;
  img.alt = photo.caption;
  img.onclick = () => {
    lightbox.style.display = 'block';
    lightboxImg.src = photo.src;
    caption.textContent = photo.caption;
  };
  gallery.appendChild(img);
});

closeBtn.onclick = () => lightbox.style.display = 'none';
lightbox.onclick = (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
};
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') lightbox.style.display = 'none';
});
