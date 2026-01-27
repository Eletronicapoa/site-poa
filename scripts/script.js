/* js da seçao publicações (livros) */
const swiperLivros = new Swiper(".galeria-livros", {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  direction: 'horizontal',
  /* Ajuste fino do efeito coverflow do swiper */
  slidesPerView: 'auto',
  navigation: {
    // Como os botões estão fora, é mais seguro usar classes únicas ou IDs
    // Mas o padrão abaixo deve funcionar se não houver outros swipers na tela
    // sealgo relacionado aos botões quebrar em outro momento, lembre de checar aqui
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

/* Filtro de Notícias por Ano */
const filterButtons = document.querySelectorAll(".filter-btn");
const noticiasCards = document.querySelectorAll(".noticia-card");
const noticiasContainers = document.querySelectorAll(".noticias-content");
const noticiasYearSections = document.querySelectorAll(".noticia-year-section");

filterButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Remove active state from all buttons
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    
    const selectedYear = button.getAttribute("data-filter");
    
    // Filtra cards
    noticiasCards.forEach(card => {
      const cardYear = card.getAttribute("data-year");
      if (selectedYear === "all" || cardYear === selectedYear) {
        card.setAttribute("data-hidden", "false");
      } else {
        card.setAttribute("data-hidden", "true");
      }
    });
    
    // Filtra containers de conteúdo
    noticiasContainers.forEach(container => {
      const containerYear = container.getAttribute("data-year");
      if (selectedYear === "all" || containerYear === selectedYear) {
        container.setAttribute("data-hidden", "false");
      } else {
        container.setAttribute("data-hidden", "true");
      }
    });
    
    // Filtra seções de ano
    noticiasYearSections.forEach(section => {
      const sectionYear = section.getAttribute("data-year");
      if (selectedYear === "all" || sectionYear === selectedYear) {
        section.setAttribute("data-hidden", "false");
      } else {
        section.setAttribute("data-hidden", "true");
      }
    });
  });
});

// Set "Todos" as default active filter
const defaultFilter = document.querySelector(".filter-btn[data-filter='all']");
if (defaultFilter) {
  defaultFilter.classList.add("active");
}

const timeline = document.querySelectorAll(".timeline li .data");
      for (const time of timeline) {
        time.onclick = () => time.classList.toggle("show");
        {
        }
      };