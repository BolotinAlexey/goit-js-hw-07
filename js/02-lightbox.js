import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

createGalleryInDOM();

// config gallery
const gallerySetting = {
  captionDelay: 250,
  captionsData: 'alt',
};

// on turn library "SimpleLightbox"
const lightbox = new SimpleLightbox('.gallery a', gallerySetting);

// create HTML markdown of gallery
function createGalleryInDOM() {
  const injectHTML = galleryItems.map(createGalleryItem).join('');
  galleryEl.insertAdjacentHTML('beforeend', injectHTML);
}

// create a element of gallery
function createGalleryItem(el) {
  return `<a class="gallery__item" href= ${el.original}>
  <img class="gallery__image" src=${el.preview} alt=${el.description} />
</a>`;
}
