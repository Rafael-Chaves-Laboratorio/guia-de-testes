document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sumarioContainer = document.querySelector('.sumario-container');
    const sumarioLinks = document.querySelectorAll('.sumario-lista a');

    if (menuToggle && sumarioContainer) {
        menuToggle.addEventListener('click', () => {
            sumarioContainer.classList.toggle('open');
        });
    }

    if (sumarioLinks) {
        sumarioLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (sumarioContainer) {
                    sumarioContainer.classList.remove('open');
                }
            });
        });
    }
});
