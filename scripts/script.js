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

/* Mobile Menu Toggle */
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const menuHeader = document.querySelector('#menuHeader');
const menuLinks = document.querySelectorAll('#menuHeader a');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    if (menuHeader) menuHeader.classList.toggle('mobile-menu-active');
  });
}

// Fechar menu ao clicar em um link
if (menuLinks && menuLinks.length) {
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menuHeader) menuHeader.classList.remove('mobile-menu-active');
    });
  });
}

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
}

/* --- Header height handling to avoid content hidden behind fixed header --- */
function updateHeaderHeight() {
  const header = document.getElementById('header-div');
  if (!header) return;
  const h = header.offsetHeight;
  document.documentElement.style.setProperty('--header-height', h + 'px');
  // Also add body padding so content doesn't get covered
  document.body.style.paddingTop = h + 'px';
}

window.addEventListener('load', updateHeaderHeight);
window.addEventListener('resize', updateHeaderHeight);
// fallback run
setTimeout(updateHeaderHeight, 50);
