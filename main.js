const modifiers = {
  ImgThumbnailActive: 'img-showcase__thumbnail--active',
  lightboxOpen: 'lightbox--open'
};

const elProductPageGallery = document.querySelector('.product-page__gallery');
const elImgShowcaseImg = elProductPageGallery.querySelector('.img-showcase__img');
const elsImgShowcaseThumbnailButton = elProductPageGallery.querySelectorAll('.js-showcase-thumbnail-button');
const elsImgThumbnail = elProductPageGallery.querySelectorAll('.img-showcase__thumbnail');

elsImgShowcaseThumbnailButton.forEach(function (elButton){
  elButton.addEventListener('click', function(){
    // Remove activates
    elsImgThumbnail.forEach(function (elImgThumbnail){
      elImgThumbnail.classList.remove(modifiers.ImgThumbnailActive);
    });

    // Add activates
    elButton.parentElement.classList.add(modifiers.ImgThumbnailActive);

    // Set active img src
    elImgShowcaseImg.src = elButton.dataset.imgShowcaseBig;
  });
});

// Lightbox
const elLightbox = document.querySelector('.lightbox');
const elLightboxOpener = document.querySelector('.js-lightbox-opener');
const elLightboxClose = document.querySelector('.js-lightbox-close');

if (elLightboxOpener) {
  elLightboxOpener.addEventListener('click', function () {
    elLightbox.classList.add(modifiers.lightboxOpen);
  });
}
if (elLightboxClose) {
  elLightboxClose.addEventListener('click', function () {
    elLightbox.classList.remove(modifiers.lightboxOpen);
  });
}

// Thumbnail click
const elImgLightboxImg = elLightbox.querySelector('.img-showcase__img');
const elsImgLightboxThumbnailButton = elLightbox.querySelectorAll('.js-lightbox-thumbnail-button');
const elsLightboxImgThumbnail = elLightbox.querySelectorAll('.img-showcase__thumbnail');

elsImgLightboxThumbnailButton.forEach(function (elButton) {
  elButton.addEventListener('click', function () {
    // Remove activates
    elsLightboxImgThumbnail.forEach(function (elImgThumbnail) {
      elImgThumbnail.classList.remove(modifiers.ImgThumbnailActive);
    });

    // Add activates
    elButton.parentElement.classList.add(modifiers.ImgThumbnailActive);

    // Set active img src
    elImgLightboxImg.src = elButton.dataset.imgShowcaseBig;
  });
});

// Lightbox control
const elLightboxControlPrev = elLightbox.querySelector('.js-lightbox-control-prev');
const elLightboxControlNext = elLightbox.querySelector('.js-lightbox-control-next');

if (elLightboxControlNext) {
  elLightboxControlNext.addEventListener('click', function () {
    const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail--active');
    elActiveItem.classList.remove(modifiers.ImgThumbnailActive);

    let elNextActiveItem;

    if (elActiveItem.nextElementSibling === null) {
      elNextActiveItem = elsLightboxImgThumbnail[0];
    } else {
      elNextActiveItem = elActiveItem.nextElementSibling;
    }

    elNextActiveItem.classList.add(modifiers.ImgThumbnailActive);

    elImgLightboxImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig;
  });
}

if (elLightboxControlPrev) {
  elLightboxControlPrev.addEventListener('click', function () {
    const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail--active');
    elActiveItem.classList.remove(modifiers.ImgThumbnailActive);

    let elPrevActiveItem;

    if (elActiveItem.previousElementSibling === null) {
      elPrevActiveItem = elsLightboxImgThumbnail[9];
    } else {
      elPrevActiveItem = elActiveItem.previousElementSibling;
    }

    elPrevActiveItem.classList.add(modifiers.ImgThumbnailActive);

    elImgLightboxImg.src = elPrevActiveItem.children[0].dataset.imgShowcaseBig;
  });
}

// Increment-Decrement
const elDecrementButton = document.querySelector('.js-decrement-button');
const elIncrementButton = document.querySelector('.js-increment-button');
const elProductPageInfoNumber = document.querySelector('.product-page-info__number');

if (elIncrementButton) {
  elIncrementButton.addEventListener('click', function () {
    elProductPageInfoNumber.textContent = parseInt(elProductPageInfoNumber.textContent, 10) + 1;
  });
}
if (elDecrementButton) {
  elDecrementButton.addEventListener('click', function () {
    const qty = parseInt(elProductPageInfoNumber.textContent, 10);

    if (qty) {
      elProductPageInfoNumber.textContent = qty - 1;
    }
  });
}