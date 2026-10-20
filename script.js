(function () {
    const root = document.documentElement;
    const pdf = document.getElementById('pdf-link');
    const langButton = document.getElementById('lang-toggle');
    const themeButton = document.getElementById('theme-toggle');

    function read(key) {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            return null;
        }
    }

    function write(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (e) {
            // storage can be unavailable (private mode); the page works without it
        }
    }

    function applyLang(lang) {
        root.lang = lang;
        langButton.textContent = lang === 'ru' ? 'EN' : 'RU';
        pdf.href = lang === 'ru' ? 'resume.pdf' : 'resume-en.pdf';
        document.title = lang === 'ru' ? 'Пискунов Иван — Backend-разработчик' : 'Ivan Piskunov — Backend Developer';
    }

    function applyTheme(theme) {
        if (theme) {
            root.dataset.theme = theme;
        } else {
            delete root.dataset.theme;
        }
    }

    const params = new URLSearchParams(location.search);
    const startLang = params.get('lang') || read('resume_lang') || 'ru';
    applyLang(startLang === 'en' ? 'en' : 'ru');
    applyTheme(params.get('theme') || read('resume_theme'));

    langButton.addEventListener('click', function () {
        const next = root.lang === 'ru' ? 'en' : 'ru';
        applyLang(next);
        write('resume_lang', next);
    });

    themeButton.addEventListener('click', function () {
        const dark = root.dataset.theme
            ? root.dataset.theme === 'dark'
            : window.matchMedia('(prefers-color-scheme: dark)').matches;
        const next = dark ? 'light' : 'dark';
        applyTheme(next);
        write('resume_theme', next);
    });
})();
