let slideIndex = 0;
const slides = document.querySelector(".banner-slides");
const images = document.querySelectorAll(".banner-slides img");
const totalSlides = images.length;

function showSlide(index) {
  slideIndex = (index + totalSlides) % totalSlides; 
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(step) {
  showSlide(slideIndex + step);
}

setInterval(() => {
  moveSlide(1);
}, 5000);
