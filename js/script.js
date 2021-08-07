// const burgerButton = document.querySelector(".menu-burger__header")
// const burgerMenu = document.querySelector(".header__nav")
// const body = document.body
//
// burgerButton.addEventListener("click", (i) => {
//     burgerButton.classList.toggle("open-menu")
//     burgerMenu.classList.toggle("open-menu")
//     body.classList.toggle("_lock")
//
// })


//FIXED TOP
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.innerWidth > 1200) {
            if (window.scrollY > 50) {
                document.querySelector('.header__menu').classList.add('fixed-top');
                // add padding top to show content behind navbar
                navbar_height = document.querySelector('.menu__body').offsetHeight;
                document.body.style.paddingTop = navbar_height + 'px';
            } else {
                document.querySelector('.header__menu').classList.remove('fixed-top');
                // remove padding top from body
                document.body.style.paddingTop = '0';
            }
        } else {
            if (window.scrollY > 50) {
                document.querySelector('.navbar').classList.add('fixed-top');
                // add padding top to show content behind navbar
                navbar_height = document.querySelector('.navbar').offsetHeight;
                document.body.style.paddingTop = navbar_height + 'px';
            } else {
                document.querySelector('.navbar').classList.remove('fixed-top');
                // remove padding top from body
                document.body.style.paddingTop = '0';
            }
        }

    })
})