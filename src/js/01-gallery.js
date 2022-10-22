// Add imports above this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

import createImgGallery from "./partials/createimggallery";
import stopDefAction from "./partials/stopdefaction";

// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup =  createImgGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery__item', { 
   captionsData: "alt", 
   captionDelay: 250,
});

galleryContainer.addEventListener('click', stopDefAction);

