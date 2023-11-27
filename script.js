'strict mode';

// Sidebar toggle
const btnClose = document.querySelector('.sideBarClose');
const btnOpen = document.querySelector('.sideBarOpen');
const navbar = document.querySelector('.navbar');

btnClose.addEventListener('click', function () {
  navbar.style.display = 'none';
});

btnOpen.addEventListener('click', function () {
  navbar.style.display = 'flex';
});

///////////////////////////////////////
// Slider

const slider = function (gallerySelector) {
  const slides = document.querySelectorAll(`${gallerySelector} .slide`);
  let curSlide = 0;
  const maxSlide = slides.length;

  // Function to disable horizontal scroll
  const disableXScroll = function () {
    document.body.style.overflowX = 'hidden';
  };

  // Function to go to a specific slide
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${300 * (i - slide)}%)`)
    );
  };

  // Function to go to the next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };

  // Function to go to the previous slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  // Initialize the slider
  const init = function () {
    goToSlide(0);
    disableXScroll();
  };
  init();

  // Event listeners for next/previous buttons
  document
    .querySelector(`${gallerySelector} .slider__btn--right`)
    .addEventListener('click', nextSlide);
  document
    .querySelector(`${gallerySelector} .slider__btn--left`)
    .addEventListener('click', prevSlide);
};

// Initialize sliders for each gallery
slider('#auto-image-gallery');
slider('#opinions-gallery');