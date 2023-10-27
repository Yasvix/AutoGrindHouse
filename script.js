'strict mode';

const btnClose = document.querySelector('.sideBarClose');
const btnOpen = document.querySelector('.sideBarOpen');
const navbar = document.querySelector('.navbar');



btnClose.addEventListener('click', function() {
    navbar.style.display = "none";
});


btnOpen.addEventListener('click', function() {
    navbar.style.display = "flex";
});


///////////////////////////////////////
// Slider

const slider = function() {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');

    let curSlide = 0;
    const maxSlide = slides.length;

    const disableXScroll = function() {
        document.body.style.overflowX = 'hidden';

    }

    const goToSlide = function(slide) {
        slides.forEach(
            (s, i) => (s.style.transform = `translateX(${125 * (i - slide)}%)`)
        );
    };

    const nextSlide = function() {
        if(curSlide === maxSlide - 1) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        goToSlide(curSlide);
        
    };

    const prevSlide = function () {
        if (curSlide === 0) {
          curSlide = maxSlide - 1;
        } else {
          curSlide--;
        }
        goToSlide(curSlide);
        
    };

    const init = function() {
        goToSlide(0);
        disableXScroll();
    };
    init();
    

    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    

};
slider();
