// PORTAFOLIO PLATZI - VERSIÓN LIMPIA SIN ANIMACIONES
document.addEventListener('DOMContentLoaded', function() {
    // Solo inicialización básica
    initStaticNavigation();
    initBasicButtons();
});

// Navegación completamente estática
function initStaticNavigation() {
    // Forzar posición estática
    const nav = document.querySelector('.floating-nav');
    if (nav) {
        nav.style.position = 'fixed';
        nav.style.top = '24px';
        nav.style.left = '50%';
        nav.style.transform = 'translateX(-50%)';
        nav.style.transition = 'none';
    }

    // Solo navegación suave entre secciones
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                e.preventDefault(); // Solo prevenir si encontramos la sección
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Funcionalidad básica de botones
function initBasicButtons() {
    // Botones de proyectos
    const projectBtns = document.querySelectorAll('.project-btn');
    projectBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            if (index === 0) {
                window.location.href = 'platziNavbar.html';
            } else if (index === 1) {
                window.location.href = 'platziStore.html';
            }
        });
    });

    // Botones CTA
    const ctaBtns = document.querySelectorAll('.cta-button');
    ctaBtns.forEach((btn) => {
        btn.addEventListener('click', function() {
            if (btn.classList.contains('primary')) {
                document.getElementById('journey').scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                document.getElementById('projects').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}