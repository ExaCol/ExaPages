document.addEventListener("DOMContentLoaded", function() {
  const loadingContainer = document.querySelector(".loading-container");
  const content = document.getElementById("content");

  setTimeout(() => {
      loadingContainer.style.opacity = "0"; // Suaviza la transición
      setTimeout(() => {
          loadingContainer.style.display = "none"; // Oculta completamente
          content.style.display = "block"; // Muestra el contenido
      }, 500); // Espera a que termine la animación
  }, 2000); // Ajusta el tiempo de carga
});

document.addEventListener("DOMContentLoaded", function() {
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
});
