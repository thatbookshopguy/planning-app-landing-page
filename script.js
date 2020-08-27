var acc = document.getElementsByClassName('tab__title');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active');

    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
};

// слайдер

let slides = document.querySelectorAll('.slider__item');
let currentSlide = 0;

let next = document.getElementById('next');
let previous = document.getElementById('previous');

let dots = document.getElementsByClassName('dots__item');

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slider__item';
  dots[currentSlide].className = 'dots__item';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slider__item showing';
  dots[currentSlide].className = 'dots__item dots__item--active';
}

next.onclick = function() {
  nextSlide();
};

previous.onclick = function() {
  previousSlide();
};

// cлайдер цитат

$(document).ready(function() {
  $('.quotes__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1.5,
    infinite: false,
    speed: 1000,
    variableWidth: true,
  });
});

// image popups

let popup = document.getElementById('myPopup');
let wrapper = document.getElementById('myWrapper');
let bg = [
  'url(img/blog__1--large.jpg)',
  'url(img/blog__2--large.jpeg)',
  'url(img/blog__3--large.jpeg)',
];

function showPopup(n) {
  popup.classList.toggle('popup__content--active');
  wrapper.classList.toggle('popup__wrapper--active');
  popup.style.backgroundImage = bg[n];
  popup.style.backgroundSize = 'cover';
  popup.style.backgroundPosition = 'center';
}

function hidePopup() {
  popup.className = 'popup__content';
  wrapper.className = 'popup__wrapper';
}

