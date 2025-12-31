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

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

photos.forEach(photo => {
  const img = document.createElement('img');
  img.src = photo.src;
  img.alt = ''; // opsional: juga dikosongkan
  img.onclick = () => {
    lightbox.style.display = 'block';
    lightboxImg.src = photo.src;
    caption.textContent = photo.caption; // akan jadi kosong
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
