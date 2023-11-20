import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const listEl = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ description, original, preview }) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${original}" target="_blank">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>
`
  )
  .join('');

listEl.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
