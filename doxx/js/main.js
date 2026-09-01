/* ============================================ */
/* BLOCO 1: NAVBAR - SCROLL EFFECT              */
/* ============================================ */
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function () {
        // Navbar com fundo ao rolar
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Botão voltar ao topo
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Voltar ao topo
    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

/* ============================================ */
/* BLOCO 2: MENU MOBILE                         */
/* ============================================ */
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

/* ============================================ */
/* BLOCO 3: ANIMAÇÃO DOS NÚMEROS (STATS)        */
/* ============================================ */
document.addEventListener('DOMContentLoaded', function () {
    const stats = document.querySelectorAll('.stat-number');

    function animateNumber(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            const current = Math.round(start + (target - start) * eased);
            element.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    // Intersection Observer para animar quando visível
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(function (stat) {
        observer.observe(stat);
    });
});

/* ============================================ */
/* BLOCO 4: FAQ ACCORDION                       */
/* ============================================ */
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function () {
            const isActive = item.classList.contains('active');

            // Fechar todos
            faqItems.forEach(function (other) {
                other.classList.remove('active');
            });

            // Abrir o clicado se não estava ativo
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

/* ============================================ */
/* BLOCO 5: FORMULÁRIO DE LEADS                 */
/* ============================================ */
document.addEventListener('DOMContentLoaded', function () {
    const leadForm = document.getElementById('leadForm');
    const formSuccess = document.getElementById('formSuccess');

    if (leadForm) {
        leadForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Validação básica
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const oab = document.getElementById('oab').value.trim();

            if (!nome || !email || !oab) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            // Validação de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, informe um e-mail válido.');
                return;
            }

            // Simular envio (aqui você integraria com seu backend/CRM)
            const submitBtn = leadForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;

            setTimeout(function () {
                // Esconder formulário e mostrar sucesso
                leadForm.style.display = 'none';
                formSuccess.style.display = 'block';

                // Resetar botão (para caso o usuário volte)
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;

                // Scroll suave para a mensagem de sucesso
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 1500);
        });
    }
});

/* ============================================ */
/* BLOCO 6: REVELAR ELEMENTOS AO SCROLL         */
/* ============================================ */
document.addEventListener('DOMContentLoaded', function () {
    // Adiciona classe para animações de entrada
    const animatedElements = document.querySelectorAll('.solucao-card, .beneficio-item, .step, .depoimento-card, .faq-item');

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(function (element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});
