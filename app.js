//link it with console.log('test') (3:05 in video)
var track = document.querySelector('.carousel__track'); //defines as the first instance of carousel__track
var slides = Array.from(track.children);
var nextButtom = document.querySelector('.carousel__button--right');
var prevButton = document.querySelector('.carousel__button--left');
var nav = document.querySelector('.carousel__nav');
var dots = Array.from(nav.children);

var slideWidth = slides[0].getBoundingClientRect().width;
//get dimensions

var setSlidePosition = (slide, i) => {
    slide.style.left = slideWidth * i + 'px';
};
slides.forEach(setSlidePosition);
//arrange slides next to each other in loop

//20:44
