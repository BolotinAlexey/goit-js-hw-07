import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', onClickGallery);

createGalleryInDOM();

// create HTML markdown of gallery
function createGalleryInDOM() {
  const injectHTML = galleryItems.map(createGalleryItem).join('');
  galleryEl.insertAdjacentHTML('beforeend', injectHTML);
}

// create a element of gallery
function createGalleryItem(el) {
  return `<div class="gallery__item">
    <a class="gallery__link" href= ${el.original}>
      <img
        loading=lazy
        class="gallery__image"
        src=${el.preview}
        data-source=${el.original}
        alt=${el.description}
      />
    </a>
    
  </div>`;
}

// openning modal window
function onClickGallery(e) {
  if (e.target.nodeName !== 'IMG') return;
  e.preventDefault();

  const instance = basicLightbox.create(
    `
    <img src=${e.target.dataset.source}>`,
    {
      onShow: () => {
        window.addEventListener('keydown', onKeydownEscape.bind(instance));
      },
    }
  );

  instance.show();
}

// closing modal window
function onKeydownEscape(e) {
  if (e.code === 'Escape') {
    this.close();
  }
}
