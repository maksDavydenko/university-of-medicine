const LanguageBtn = document.getElementById('change-language');
const langMenu = document.getElementById('language-menu');
const langText = document.querySelectorAll('.lang-text');

const LanguageBtnMobile = document.getElementById('change-language-mobile');
const langMenuMobile = document.getElementById('language-menu-mobile');

const closeMenu = () => {
    langMenu.style.display = 'none';
    langMenuMobile.style.display = 'none';
}

const handleCloseMenu = e => {
    if (e.target.closest('#change-language') ||
        e.target.closest('#change-language-mobile')) {
        return;
    }

    else {
        closeMenu();
    }
}

document.addEventListener('click', handleCloseMenu, true);

LanguageBtn.addEventListener('click', () => {
    if (langMenu.style.display === 'block') {
        langMenu.style.display = 'none';
        document.addEventListener('click', handleCloseMenu, true);
    }
    else {
        langMenu.style.display = 'block';
        document.removeEventListener('click');
    };
});

LanguageBtnMobile.addEventListener('click', () => {
    if (langMenuMobile.style.display === 'block') {
        langMenuMobile.style.display = 'none';
        document.addEventListener('click', handleCloseMenu, true);
    }
    else {
        langMenuMobile.style.display = 'block';
        document.removeEventListener('click')
    };
});

langMenuMobile.addEventListener('click', e => {
    const list = Array.from(langMenuMobile.children);
    list.forEach(item => {
        item.classList.contains('language-active') && item.classList.remove('language-active');
    })

    const langitem = e.target.closest('Li');
    langitem.classList.add('language-active');
    langMenuMobile.style.display = 'none';

    const langTextItems = Array.from(langText);

    langTextItems.forEach(item => {
        item.innerText = langitem.textContent.trim()
    });

    closeMenu();
});

langMenu.addEventListener('click', e => {
    const list = Array.from(langMenu.children);
    list.forEach(item => {
        item.classList.contains('language-active') && item.classList.remove('language-active');
    })

    const langitem = e.target.closest('Li');
    langitem.classList.add('language-active');
    langMenu.style.display = 'none';

    const langTextItems = Array.from(langText);

    langTextItems.forEach(item => {
        item.innerText = langitem.textContent.trim()
    });

    closeMenu();
});