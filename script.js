document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-theme');
            if (themeToggle) themeToggle.checked = true;
        } else {
            body.classList.remove('light-theme');
            if (themeToggle) themeToggle.checked = false;
        }
    };

    const savedTheme = 'dark';
    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                applyTheme('light');
            } else {
                applyTheme('dark');
            }
        });
    }

    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        particlesContainer.appendChild(particle);
    }

    const shapesContainer = document.getElementById('bg-shapes');
    const shapes = [
        { class: 'shape-circle', top: '10%', left: '15%' },
        { class: 'shape-square', top: '60%', left: '80%' },
        { class: 'shape-triangle', top: '70%', left: '10%' },
        { class: 'shape-hexagon', top: '20%', left: '75%' },
        { class: 'shape-circle', top: '85%', left: '45%' },
        { class: 'shape-square', top: '40%', left: '5%' }
    ];

    shapes.forEach(shapeData => {
        const shape = document.createElement('div');
        shape.className = `shape ${shapeData.class}`;
        shape.style.top = shapeData.top;
        shape.style.left = shapeData.left;
        shapesContainer.appendChild(shape);
    });

    const codeRainContainer = document.getElementById('code-rain');
    const codeSnippets = [
        'function()', 'const x =', 'import {', '=> {}', 'async/await',
        'SELECT * FROM', 'def main():', 'class Bot:', 'for i in',
        '<div>', 'return data', '#!/usr/bin', 'git commit',
        'npm install', 'API.get()', 'asyncio.run()'
    ];

    for (let i = 0; i < 15; i++) {
        const codeLine = document.createElement('div');
        codeLine.className = 'code-line';
        codeLine.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        codeLine.style.left = Math.random() * 100 + '%';
        codeLine.style.animationDuration = (Math.random() * 10 + 15) + 's';
        codeLine.style.animationDelay = Math.random() * 10 + 's';
        codeRainContainer.appendChild(codeLine);
    }

    const scrollProgress = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = scrollPercentage + '%';
    });

    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';

        // добавляю центральную точечку
        const cursorCenter = document.createElement('div');
        cursorCenter.className = 'cursor-center';
        cursor.appendChild(cursorCenter);

        document.body.appendChild(cursor);

        let mouseX = 0;
        let mouseY = 0;
        let lastTrailTime = 0;
        const trailDelay = 30;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;

            const now = Date.now();
            if (now - lastTrailTime > trailDelay) {
                const trail = document.createElement('div');
                trail.className = 'cursor-trail';
                trail.style.left = mouseX - 7.5 + 'px';
                trail.style.top = mouseY - 7.5 + 'px';
                document.body.appendChild(trail);

                lastTrailTime = now;

                setTimeout(() => {
                    trail.remove();
                }, 600);
            }
        });

        const interactiveElements = document.querySelectorAll('a, button, .skills-list li, .nav-links a, .timeline-item, section, input, textarea, select');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });

            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });

            el.addEventListener('mousedown', () => {
                cursor.classList.add('click');
            });

            el.addEventListener('mouseup', () => {
                cursor.classList.remove('click');
            });
        });

        // глобальный эффект когда кликаешь
        document.addEventListener('mousedown', () => {
            cursor.classList.add('click');
        });

        document.addEventListener('mouseup', () => {
            cursor.classList.remove('click');
        });
    }
});

// всякие крутые эффекты которые я накодил

// матричный дождь как в фильме
function createMatrixRain() {
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-rain';
    document.body.appendChild(matrixContainer);

    const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

    setInterval(() => {
        if (matrixContainer.children.length < 50) {
            const char = document.createElement('div');
            char.className = 'matrix-char';
            char.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            char.style.left = Math.random() * 100 + '%';
            char.style.animationDuration = (Math.random() * 3 + 2) + 's';
            char.style.fontSize = (Math.random() * 10 + 14) + 'px';
            matrixContainer.appendChild(char);

            setTimeout(() => {
                char.remove();
            }, 5000);
        }
    }, 200);
}

// звездочки мерцают на фоне
function createStarField() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.appendChild(starsContainer);

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

// частицы разлетаются когда кликаешь
function createClickParticles(x, y) {
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'click-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';

        const angle = (i / 8) * Math.PI * 2;
        const distance = Math.random() * 100 + 50;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        particle.style.setProperty('--dx', dx + 'px');
        particle.style.setProperty('--dy', dy + 'px');

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 800);
    }
}

// энергетическое поле в шапке
function addEnergyField() {
    const header = document.getElementById('header');
    if (header) {
        header.addEventListener('mousemove', (e) => {
            const rect = header.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            header.style.setProperty('--mouse-x', x + '%');
            header.style.setProperty('--mouse-y', y + '%');
        });
    }
}

// текст печатается как в терминале
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    setTimeout(type, 2000); // запускаю после того как заголовок отанимируется
}

// волновое искажение блоков при наведении
function addWaveDistortion() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'perspective(1000px) rotateX(5deg)';
        });

        section.addEventListener('mouseleave', () => {
            section.style.transform = 'perspective(1000px) rotateX(0deg)';
        });
    });
}

// голографическое мерцание элементов
function addHolographicFlicker() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        setInterval(() => {
            if (Math.random() < 0.1) { // 10 процентов шанс что мигнет
                item.style.opacity = '0.7';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 100);
            }
        }, 2000);
    });
}

// цвета навыков меняются при наведении
function addColorShiftToSkills() {
    const skillLinks = document.querySelectorAll('.contact-links a');
    skillLinks.forEach((link, index) => {
        link.addEventListener('mouseenter', () => {
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
            link.style.setProperty('--accent-color', colors[index % colors.length]);
        });

        link.addEventListener('mouseleave', () => {
            link.style.removeProperty('--accent-color');
        });
    });
}

// параллакс эффект при скролле
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        const particles = document.querySelectorAll('.particle');

        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            shape.style.transform += ` translateY(${scrolled * speed}px)`;
        });

        particles.forEach((particle, index) => {
            const speed = 0.3 + (index * 0.05);
            particle.style.transform += ` translateY(${scrolled * speed}px)`;
        });
    });
}

// кнопка наверх дышит как живая
function addBreathingEffect() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        setInterval(() => {
            scrollBtn.style.transform = 'scale(1.05)';
            setTimeout(() => {
                scrollBtn.style.transform = 'scale(1)';
            }, 1000);
        }, 2000);
    }
}

// запускаю все эффекты когда страница загрузилась
document.addEventListener('DOMContentLoaded', () => {
    // на мобилках не запускаю тяжелые эффекты чтоб не лагало
    if (window.innerWidth > 768) {
        createMatrixRain();
        createStarField();
        addEnergyField();
        addWaveDistortion();
        addHolographicFlicker();
        addColorShiftToSkills();
        addParallaxEffect();
        addBreathingEffect();

        // частицы разлетаются когда кликаешь
        document.addEventListener('click', (e) => {
            createClickParticles(e.clientX, e.clientY);
        });

        // подзаголовок печатается как в хакерских фильмах
        const subtitle = document.querySelector('.header-content h2');
        if (subtitle) {
            const originalText = subtitle.textContent;
            typeWriter(subtitle, originalText, 80);
        }
    }

    // радужное свечение заголовков работает везде
    const sectionHeaders = document.querySelectorAll('section h2');
    sectionHeaders.forEach(header => {
        header.addEventListener('mouseenter', () => {
            header.style.animationDuration = '0.5s';
        });

        header.addEventListener('mouseleave', () => {
            header.style.animationDuration = '3s';
        });
    });
});

// глитч эффект если что то сломается
function triggerGlitchEffect(element) {
    element.style.animation = 'glitch 0.3s ease-in-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 300);
}

// сообщение в консоль для других разрабов
console.log(`
добро пожаловать в мое резюме
накодил кучу крутых эффектов
если что то не работает то это фича а не баг

что тут есть:
• матричный дождь
• звездочки мерцают  
• голографические штуки
• неоновое свечение
• частицы при кликах
• и еще куча всего

если ты это читаешь то ты настоящий разраб
`);