document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sumarioContainer = document.querySelector('.sumario-container');
    const sumarioLinks = document.querySelectorAll('.sumario-lista a');

    // Abre/fecha pelo botão
    if (menuToggle && sumarioContainer) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sumarioContainer.classList.toggle('open');
        });
    }

    // Scroll suave e fechamento no mobile ao clicar em um link
    if (sumarioLinks) {
        sumarioLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // impede o salto instantâneo
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth', // scroll suave
                        block: 'start'
                    });
                }

                // Fecha menu no mobile
                if (sumarioContainer.classList.contains('open')) {
                    sumarioContainer.classList.remove('open');
                }
            });
        });
    }

    // Fecha ao clicar fora do sumário no mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && sumarioContainer.classList.contains('open')) {
            if (!sumarioContainer.contains(e.target) && !menuToggle.contains(e.target)) {
                sumarioContainer.classList.remove('open');
            }
        }
    });
});
