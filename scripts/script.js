/* js da seçao publicações (livros) */
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

/* js da seção linhas de pesquisa */
const swiperPesquisa = new Swiper(".swiper-pesquisa", {
  effect: 'slide',
  grabCursor: true,
  centeredSlides: true,
  direction: 'horizontal',
  loop: true,
  /* Ajuste fino do efeito slide do swiper */
  slidesPerView: 'auto',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  keyboard: {
    enable: true,
  }
});

const timeline = document.querySelectorAll(".timeline li .data");
      for (const time of timeline) {
        time.onclick = () => time.classList.toggle("show");
        {
        }
      };