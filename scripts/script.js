/* JS dos slides */
const swiperSlides = new Swiper(".swiper-slides", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

/* js da seçao publicações (livros) */
var swiperLivros = new Swiper(".swiper-livros", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 2,
    stretch: 20,
    depth: 80,
    modifier: 7.2,
    slideShadows: true,
  },
  slidesPerView: 2,
  spaceBetween: 30,
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
  mousewheel: {
    thresholdDelta: 990,
  },
  /* breakpoints:{
          560:{
            slidesPerView: 2
          },
          768:{
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }  */
});

/* !!!!!Script que não serve pra nada (oq foi que a julia fez aqui????????)!!!!!!!!!!!!!! */

/* document.addEventListener("DOMContentLoaded", function () {
  const timeline = document.querySelector('.timeline-horizontal');
  let isDown = false;
  let startX;
  let scrollLeft;

  if (timeline) {
    timeline.addEventListener('mousedown', (e) => {
      isDown = true;
      timeline.classList.add('active');
      startX = e.pageX - timeline.offsetLeft;
      scrollLeft = timeline.scrollLeft;
      e.preventDefault();
    });

    timeline.addEventListener('mouseleave', () => {
      isDown = false;
      timeline.classList.remove('active');
    });

    timeline.addEventListener('mouseup', () => {
      isDown = false;
      timeline.classList.remove('active');
    });

    timeline.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - timeline.offsetLeft;
      const walk = (x - startX) * 2; // multiplica para aumentar a velocidade
      timeline.scrollLeft = scrollLeft - walk;
    });

    // Mantém o scroll com a roda do mouse
    timeline.addEventListener('wheel', function (e) {
      if (e.deltaY !== 0) {
        e.preventDefault();
        timeline.scrollLeft += e.deltaY * 3;
      }
    });
  }
});

let count = 1;
document.getElementById('radio1').checked = true;

setInterval( function(){
  nextImage();
}, 2000)

/* const swiper = new Swiper('.swiper',
  {
    slidesPerView: 3

  }
) */

/* function nextImage(){
  count++;
  if(count>4){
    count = 1;
  }

  document.getElementById('radio'+count).checked = true;

};
 */
