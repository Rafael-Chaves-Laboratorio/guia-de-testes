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

document.addEventListener('DOMContentLoaded', () => {
    // Lógica para o menu mobile, que você já tem
    const menuToggle = document.querySelector('.menu-toggle');
    const sumarioContainer = document.querySelector('.sumario-container');
    const sumarioCloseBtn = document.querySelector('.sumario-close-btn');

    menuToggle.addEventListener('click', () => {
        sumarioContainer.classList.add('open');
    });

    sumarioCloseBtn.addEventListener('click', () => {
        sumarioContainer.classList.remove('open');
    });

    // Lógica para o FAQ (acordeão)
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const pergunta = item.querySelector('.faq-pergunta');
        pergunta.addEventListener('click', () => {
            // Fecha todos os itens abertos
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Alterna a classe 'active' no item clicado
            item.classList.toggle('active');
        });
    });

    // ======================================
    // === LÓGICA DE LOGIN (NOVA) ===
    // ======================================
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

});

