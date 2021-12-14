const LanguageBtn = document.getElementById('change-language');
const LanguageBtnSticky = document.getElementById('change-language-sticky');

const langMenu = document.getElementById('language-menu');
const langMenuSticky = document.getElementById('language-menu-sticky');

const langText = document.querySelectorAll('.lang-text');

const LanguageBtnMobile = document.getElementById('change-language-mobile');
const langMenuMobile = document.getElementById('language-menu-mobile');

const closeMenu = () => {
    langMenu.style.display = 'none';
    langMenuMobile.style.display = 'none';
    langMenuSticky.style.display = 'none';
}

const handleCloseMenu = e => {
    if (e.target.closest('.change-language') ||
        e.target.closest('.change-language-mobile')) {
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


LanguageBtnSticky.addEventListener('click', () => {
    if (langMenuSticky.style.display === 'block') {
        langMenuSticky.style.display = 'none';
        document.addEventListener('click', handleCloseMenu, true);
    }
    else {
        langMenuSticky.style.display = 'block';
        document.removeEventListener('click');
    };
})

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


langMenuSticky.addEventListener('click', e => {
    const list = Array.from(langMenuSticky.children);
    list.forEach(item => {
        item.classList.contains('language-active') && item.classList.remove('language-active');
    })

    const langitem = e.target.closest('Li');
    langitem.classList.add('language-active');
    langMenuSticky.style.display = 'none';

    const langTextItems = Array.from(langText);

    langTextItems.forEach(item => {
        item.innerText = langitem.textContent.trim()
    });

    closeMenu();
});
