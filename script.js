var acc = document.getElementsByClassName('tab__title');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
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

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slider__item';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slider__item showing';
}

next.onclick = function () {
  nextSlide();
};

previous.onclick = function () {
  previousSlide();
};

// cлайдер цитат

$(document).ready(function () {
  $('.quotes__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1.5,
    infinite: false,
    speed: 1000,
    variableWidth: true,
  });
});
