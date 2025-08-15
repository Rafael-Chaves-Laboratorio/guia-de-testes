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
}); // Não remova esta última linha, ela fecha a função document.addEventListener('DOMContentLoaded'
