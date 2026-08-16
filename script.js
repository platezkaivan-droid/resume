// ===== ПЕРЕВОДЫ RU / EN =====
const translations = {
    ru: {
        nav_about: 'О себе',
        nav_education: 'Образование',
        nav_projects: 'Проекты',
        nav_skills: 'Навыки',
        nav_contact: 'Контакты',
        header_name: 'Пискунов Иван Николаевич',
        header_title: 'Python Developer · Java · React Native',
        about_title: 'О себе',
        about_p1: '19 лет. Студент МГКЭИТ (Информационные системы и программирование, очно, 2025–2027). Пишу на Python, Java, TypeScript.',
        about_p2: 'Сделал 7+ проектов: Telegram-бот с деплоем на Render + Docker + CI/CD, мобильное приложение на React Native с реалтайм-чатом, порт Minecraft-мода (246 миксинов), 4 Fabric-мода с нуля.',
        about_p3: 'Ищу стажировку или первую работу в backend или мобильной разработке. Открыт к фрилансу.',
        ach_title: 'Достижения',
        ach_1: '⚙️ <strong>246 миксинов</strong> — портировал Carpet Fixes на Minecraft 1.21.11. Полностью рабочий релиз на GitHub.',
        ach_2: '📱 <strong>Мобильное приложение в продакшене</strong> — Bakery App: React Native + TypeScript + Supabase Realtime + Firebase FCM, работает на Android и iOS.',
        ach_3: '🚀 <strong>Автоматизированный деплой</strong> — Telegram-бот с Docker + GitHub Actions CI/CD + вебхуки на Render. Стабильная работа в продакшене.',
        ach_4: '🎮 <strong>4 Minecraft-мода</strong> с нуля на Fabric API: рендер скинов, серверные команды, новые блоки.',
        ach_5: '📂 <strong>Open Source</strong> — все проекты публичны на GitHub с документацией и релизами.',
        edu_title: 'Образование',
        edu_school: 'Московский государственный колледж электромеханики и информационных технологий (ГБПОУ МГКЭИТ)',
        edu_spec_label: 'Специальность:',
        edu_spec: 'Информационные системы и программирование',
        edu_years: '2025 — 2027 (ожидаемое окончание)',
        proj_title: 'Проекты',
        skills_title: 'Навыки',
        contact_title: 'Контакты и проекты',
        contact_intro: 'Связаться со мной и посмотреть мои работы:',
        contact_live: '🚀 Live проекты',
        contact_tech: '🛠️ Технологии и сервисы',
        footer_text: '⚡ 2026 Пискунов Иван | Python · Java · React Native',
    },
    en: {
        nav_about: 'About',
        nav_education: 'Education',
        nav_projects: 'Projects',
        nav_skills: 'Skills',
        nav_contact: 'Contacts',
        header_name: 'Ivan Piskunov',
        header_title: 'Python Developer · Java · React Native',
        about_title: 'About Me',
        about_p1: '19 years old. Student at MGKEIT College (Information Systems & Programming, full-time, 2025–2027). I code in Python, Java, and TypeScript.',
        about_p2: 'Built 7+ projects: a Telegram bot deployed on Render with Docker + CI/CD, a React Native mobile app with real-time chat, a Minecraft mod port (246 mixins), and 4 Fabric mods from scratch.',
        about_p3: 'Looking for an internship or first job in backend or mobile development. Open to freelance.',
        ach_title: 'Achievements',
        ach_1: '⚙️ <strong>246 mixins</strong> — ported Carpet Fixes to Minecraft 1.21.11. Fully working release on GitHub.',
        ach_2: '📱 <strong>Production mobile app</strong> — Bakery App: React Native + TypeScript + Supabase Realtime + Firebase FCM, runs on Android and iOS.',
        ach_3: '🚀 <strong>Automated deployment</strong> — Telegram bot with Docker + GitHub Actions CI/CD + webhooks on Render. Stable production workload.',
        ach_4: '🎮 <strong>4 Minecraft mods</strong> built from scratch with Fabric API: skin rendering, server commands, new blocks.',
        ach_5: '📂 <strong>Open Source</strong> — all projects are public on GitHub with docs and releases.',
        edu_title: 'Education',
        edu_school: 'Moscow State College of Electromechanics and Information Technologies (MGKEIT)',
        edu_spec_label: 'Major:',
        edu_spec: 'Information Systems and Programming',
        edu_years: '2025 — 2027 (expected graduation)',
        proj_title: 'Projects',
        proj_bakery_title: 'Bakery Mobile App — mobile app for a bakery',
        proj_bakery_company: 'Personal project',
        proj_bakery_date: '2025 — 2026',
        proj_bakery_1: '<strong>📱 React Native + Expo 54</strong> — cross-platform app in TypeScript',
        proj_bakery_2: '<strong>🛒 Catalog & cart</strong> — products by category, favourites, checkout',
        proj_bakery_3: '<strong>💬 Real-time chat</strong> — customer support via Supabase Realtime',
        proj_bakery_4: '<strong>🔔 Push notifications</strong> — Firebase Cloud Messaging',
        proj_bakery_5: '<strong>👤 Auth</strong> — email + Google Sign-In via Supabase Auth',
        proj_bakery_6: '<strong>🖥️ Admin panel</strong> — web order management (GitHub Pages)',
        proj_bakery_stack: '<strong>🛠️ Stack:</strong> React Native, Expo 54, TypeScript, Supabase, Firebase, Gradle (Android)',
        proj_weather_title: 'Telegram Weather Bot v2.0 — Production Ready',
        proj_weather_company: 'Personal project (<a href="https://t.me/MySuperWeatherMoscowPocoMaxBot" target="_blank">@MySuperWeatherMoscowPocoMaxBot</a>)',
        proj_weather_date: 'October 2025 — December 2025',
        proj_weather_1: '<strong>🚀 Deployed on Render</strong> — production with webhooks, stable uptime',
        proj_weather_2: '<strong>🛡️ Reliability</strong> — watchdog auto-restart, graceful shutdown',
        proj_weather_3: '<strong>🗺️ Telegram Web App</strong> — interactive weather map inside the bot',
        proj_weather_4: '<strong>🗄️ Database</strong> — SQLite with migrations, backups and user stats',
        proj_weather_5: '<strong>🔧 DevOps</strong> — Docker, GitHub Actions CI/CD, env vars, auto-tests',
        proj_weather_6: '<strong>📊 Monitoring</strong> — health endpoints, logs, performance metrics',
        proj_weather_stack: '<strong>🛠️ Stack:</strong> Python 3, python-telegram-bot, SQLite, Docker, Render, GitHub Actions',
        proj_carpet_title: 'Carpet Fixes 1.21.11 — Minecraft mod port',
        proj_carpet_company: 'Open Source / Fabric modding (<a href="https://github.com/Skr1zzzz" target="_blank">@Skr1zzzz</a>)',
        proj_carpet_1: '<strong>☕ Java + Fabric API</strong> — ported Carpet Fixes to Minecraft 1.21.11',
        proj_carpet_2: '<strong>🔧 246 mixins</strong> — bytecode patching of vanilla code via Mixin API',
        proj_carpet_3: '<strong>📦 Full cycle</strong> — build via Gradle, published to GitHub Releases',
        proj_carpet_stack: '<strong>🛠️ Stack:</strong> Java, Fabric Loader, Mixin, Gradle',
        proj_mods_title: 'Minecraft Mods — Fabric 1.21.11',
        proj_mods_company: 'Open Source / Fabric modding (<a href="https://github.com/Skr1zzzz" target="_blank">@Skr1zzzz</a>)',
        proj_mods_1: '<strong>🎨 Totem Skins</strong> — client mod: totem shows the named player\'s skin',
        proj_mods_2: '<strong>📋 Bulk Whitelist</strong> — server mod: add a list of players to whitelist in one command',
        proj_mods_3: '<strong>🧱 Deco Blocks</strong> — 6 decorative blocks (portals, bedrock, spawner) with crafting recipes',
        proj_mods_4: '<strong>🗺️ No F3 Coords</strong> — server mod: hides F3 coordinates from non-operators',
        proj_mods_stack: '<strong>🛠️ Stack:</strong> Java, Fabric API, Mixin, Gradle',
        proj_mods_all: '<strong>All repositories → github.com/Skr1zzzz</strong>',
        proj_resume_title: 'Interactive cyberpunk resume website',
        proj_resume_company: 'Personal project (this page)',
        proj_resume_date: 'December 2025',
        proj_resume_1: '<strong>🎨 Cyberpunk UI/UX</strong> — futuristic design with neon effects',
        proj_resume_2: '<strong>✨ Interactivity</strong> — custom cursor, matrix rain, starfield',
        proj_resume_3: '<strong>🌓 Adaptive themes</strong> — dark / light mode toggle',
        proj_resume_4: '<strong>📱 Responsive</strong> — works correctly on all devices',
        proj_resume_stack: '<strong>🛠️ Stack:</strong> HTML5, CSS3, Vanilla JS, CSS Animations',
        proj_promo_title: 'Telegram promo-code bot',
        proj_promo_company: 'Personal project (<a href="https://t.me/VITpromoCodes_bot" target="_blank">@VITpromoCodes_bot</a>)',
        proj_promo_date: 'June 2023',
        proj_promo_1: 'Automated unique promo-code distribution to users.',
        proj_promo_2: 'SQLite for storing and managing the promo-code list.',
        proj_promo_3: 'Admin commands for adding new promo codes.',
        skills_title: 'Skills',
        contact_title: 'Contacts & Projects',
        contact_intro: 'Get in touch and check out my work:',
        contact_tg: '💬 Telegram',
        contact_gh_main: '📂 GitHub (main)',
        contact_gh_mods: '📂 GitHub (mods / Java)',
        contact_live: '🚀 Live Projects',
        contact_tech: '🛠️ Technologies & Services',
        footer_text: '⚡ 2026 Ivan Piskunov | Python · Java · React Native',
    }
};

let currentLang = 'ru';

function applyLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'ru' ? 'EN' : 'RU';
    document.documentElement.lang = lang === 'ru' ? 'ru' : 'en';
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            applyLanguage(currentLang === 'ru' ? 'en' : 'ru');
        });
    }

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

// ===== CANVAS MATRIX RAIN (заменяет CSS-матрицу — плавнее, быстрее) =====
function createMatrixRain() {
    // убираем старый CSS-контейнер если есть
    const old = document.getElementById('code-rain');
    if (old) old.style.display = 'none';

    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-canvas';
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.18;';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホpythonjavascriptgitdocker{}[]<>/\\|';
    const fontSize = 14;
    let cols, drops;

    function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        cols  = Math.floor(canvas.width / fontSize);
        drops = Array.from({ length: cols }, () => Math.random() * -canvas.height / fontSize | 0);
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
        // полупрозрачный слой даёт эффект угасания
        ctx.fillStyle = 'rgba(10,14,39,0.15)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = fontSize + 'px "Courier New", monospace';

        for (let i = 0; i < drops.length; i++) {
            const ch = chars[Math.random() * chars.length | 0];
            // первый символ в столбце — яркий белый, остальные — акцент
            const bright = drops[i] * fontSize < 2;
            ctx.fillStyle = bright ? '#ffffff' : '#667eea';
            ctx.fillText(ch, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 50);
}

// ===== УЛУЧШЕННЫЙ КУРСОР =====
function initCursor() {
    if (window.innerWidth <= 768) return;

    // SVG-курсор: тонкое кольцо + прицел
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '44');
    svg.setAttribute('height', '44');
    svg.setAttribute('viewBox', '0 0 44 44');
    svg.id = 'custom-cursor-svg';
    svg.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:999999;overflow:visible;';

    svg.innerHTML = `
      <circle cx="22" cy="22" r="16" fill="none" stroke="#667eea" stroke-width="1.5" opacity="0.9" id="cur-ring"/>
      <circle cx="22" cy="22" r="3"  fill="#ffffff" opacity="1"    id="cur-dot"/>
      <line x1="22" y1="2"  x2="22" y2="12" stroke="#667eea" stroke-width="1" opacity="0.7" id="cur-t"/>
      <line x1="22" y1="32" x2="22" y2="42" stroke="#667eea" stroke-width="1" opacity="0.7" id="cur-b"/>
      <line x1="2"  y1="22" x2="12" y2="22" stroke="#667eea" stroke-width="1" opacity="0.7" id="cur-l"/>
      <line x1="32" y1="22" x2="42" y2="22" stroke="#667eea" stroke-width="1" opacity="0.7" id="cur-r"/>
      <circle cx="22" cy="22" r="16" fill="none" stroke="#764ba2" stroke-width="1" opacity="0"
              stroke-dasharray="6 4" id="cur-dash"/>
    `;
    document.body.appendChild(svg);

    // скрываем старый CSS-курсор если остался
    const oldCursor = document.querySelector('.custom-cursor');
    if (oldCursor) oldCursor.style.display = 'none';

    let cx = -100, cy = -100;
    let raf;

    const ring  = svg.querySelector('#cur-ring');
    const dot   = svg.querySelector('#cur-dot');
    const dash  = svg.querySelector('#cur-dash');
    let angle   = 0;

    function render() {
        svg.style.transform = `translate(${cx - 22}px, ${cy - 22}px)`;
        angle = (angle + 1.5) % 360;
        dash.setAttribute('transform', `rotate(${angle} 22 22)`);
        raf = requestAnimationFrame(render);
    }
    raf = requestAnimationFrame(render);

    // след — маленькие точки
    let lastTrail = 0;
    document.addEventListener('mousemove', (e) => {
        cx = e.clientX;
        cy = e.clientY;

        const now = Date.now();
        if (now - lastTrail > 25) {
            lastTrail = now;
            const t = document.createElement('div');
            t.style.cssText = `position:fixed;width:5px;height:5px;border-radius:50%;
                background:conic-gradient(#667eea,#764ba2,#4ecdc4,#667eea);
                left:${cx - 2.5}px;top:${cy - 2.5}px;pointer-events:none;z-index:999998;
                animation:trailFade 0.5s ease-out forwards;`;
            document.body.appendChild(t);
            setTimeout(() => t.remove(), 500);
        }
    });

    // hover — кольцо раздувается и вращающийся пунктир появляется
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('a, button, .timeline-item, section')) {
            ring.setAttribute('r', '20');
            ring.style.stroke = '#764ba2';
            dash.style.opacity = '0.6';
            dot.setAttribute('r', '4');
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('a, button, .timeline-item, section')) {
            ring.setAttribute('r', '16');
            ring.style.stroke = '#667eea';
            dash.style.opacity = '0';
            dot.setAttribute('r', '3');
        }
    });

    // клик — кольцо вспыхивает и схлопывается
    document.addEventListener('mousedown', () => {
        ring.style.transition = 'r 0.1s ease, stroke-width 0.1s ease';
        ring.setAttribute('r', '10');
        ring.setAttribute('stroke-width', '3');
        ring.style.stroke = '#ff6b6b';
        // взрыв частиц
        createClickParticles(cx, cy);
    });
    document.addEventListener('mouseup', () => {
        ring.setAttribute('r', '16');
        ring.setAttribute('stroke-width', '1.5');
        ring.style.stroke = '#667eea';
    });
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
// отключено — rotateX(5deg) вызывал съезжание блоков при ховере
function addWaveDistortion() {
    // noop
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
// bugfix: был += translateY (накапливался при каждом скролле и ломал layout)
// shapes уже анимируются через CSS, JS-параллакс им не нужен — отключаем
function addParallaxEffect() {
    // noop
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
        initCursor();

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