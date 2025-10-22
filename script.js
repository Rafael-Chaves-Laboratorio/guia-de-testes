document.addEventListener('DOMContentLoaded', function() {
    
    // Seletor de elementos
    const menuToggle = document.querySelector('.menu-toggle');
    const sumarioContainer = document.getElementById('sumario-container');
    const sumarioCloseBtn = document.querySelector('.sumario-close-btn');
    const faqItems = document.querySelectorAll('.faq-item');
    const sumarioLinks = document.querySelectorAll('.sumario-lista a');


    // --- LÓGICA DO MENU SUMÁRIO (mobile) ---
    function toggleSumario() {
        // Usa a classe 'open' do seu CSS para a animação de slide no mobile
        if (window.innerWidth <= 768) {
            sumarioContainer.classList.toggle('open');
        } 
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleSumario);
    }

    if (sumarioCloseBtn) {
        sumarioCloseBtn.addEventListener('click', toggleSumario);
    }
    
    // Fecha o sumário ao clicar em um link (útil no mobile)
    sumarioLinks.forEach(link => {
        link.addEventListener('click', () => {
             if (window.innerWidth <= 768) {
                 // Verifica se está aberto antes de tentar fechar
                 if (sumarioContainer.classList.contains('open')) {
                     toggleSumario();
                 }
             }
        });
    });

    // --- LÓGICA DO FAQ (Acordeão) ---
    if (faqItems) {
        faqItems.forEach(item => {
            const pergunta = item.querySelector('.faq-pergunta');
            
            pergunta.addEventListener('click', () => {
                const isExpanded = item.classList.contains('active');
                
                // Fecha todos os outros itens abertos
                document.querySelectorAll('.faq-item.active').forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-resposta').style.maxHeight = null;
                        otherItem.querySelector('.faq-icon').textContent = '+';
                    }
                });

                // Alterna o estado do item clicado
                item.classList.toggle('active');
                const resposta = item.querySelector('.faq-resposta');
                const icon = item.querySelector('.faq-icon');
                
                if (!isExpanded) {
                    // Abre: Define a altura máxima para o conteúdo fluir
                    resposta.style.maxHeight = resposta.scrollHeight + 'px';
                    icon.textContent = '-'; 
                } else {
                    // Fecha: Volta a altura máxima para null/0
                    resposta.style.maxHeight = null;
                    icon.textContent = '+';
                }
            });
        });
    }
});
