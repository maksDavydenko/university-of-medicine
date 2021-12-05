const LanguageBtn = document.getElementById('change-language');
const langMenu = document.getElementById('language-menu');
const langText = document.querySelectorAll('.lang-text');

const closeMenu = () => {
    langMenu.style.display = 'none';
    console.log('close');
}


LanguageBtn.addEventListener('click', () => {
    langMenu.style.display = 'block';
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
    })
    console.log(langTextItems);
    // langText.innerText = langitem.textContent;
    closeMenu()
    // Array.from(lang.children).forEach(langText => {
    //     if (langText.classList.contains('lang-text')) {
    //         langText.textContent = langitem.textContent;
    //         closeMenu()
    //         return;
    //     }
    // })
});
// document.addEventListener('click', e => {
//     console.log('this clock');
//     const langItem = e.target.closest('#change-language');
//     if (!langItem) {
//         langMenu.style.display = 'none';
//     }
// })

