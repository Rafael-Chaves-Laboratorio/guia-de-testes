document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sumarioContainer = document.querySelector('.sumario-container');
    
    // Novo botão de fechar o sumário
    const sumarioCloseBtn = document.querySelector('.sumario-close-btn');

    // Função para alternar a visibilidade do sumário
    function toggleSumario() {
        sumarioContainer.classList.toggle('open');
    }

    // Evento de clique no botão do menu (mobile)
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleSumario);
    }
    
    // Evento de clique no novo botão de fechar
    if (sumarioCloseBtn) {
        sumarioCloseBtn.addEventListener('click', toggleSumario);
    }

    // Evento para fechar o sumário quando um item é clicado (comportamento padrão)
    const sumarioLinks = document.querySelectorAll('.sumario-lista a');
    sumarioLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                toggleSumario();
            }
        });
    });
});
