const menuBtn = document.getElementById('menu');
const menuList = document.querySelector('.header-nav-mobile');
const iconMenu = document.querySelector('.menu-btn');
const iconClose = document.querySelector('.menu-close');
const headerWrap = document.querySelector('.header');

menuBtn.addEventListener('click', () => {

    if (iconMenu.style.display === 'block') {
        iconClose.style.display = 'block';
        iconMenu.style.display = 'none';
        menuList.style.display = 'block';
        headerWrap.style.position = 'relative';
    }

    else {
        iconClose.style.display = 'none';
        iconMenu.style.display = 'block';
        menuList.style.display = 'none';
        headerWrap.style.position = 'sticky';
    }

})



menuList.addEventListener('click', e => {
    const item = e.target.closest(".header-nav-list-item");

    if (item.classList.contains('no-items')) {
        return;
    }

    item.classList.toggle('item-close');

    const list = Array.from(item.children);

    list.forEach(item => {

        if (item.classList.contains('header-nav-sublist')) {
            item.classList.toggle('open');
            return;
        }

    })

});