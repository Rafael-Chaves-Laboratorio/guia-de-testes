document.addEventListener('DOMContentLoaded', function() {
    // Seletor de elementos
    const menuToggle = document.querySelector('.menu-toggle');
    const sumarioContainer = document.getElementById('sumario-container');
    const sumarioCloseBtn = document.querySelector('.sumario-close-btn');
    const mainContent = document.getElementById('main-content-protected');
    const loginContainer = document.getElementById('login-container');
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const faqItems = document.querySelectorAll('.faq-item');

    // Lógica do menu e login
    menuToggle.addEventListener('click', function() {
        sumarioContainer.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    sumarioCloseBtn.addEventListener('click', function() {
        sumarioContainer.classList.remove('active');
        menuToggle.classList.remove('active');
    });

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const password = loginForm.password.value;
            const correctPassword = "rededeacesso123";

            if (password === correctPassword) {
                loginContainer.classList.add('hidden');
                mainContent.classList.remove('main-content-protected');
                mainContent.classList.add('main-content-unprotected');
            } else {
                errorMessage.textContent = 'Senha incorreta. Tente novamente.';
            }
        });
    }

    // Lógica do FAQ
    if (faqItems) {
        faqItems.forEach(item => {
            const pergunta = item.querySelector('.faq-pergunta');
            const resposta = item.querySelector('.faq-resposta');
            const icon = item.querySelector('.faq-icon');

            pergunta.addEventListener('click', () => {
                const isExpanded = resposta.classList.contains('active');
                
                document.querySelectorAll('.faq-resposta.active').forEach(resp => {
                    resp.classList.remove('active');
                    resp.style.maxHeight = null;
                });
                document.querySelectorAll('.faq-icon').forEach(ic => {
                    ic.textContent = '+';
                });

                if (!isExpanded) {
                    resposta.classList.add('active');
                    resposta.style.maxHeight = resposta.scrollHeight + 'px';
                    icon.textContent = '-';
                }
            });
        });
    }
});
