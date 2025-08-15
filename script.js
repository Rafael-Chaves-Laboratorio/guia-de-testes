document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sumarioContainer = document.querySelector('.sumario-container');
    const sumarioLinks = document.querySelectorAll('.sumario-lista a');

    // Abre/fecha pelo botão
    if (menuToggle && sumarioContainer) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // impede que o clique feche imediatamente
            sumarioContainer.classList.toggle('open');
        });
    }

    // Fecha ao clicar em um link do sumário
    if (sumarioLinks) {
        sumarioLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (sumarioContainer) {
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
