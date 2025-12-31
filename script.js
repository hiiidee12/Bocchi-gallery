const photos = [
  { src: 'assets/photos/bocchi1.jpg',  caption: 'chibi bocchi' },
  { src: 'assets/photos/bocchi2.jpg',  caption: 'k-on bocchi' },
  { src: 'assets/photos/bocchi3.jpg',  caption: 'christmas bocchi' },
  { src: 'assets/photos/bocchi4.jpg',  caption: 'bocchi moment #4' },
  { src: 'assets/photos/bocchi5.jpg',  caption: 'bocchi moment #5' },
  { src: 'assets/photos/bocchi6.jpg',  caption: 'bocchi moment #6' },
  { src: 'assets/photos/bocchi7.jpg',  caption: 'bocchi moment #7' },
  { src: 'assets/photos/bocchi8.jpg',  caption: 'bocchi moment #8' },
  { src: 'assets/photos/bocchi9.jpg',  caption: 'bocchi moment #9' },
  { src: 'assets/photos/bocchi10.jpg', caption: 'bocchi moment #10' },
  { src: 'assets/photos/bocchi11.jpg', caption: 'bocchi moment #11' },
  { src: 'assets/photos/bocchi12.jpg', caption: 'bocchi moment #12' },
  { src: 'assets/photos/bocchi13.jpg', caption: 'bocchi moment #13' },
  { src: 'assets/photos/bocchi14.jpg', caption: 'bocchi moment #14' },
  { src: 'assets/photos/bocchi15.jpg', caption: 'bocchi moment #15' },
  { src: 'assets/photos/bocchi16.jpg', caption: 'bocchi moment #16' },
  { src: 'assets/photos/bocchi17.jpg', caption: 'bocchi moment #17' },
  { src: 'assets/photos/bocchi18.jpg', caption: 'bocchi moment #18' },
  { src: 'assets/photos/bocchi19.jpg', caption: 'bocchi moment #19' },
  { src: 'assets/photos/bocchi20.jpg', caption: 'bocchi moment #20' },
  { src: 'assets/photos/bocchi21.jpg', caption: 'bocchi moment #21' },
  { src: 'assets/photos/bocchi22.jpg', caption: 'bocchi moment #22' },
  { src: 'assets/photos/bocchi23.jpg', caption: 'bocchi moment #23' },
  { src: 'assets/photos/bocchi24.jpg', caption: 'bocchi moment #24' },
  { src: 'assets/photos/bocchi25.jpg', caption: 'bocchi moment #25' },
  { src: 'assets/photos/bocchi26.jpg', caption: 'bocchi moment #26' }
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
