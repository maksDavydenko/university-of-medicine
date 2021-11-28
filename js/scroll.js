const header = document.querySelector('.header');

document.addEventListener('scroll', e => {
    if (window.pageYOffset >= 100) {
        header.classList.add('header-shadow')
        return
    }
    else {
        header.classList.remove('header-shadow')
    }
    console.log('this');
});