/* js da seçao publicações (livros) */
const swiper = new Swiper(".galeria-livros", {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  direction: 'horizontal',
  loop: true,
  /* Ajuste fino do efeito coverflow do swiper */
  coverflowEffect: {
    rotate: 0,
    stretch: 250,
    depth: 250,
    modifier: 1,
    slideShadows: false,
  },
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  keyboard: {
    enable: true,
  },
});
