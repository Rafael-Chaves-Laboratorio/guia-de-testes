document.addEventListener('DOMContentLoaded', function() {
    // Seletor de elementos
    const menuToggle = document.querySelector('.menu-toggle');
    const sumarioContainer = document.getElementById('sumario-container');
    const sumarioCloseBtn = document.querySelector('.sumario-close-btn');
    const faqItems = document.querySelectorAll('.faq-item');

    // Lógica do menu para mobile
    menuToggle.addEventListener('click', function() {
        sumarioContainer.classList.toggle('open'); // Usando 'open' para refletir o CSS
        menuToggle.classList.toggle('active');
    });

    sumarioCloseBtn.addEventListener('click', function() {
        sumarioContainer.classList.remove('open');
        menuToggle.classList.remove('active');
    });

    // Lógica do FAQ (Accordion)
    if (faqItems) {
        faqItems.forEach(item => {
            const pergunta = item.querySelector('.faq-pergunta');
            const resposta = item.querySelector('.faq-resposta');
            const icon = item.querySelector('.faq-icon');

            pergunta.addEventListener('click', () => {
                const isExpanded = resposta.classList.contains('active');
                
                // Fechar todos os outros
                document.querySelectorAll('.faq-resposta.active').forEach(resp => {
                    resp.classList.remove('active');
                    resp.style.maxHeight = null;
                });
                document.querySelectorAll('.faq-icon').forEach(ic => {
                    ic.textContent = '+';
                });

                // Abrir o item clicado
                if (!isExpanded) {
                    resposta.classList.add('active');
                    resposta.style.maxHeight = resposta.scrollHeight + 'px';
                    icon.textContent = '-';
                }
            });
        });
    }
});
