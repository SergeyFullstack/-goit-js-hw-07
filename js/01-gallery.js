import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');

const itemsMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

galleryContainer.addEventListener('click', createModal);

function createGallery(items) {
    return items.map(({preview, original, description}) => {
        return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                 alt="${description}" />
               </a>
               </div>`}).join('');
}

function createModal(el) {

el.preventDefault();
  
const ItemImage = el.target.classList.contains("gallery__image");
if (!ItemImage) {
return;  
}

const currentImageUrl = el.target.dataset.source;

const instance = basicLightbox.create(`<img src="${currentImageUrl}" width="1280" height="1080"/>`);

instance.show();
}
