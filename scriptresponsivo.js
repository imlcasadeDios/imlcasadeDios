function toggleMenu() {
      const menu = document.getElementById('menu');
      menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    }

    // Opcional: cerrar el menú al hacer clic fuera en móvil
    document.addEventListener('click', function(e) {
      const menu = document.getElementById('menu');
      const hamburger = document.querySelector('.hamburger');
      if (!menu.contains(e.target) && !hamburger.contains(e.target) && window.innerWidth < 600) {
        menu.style.display = 'none';
      }
    });
