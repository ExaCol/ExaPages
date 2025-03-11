document.addEventListener("DOMContentLoaded", function () {
  // Loading screen functionality
  const loadingContainer = document.querySelector('.loading-container');

  if (loadingContainer) {
    // Hide loading screen after 2 seconds
    setTimeout(function () {
      loadingContainer.style.opacity = '0';
      setTimeout(function () {
        loadingContainer.style.display = 'none';
      }, 500);
    }, 2000);
  }

  // Toggle info buttons functionality
  const buttons = document.querySelectorAll(".toggle-info");
  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const card = this.parentElement;
      card.classList.toggle("active");

      // Obtener el idioma actual y las traducciones
      const currentLanguage = localStorage.getItem('selectedLanguage') || 'es';
      const currentTranslations = translations[currentLanguage];

      // Cambiar el texto del botón según el estado y el idioma
      if (card.classList.contains("active")) {
        this.textContent = currentTranslations.team.lessInfo;
      } else {
        this.textContent = currentTranslations.team.moreInfo;
      }
    });
  });

  // Mobile menu toggle functionality
  const header = document.querySelector('.header');

  // Create menu toggle button
  const menuToggle = document.createElement('button');
  menuToggle.classList.add('menu-toggle');
  menuToggle.innerHTML = '☰';

  // Insert the menu toggle at the end of the header
  if (header) {
    header.appendChild(menuToggle);

    // Add event listener to toggle
    const navbar = document.querySelector('.navbar');
    menuToggle.addEventListener('click', function () {
      navbar.classList.toggle('active');
      this.innerHTML = navbar.classList.contains('active') ? '✕' : '☰';
    });

    // Close menu when clicking on links
    const navLinks = document.querySelectorAll('.navbar-menu li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navbar.classList.remove('active');
        menuToggle.innerHTML = '☰';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
      if (!navbar.contains(event.target) && event.target !== menuToggle) {
        navbar.classList.remove('active');
        menuToggle.innerHTML = '☰';
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Projects Slider Functionality
  const slider = document.querySelector('.projects-slider');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const projectCards = document.querySelectorAll('.project-card');

  let currentIndex = 0;
  const totalCards = projectCards.length;
  let autoSlideInterval;
  const AUTO_SLIDE_DELAY = 3000; // Cambia el slide cada 3 segundos

  function getVisibleCards() {
    // Determine number of visible cards based on screen width
    if (window.innerWidth > 992) return 3;
    if (window.innerWidth > 576) return 2;
    return 1;
  }

  function updateSlider() {
    const visibleCards = getVisibleCards();
    const maxIndex = Math.max(0, totalCards - visibleCards);

    // Ensure current index doesn't exceed max possible index
    currentIndex = Math.min(currentIndex, maxIndex);

    const cardWidth = projectCards[0].offsetWidth;
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    // Disable/enable buttons based on current position
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxIndex;
  }

  function nextSlide() {
    const visibleCards = getVisibleCards();
    if (currentIndex < totalCards - visibleCards) {
      currentIndex++;
    } else {
      currentIndex = 0; // Volver al inicio cuando llega al final
    }
    updateSlider();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, AUTO_SLIDE_DELAY);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Navegación manual
  nextBtn.addEventListener('click', function () {
    stopAutoSlide(); // Detener el auto-slide al hacer click manual
    if (currentIndex < totalCards - getVisibleCards()) {
      currentIndex++;
      updateSlider();
    }
    startAutoSlide(); // Reiniciar el auto-slide
  });

  prevBtn.addEventListener('click', function () {
    stopAutoSlide(); // Detener el auto-slide al hacer click manual
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
    startAutoSlide(); // Reiniciar el auto-slide
  });

  // Pausar auto-slide al pasar el mouse
  slider.addEventListener('mouseenter', stopAutoSlide);
  slider.addEventListener('mouseleave', startAutoSlide);

  // Initial setup and responsive handling
  updateSlider();
  startAutoSlide(); // Iniciar auto-slide
  window.addEventListener('resize', updateSlider);
});