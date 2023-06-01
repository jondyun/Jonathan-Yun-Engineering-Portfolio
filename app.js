const track = document.querySelector('.carousel__track'); //defines as the first instance of carousel__track
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const nav = document.querySelector('.carousel__nav');
const dots = Array.from(nav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
//get dimensions

const setSlidePosition = (slide, i) => {
    slide.style.left = slideWidth * i + 'px';
};
slides.forEach(setSlidePosition);
//arrange slides next to each other in loop

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' +  targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

const hideShowArrors = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1)
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
};

prevButton.addEventListener('click', e => {
    const currentSlide = track.document.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = nav.querySelector('.current-slide');
    const prevDot = current.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows = (slides, prevButton, nextButton, prevIndex);
});

nextButton.addEventListener('click', e => {
    const currentSlide = track.document.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = nav.querySelector('.current-slide');
    const nextDot = current.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows = (slides, prevButton, nextButton, nextIndex);
});

nav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = nav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    add hideShowArrows = (slides, prevButton, nextButton, targetIndex);
});
//move the dots
