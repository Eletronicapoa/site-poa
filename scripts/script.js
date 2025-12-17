/* js da seçao publicações (livros) */
const swiper = new Swiper(".swiper", {
  effect: 'cards',
  grabCursor: true,
  centeredSlides: true,
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  loopedSlides: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  keyboard: {
    enable: true,
  },
});
