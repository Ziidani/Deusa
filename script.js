// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Elementos principais
    const portal = document.getElementById('portal');
    const sanctuary = document.getElementById('sanctuary');
    const mainNav = document.getElementById('main-nav');
    const enterBtn = document.getElementById('enter-sanctuary');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const customCursor = document.querySelector('.custom-cursor');
    
    // Elementos de áudio
    const backgroundMusic = document.getElementById('background-music');
    const heartbeatSound = document.getElementById('heartbeat-sound');
    const whisperSound = document.getElementById('whisper-sound');
    const playPauseBtn = document.getElementById('play-pause');
    const volumeControl = document.getElementById('volume-control');
    
    // Elementos interativos
    const generatePhraseBtn = document.getElementById('generate-phrase');
    const poeticPhrase = document.getElementById('poetic-phrase');
    const showSignatureBtn = document.getElementById('show-signature');
    const signatureContainer = document.getElementById('signature-container');
    const secretTrigger = document.getElementById('secret-trigger');
    const secretMessage = document.getElementById('secret-message');
    const closeSecret = document.getElementById('close-secret');
    
    // Frases poéticas
    const poeticPhrases = [
        "Queria te guardar entre os ossos pra te ter mesmo depois do fim.",
        "Te amo como quem queima a própria carne pra acender o nome do outro.",
        "Nossas almas se reconheceram antes mesmo de nossos corpos se tocarem.",
        "Sou teu cadáver feliz, habitado apenas pelo eco do teu amor.",
        "Prefiro a dor de te amar à paz de nunca ter te conhecido.",
        "Nosso amor é um abismo onde me jogo todos os dias, de olhos fechados e coração aberto.",
        "Quando nossos olhares se encontram, sinto que o universo inteiro para para testemunhar.",
        "Te amo com a intensidade de mil sóis e a escuridão de mil noites.",
        "Se o amor é uma doença, então sou teu paciente terminal, feliz por morrer em teus braços.",
        "Nossas cicatrizes conversam em segredo quando nos tocamos.",
        "Queria poder te devorar para que nenhum pedaço de ti escapasse de mim.",
        "Te amo de um jeito que dói, que sangra, que consome - e não trocaria essa dor por nada.",
        "Nosso primeiro beijo foi um funeral para quem éramos antes de nos encontrarmos.",
        "Às vezes sinto que te amar é como segurar uma lâmina - corta, mas a beleza do gesto vale o sangue.",
        "Prometo te amar mesmo quando meu corpo virar pó e minha voz se calar para sempre.",
        "Nossas almas são duas chamas da mesma vela, consumindo-se juntas na escuridão.",
        "Te amo com a obsessão de quem encontrou a peça que faltava em seu próprio quebra-cabeça de sombras.",
        "Cada batida do meu coração é um eco do teu nome, uma oração profana que recito em segredo.",
        "Nosso amor é um ritual antigo, selado com sangue e celebrado com devoção eterna.",
        "Se o paraíso existe, prefiro o inferno contigo do que a eternidade sem ti.",
        "Te amo como as raízes amam a terra escura - com uma sede que nunca se sacia.",
        "Nossos corpos são apenas vestígios temporários de uma conexão que transcende a carne.",
        "Quando te abraço, sinto que estou voltando para casa depois de uma longa jornada.",
        "Te amo com a fúria silenciosa de um rio subterrâneo que corrói a pedra por séculos.",
        "Nossas almas se entrelaçaram tão profundamente que já não sei onde termino e onde começas.",
        "Prometo ser teu refúgio na tempestade e teu abismo na calmaria.",
        "Te amo como a noite ama a lua - com uma devoção que ilumina até as sombras mais profundas.",
        "Nosso amor é um livro escrito com sangue em páginas de pele, que só nós podemos ler.",
        "Se a eternidade existe, quero passá-la perdido em teus olhos.",
        "Te amo de um jeito que transforma dor em poesia e escuridão em beleza."
    ];
    
    // Cursor personalizado
    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
    });
    
    // Partículas de sangue
    function createBloodParticles() {
        const container = document.getElementById('blood-particles');
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.classList.add('blood-particle');
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.width = (Math.random() * 4 + 2) + 'px';
            particle.style.height = particle.style.width;
            container.appendChild(particle);
        }
    }
    
    // Entrar no santuário
    enterBtn.addEventListener('click', function() {
        // Efeito de transição
        portal.style.opacity = '0';
        portal.style.transition = 'opacity 1.5s ease';
        
        // Iniciar música
        backgroundMusic.volume = 0.5;
        backgroundMusic.play().catch(e => {
            console.log("Reprodução automática bloqueada. O usuário precisa interagir primeiro.");
        });
        
        setTimeout(() => {
            portal.classList.add('hidden');
            mainNav.classList.remove('hidden');
            sanctuary.classList.remove('hidden');
            
            // Mostrar primeira seção
            document.getElementById('cartas').classList.add('active-section');
            
            // Adicionar partículas
            createBloodParticles();
        }, 1500);
    });
    
    // Navegação entre seções
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-section');
            
            // Esconder todas as seções
            sections.forEach(section => {
                section.classList.remove('active-section');
            });
            
            // Mostrar seção alvo
            document.getElementById(targetSection).classList.add('active-section');
            
            // Efeito de batimento cardíaco
            heartbeatSound.currentTime = 0;
            heartbeatSound.play();
        });
    });
    
    // Controles de áudio
    playPauseBtn.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            backgroundMusic.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
    
    volumeControl.addEventListener('input', function() {
        backgroundMusic.volume = this.value;
    });
    
    // Gerar frases poéticas
    generatePhraseBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * poeticPhrases.length);
        poeticPhrase.textContent = poeticPhrases[randomIndex];
        
        // Efeito de transição
        poeticPhrase.style.opacity = '0';
        setTimeout(() => {
            poeticPhrase.style.opacity = '1';
            poeticPhrase.style.transition = 'opacity 0.5s ease';
        }, 10);
        
        // Som de batimento
        heartbeatSound.currentTime = 0;
        heartbeatSound.play();
    });
    
    // Mostrar assinatura
    showSignatureBtn.addEventListener('click', function() {
        signatureContainer.classList.remove('hidden');
        
        // Efeito de sussurro
        whisperSound.currentTime = 0;
        whisperSound.play();
    });
    
    // Botão secreto
    let secretTimer;
    let secretCounter = 0;
    
    secretTrigger.addEventListener('mousedown', function() {
        secretTimer = setTimeout(() => {
            secretMessage.classList.remove('hidden');
        }, 5000);
    });
    
    secretTrigger.addEventListener('mouseup', function() {
        clearTimeout(secretTimer);
    });
    
    secretTrigger.addEventListener('touchstart', function() {
        secretTimer = setTimeout(() => {
            secretMessage.classList.remove('hidden');
        }, 5000);
    });
    
    secretTrigger.addEventListener('touchend', function() {
        clearTimeout(secretTimer);
    });
    
    closeSecret.addEventListener('click', function() {
        secretMessage.classList.add('hidden');
    });
    
    // Efeito parallax
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const bloodParticles = document.getElementById('blood-particles');
        bloodParticles.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
    
    // Inicialização
    createBloodParticles();
});