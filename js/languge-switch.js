const LanguageBtn = document.getElementById('change-language');
const langMenu = document.getElementById('language-menu');

LanguageBtn.addEventListener('click', () => {
    langMenu.style.display = 'block';
    const list = Array.from(langMenu.children);

    list.forEach(item => {
        item.classList.contains('language-active') && item.classList.remove('language-active');
    })

    const langitem = e.target.closest('Li');
    langitem.classList.add('language-active');


    Array.from(lang.children).forEach(langText => {
        if (langText.classList.contains('lang-text')) {
            langText.textContent = langitem.textContent;
            closeMenu()
            return;
        }
    })

});


document.addEventListener('click', e => {
    const langItem = e.target.closest('#change-language');
    if (!langItem) {
        langMenu.style.display = 'none';
    }
})


const closeMenu = () => {
    langMenu.style.display = 'none';
}