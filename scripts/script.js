/* js da seção publicações (livros) */
const swiperLivros = new Swiper(".galeria-livros", {
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
    delay: 1500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  keyboard: {
    enable: true,
  },
});
