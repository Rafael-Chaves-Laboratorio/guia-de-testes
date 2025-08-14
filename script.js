document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const body = document.body;
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            body.classList.toggle('menu-aberto');
        });
    }
});
