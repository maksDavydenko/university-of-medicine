const header = document.querySelector('.header');
const headerSticky = document.querySelector('#header-sticky');

document.addEventListener('scroll', () => {

    if (document.documentElement.offsetWidth > 930) {
        if (window.pageYOffset >= 100) {

            console.log(document.documentElement.offsetWidth,);
            header.classList.add('header-shadow');
            header.style.display = "none";
            headerSticky.style.display = "block";
            return;
        }

        else {
            header.classList.remove('header-shadow');
            header.style.top = "0";
            header.style.display = "block";
            headerSticky.style.display = "none";
        }
    }

    else {
        return
    }

});