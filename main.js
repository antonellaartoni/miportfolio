document.addEventListener('DOMContentLoaded', () => {

    /* ============================
       Efecto de Scroll para el Fondo
    ============================= */
    const body = document.body;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            body.classList.add('scrolled');
        } else {
            body.classList.remove('scrolled');
        }
    });

    /* ============================
       Menú Responsive (Hamburguesa)
    ============================= */
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('header nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    /* ============================
       Smooth Scroll y cerrar menú móvil
    ============================= */
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                
                // Cierra el menú si está abierto (en móvil)
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
                
                // Scroll suave
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start' 
                });
            }
        });
    });

});