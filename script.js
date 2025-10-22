document.addEventListener('DOMContentLoaded', function() {
    // VARIÁVEIS DE CONFIGURAÇÃO
    const SENHA_CORRETA = "rededeacesso123";
    const CHAVE_ARMAZENAMENTO_LOGIN = "acessoPermitido";
    
    // Seletor de elementos
    const menuToggle = document.querySelector('.menu-toggle');
    const sumarioContainer = document.getElementById('sumario-container');
    const sumarioCloseBtn = document.querySelector('.sumario-close-btn');
    const mainContent = document.getElementById('main-content-protected'); 
    const loginContainer = document.getElementById('login-container');
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const conteudoGuia = document.getElementById('conteudo-guia'); 
    const faqItems = document.querySelectorAll('.faq-item');
    const sumarioLinks = document.querySelectorAll('.sumario-lista a');


    // --- FUNÇÕES DE CONTROLE DE ESTADO ---
    
    /** Verifica se o acesso está salvo na sessão. */
    function verificarLogin() {
        return sessionStorage.getItem(CHAVE_ARMAZENAMENTO_LOGIN) === 'true';
    }

    /** Exibe a tela de login e esconde o conteúdo. */
    function mostrarTelaLogin() {
        loginContainer.classList.remove('hidden');
        if (conteudoGuia) conteudoGuia.classList.add('hidden');
        if (menuToggle) menuToggle.classList.add('hidden');
        if (sumarioContainer) sumarioContainer.classList.add('hidden');
        if (mainContent) mainContent.classList.add('main-content-protected');
    }

    /** Exibe o conteúdo e esconde a tela de login. */
    function mostrarConteudo() {
        loginContainer.classList.add('hidden');
        if (conteudoGuia) conteudoGuia.classList.remove('hidden');
        if (menuToggle) menuToggle.classList.remove('hidden');
        if (sumarioContainer) sumarioContainer.classList.remove('hidden'); 
        if (mainContent) mainContent.classList.remove('main-content-protected');
    }

    // --- LÓGICA DE INICIALIZAÇÃO ---
    if (!verificarLogin()) {
        mostrarTelaLogin();
    } else {
        mostrarConteudo();
    }
    
    // --- LÓGICA DE LOGIN ---
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const password = loginForm.password.value;

            if (password === SENHA_CORRETA) {
                sessionStorage.setItem(CHAVE_ARMAZENAMENTO_LOGIN, 'true'); 
                errorMessage.textContent = '';
                mostrarConteudo();
                window.location.reload(); 
            } else {
                errorMessage.textContent = 'Senha incorreta. Tente novamente.';
            }
        });
    }

    // --- LÓGICA DO MENU SUMÁRIO ---
    function toggleSumario() {
        // Se estiver no mobile, usa a classe 'open' do seu CSS
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
                 toggleSumario();
             }
        });
    });

    // --- LÓGICA DO FAQ ---
    if (faqItems) {
        faqItems.forEach(item => {
            const pergunta = item.querySelector('.faq-pergunta');
            
            pergunta.addEventListener('click', () => {
                const isExpanded = item.classList.contains('active');
                
                // Fecha todos os outros itens
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
                    resposta.style.maxHeight = resposta.scrollHeight + 'px';
                    icon.textContent = '-'; 
                } else {
                    resposta.style.maxHeight = null;
                    icon.textContent = '+';
                }
            });
        });
    }
});
