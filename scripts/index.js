const slides = document.getElementsByClassName('slides');
const leftCarouselPreview = document.querySelector(
  '.slide-control-left .img-preview'
);
const rightCarouselPreview = document.querySelector(
  '.slide-control-right .img-preview'
);

const switchBackgroundImage = (index) => {
  switch (true) {
    case index === 1:
      rightCarouselPreview.style.backgroundImage = "url('assets/shake.jpg')";
      leftCarouselPreview.style.backgroundImage = "url('assets/fuel.jpg')";
      break;
    case index === 2:
      rightCarouselPreview.style.backgroundImage = "url('assets/gear.jpg')";
      leftCarouselPreview.style.backgroundImage = "url('assets/stand.jpg')";
      break;
    case index === 3:
      rightCarouselPreview.style.backgroundImage = "url('assets/fuel.jpg')";
      leftCarouselPreview.style.backgroundImage = "url('assets/office.jpg')";
      break;
    case index === 4:
      rightCarouselPreview.style.backgroundImage = "url('assets/stand.jpg')";
      leftCarouselPreview.style.backgroundImage = "url('assets/shake.jpg')";
      break;
    case index === 5:
      rightCarouselPreview.style.backgroundImage = "url('assets/office.jpg')";
      leftCarouselPreview.style.backgroundImage = "url('assets/gear.jpg')";
      break;
    default:
      break;
  }
};

let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  switchBackgroundImage(slideIndex);
  setTimeout(showSlides, 15000);
}
