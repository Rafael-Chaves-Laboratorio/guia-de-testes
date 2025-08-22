document.addEventListener('DOMContentLoaded', function() {
    // Código de Sumário e Login já existente
    const menuToggle = document.querySelector('.menu-toggle');
    const sumarioContainer = document.getElementById('sumario-container');
    const sumarioCloseBtn = document.querySelector('.sumario-close-btn');
    const mainContent = document.getElementById('main-content-protected');
    const loginContainer = document.getElementById('login-container');
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const faqItems = document.querySelectorAll('.faq-item');

    menuToggle.addEventListener('click', function() {
        sumarioContainer.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    sumarioCloseBtn.addEventListener('click', function() {
        sumarioContainer.classList.remove('active');
        menuToggle.classList.remove('active');
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // A senha correta para acesso ao conteúdo.
        const correctPassword = "rededeacesso123";

        if (password === correctPassword) {
            loginContainer.classList.add('hidden');
            mainContent.classList.remove('main-content-protected');
            mainContent.classList.add('main-content-unprotected');
        } else {
            errorMessage.textContent = 'Senha incorreta. Tente novamente.';
        }
    });

    faqItems.forEach(item => {
        const pergunta = item.querySelector('.faq-pergunta');
        const resposta = item.querySelector('.faq-resposta');
        const icon = item.querySelector('.faq-icon');

        pergunta.addEventListener('click', () => {
            const isExpanded = resposta.classList.contains('active');
            
            // Fecha todas as respostas
            document.querySelectorAll('.faq-resposta.active').forEach(resp => {
                resp.classList.remove('active');
                resp.style.maxHeight = null;
            });
            document.querySelectorAll('.faq-icon').forEach(ic => {
                ic.textContent = '+';
            });

            // Se a pergunta não estava aberta, abre-a.
            if (!isExpanded) {
                resposta.classList.add('active');
                resposta.style.maxHeight = resposta.scrollHeight + 'px';
                icon.textContent = '-';
            }
        });
    });

    // --- NOVO CÓDIGO PARA O DOWNLOAD DO PDF ---
    const downloadBtn = document.getElementById('download-pdf-btn');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Seleciona o elemento que contém todo o conteúdo do guia (o <article>)
            const element = document.getElementById('conteudo-guia');
            
            // Opções para a conversão do PDF
            const opt = {
                margin: 10,
                filename: 'Guia-Rede-e-Equipamentos.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            // Inicia a conversão e o download
            html2pdf().set(opt).from(element).save();
        });
    }
    // --- FIM DO NOVO CÓDIGO ---
});
