document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sumarioContainer = document.querySelector('.sumario-container');
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

    // Código para rolagem suave
    document.querySelectorAll('.sumario-lista a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Impede o pulo direto para o tópico

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // Fechar o sumário no mobile após o clique
            if (window.innerWidth <= 768) {
                toggleSumario();
            }
        });
    });

    // Código para a seção de FAQ (Perguntas Frequentes)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const pergunta = item.querySelector('.faq-pergunta');
        pergunta.addEventListener('click', function() {
            // Se o item já estiver ativo, feche-o.
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            } else {
                // Feche todos os outros itens de FAQ
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                // Abra o item clicado
                item.classList.add('active');
            }
        });
    });
});
