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

var slides = document.querySelectorAll('.slider__item');
var currentSlide = 0;

var next = document.getElementById('next');
var previous = document.getElementById('previous');

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

function exactSlide(n) {
  currentSlide = n;
  goToSlide(currentSlide);
}
