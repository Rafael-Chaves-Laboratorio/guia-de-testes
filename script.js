document.addEventListener('DOMContentLoaded', function() {
    // Lógica do menu, sumário e rolagem suave
    const menuToggle = document.querySelector('.menu-toggle');
    const sumarioContainer = document.querySelector('.sumario-container');
    const sumarioCloseBtn = document.querySelector('.sumario-close-btn');

    function toggleSumario() {
        sumarioContainer.classList.toggle('open');
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleSumario);
    }
    
    if (sumarioCloseBtn) {
        sumarioCloseBtn.addEventListener('click', toggleSumario);
    }

    document.querySelectorAll('.sumario-lista a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            if (window.innerWidth <= 768) {
                toggleSumario();
            }
        });
    });

    // Lógica do FAQ (acordeão)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const pergunta = item.querySelector('.faq-pergunta');
        pergunta.addEventListener('click', function() {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            } else {
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                item.classList.add('active');
            }
        });
    });

    // ====================================================================
    // === LÓGICA DE LOGIN (DESATIVADA) ===================================
    // Para reativar, remova os blocos '/*' e '*/' abaixo.
    // ====================================================================

    /*
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const sumarioContent = document.getElementById('sumario-container');
    const conteudoGuia = document.getElementById('conteudo-guia');
    const errorMessage = document.getElementById('error-message');

    // Defina seu usuário e senha aqui
    const USERNAME = 'suporte';
    const PASSWORD = 'suporte@RBT*100';

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio do formulário
        
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        if (usernameInput === USERNAME && passwordInput === PASSWORD) {
            // Login bem-sucedido: esconde o formulário e mostra o conteúdo
            loginContainer.classList.add('hidden');
            sumarioContent.classList.remove('hidden');
            conteudoGuia.classList.remove('hidden');

        } else {
            // Login falhou: mostra mensagem de erro
            errorMessage.textContent = 'Usuário ou senha incorretos.';
        }
    });
    */

    // ====================================================================
    // === LÓGICA DE ATIVAÇÃO DE CONTEÚDO (APÓS A REMOÇÃO DO LOGIN) =======
    // Essa parte garante que o conteúdo seja exibido por padrão.
    // ====================================================================

    // Remove a classe 'hidden' do sumário e do guia para que eles sejam exibidos por padrão
    const sumarioContent = document.getElementById('sumario-container');
    const conteudoGuia = document.getElementById('conteudo-guia');
    const loginContainer = document.getElementById('login-container');

    sumarioContent.classList.remove('hidden');
    conteudoGuia.classList.remove('hidden');

    // Oculta o formulário de login por padrão (se a classe 'hidden' não estiver no HTML)
    if (loginContainer) {
        loginContainer.classList.add('hidden');
    }

});
