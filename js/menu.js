const menuBtn = document.getElementById('menu');
const menuList = document.querySelector('.header-nav-mobile');
const iconMenu = document.querySelector('.menu-btn');
const iconClose = document.querySelector('.menu-close')

menuBtn.addEventListener('click', () => {

    if (iconMenu.style.display === 'block') {
        iconClose.style.display = 'block';
        iconMenu.style.display = 'none';
        menuList.style.display = 'none'
    }

    else {
        iconClose.style.display = 'none';
        iconMenu.style.display = 'block';
        menuList.style.display = 'block'
    }

})


