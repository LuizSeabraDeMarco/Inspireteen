document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
    });

    // 2. Dados das ONGs
    const ongs = [
        {
            name: "Instituto Semente Viva",
            desc: "Hackeando a fome urbana através de hortas inteligentes e monitoramento de dados para comunidades carentes.",
            tag: "Meio Ambiente",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Educação Para Todos",
            desc: "Construindo a ponte digital para o conhecimento em comunidades sem acesso à internet e tecnologia.",
            tag: "Educação",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Patinhas de Ouro",
            desc: "Marketplace de adoção com IA para encontrar o match perfeito entre animais resgatados e novos lares.",
            tag: "Causa Animal",
            image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Saúde Solidária",
            desc: "Sistema de telemedicina simplificado para conectar médicos voluntários a quem mais precisa de atendimento.",
            tag: "Saúde",
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
        }
    ];

    const ongsContainer = document.getElementById('ongs-container-v5');

    if (ongsContainer) {
        ongs.forEach((ong, index) => {
            const card = document.createElement('div');
            card.className = 'ong-card-v5';
            card.setAttribute('data-aos', 'fade-up');
            card.setAttribute('data-aos-delay', (index * 100).toString());

            card.innerHTML = `
                <div class="ong-img-v5" style="background-image: url('${ong.image}')">
                    <div class="ong-overlay-v5"></div>
                </div>
                <div class="ong-body-v5">
                    <span class="bento-tag">${ong.tag}</span>
                    <h3>${ong.name}</h3>
                    <p>${ong.desc}</p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd6S_54v66-8CspD5PJRTNnbk97rf_n4nrF7PyDYFhWQhJ4bg/viewform?usp=publish-editor" target="_blank" class="btn-v5-outline">Participar deste Projeto</a>
                </div>
            `;
            ongsContainer.appendChild(card);
        });
    }

    // 3. Scroll Suave Premium
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Fechar menu mobile se estiver aberto
                if (window.innerWidth <= 768) {
                    navActions.style.display = 'none';
                }
            }
        });
    });

    // 4. Efeito de Scroll na Navbar
    const navbar = document.querySelector('.navbar-v5');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '15px 0';
            navbar.style.background = 'rgba(10, 10, 12, 0.95)';
            navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
        } else {
            navbar.style.padding = '25px 0';
            navbar.style.background = 'rgba(10, 10, 12, 0.8)';
            navbar.style.borderBottomColor = 'transparent';
        }
    });

    // 5. Menu Mobile
    const mobileToggle = document.querySelector('.mobile-toggle-v5');
    const navActions = document.querySelector('.nav-actions');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            const isFlex = navActions.style.display === 'flex';
            navActions.style.display = isFlex ? 'none' : 'flex';
            
            if (!isFlex) {
                navActions.style.flexDirection = 'column';
                navActions.style.position = 'absolute';
                navActions.style.top = '100%';
                navActions.style.left = '0';
                navActions.style.width = '100%';
                navActions.style.background = 'rgba(10, 10, 12, 0.98)';
                navActions.style.padding = '40px';
                navActions.style.textAlign = 'center';
                navActions.style.gap = '25px';
                navActions.style.borderBottom = '1px solid var(--border-v5)';
            }
        });
    }
});
