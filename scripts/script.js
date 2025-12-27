/* js da seçao publicações (livros) */
const swiper = new Swiper(".galeria-livros", {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  direction: 'horizontal',
  /* Ajuste fino do efeito coverflow do swiper */
  slidesPerView: 'auto',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  coverflowEffect: {
    rotate: 0,
    depth: 250,
    modifier: 1,
    slideShadows: false,
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
