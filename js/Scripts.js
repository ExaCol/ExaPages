document.addEventListener("DOMContentLoaded", function() {   
  // Loading screen functionality
  const loadingContainer = document.querySelector('.loading-container');
  
  if (loadingContainer) {
    // Hide loading screen after 2 seconds
    setTimeout(function() {
      loadingContainer.style.opacity = '0';
      setTimeout(function() {
        loadingContainer.style.display = 'none';
      }, 500);
    }, 2000);
  }
  
  // Toggle info buttons functionality
  const buttons = document.querySelectorAll(".toggle-info");
  
  buttons.forEach(button => {
    button.addEventListener("click", function() {
      const card = this.parentElement;
      card.classList.toggle("active");
      
      // Cambiar el texto del botón según el estado
      if (card.classList.contains("active")) {
        this.textContent = "Menos información";
      } else {
        this.textContent = "Más información";
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
    menuToggle.addEventListener('click', function() {
      navbar.classList.toggle('active');
      this.innerHTML = navbar.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close menu when clicking on links
    const navLinks = document.querySelectorAll('.navbar-menu li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navbar.classList.remove('active');
        menuToggle.innerHTML = '☰';
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navbar.contains(event.target) && event.target !== menuToggle) {
        navbar.classList.remove('active');
        menuToggle.innerHTML = '☰';
      }
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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