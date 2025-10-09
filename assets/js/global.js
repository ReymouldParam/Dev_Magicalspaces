window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.header-main-container');
    if (window.scrollY > 200) {
        navbar.classList.add('filled-bg');
    } else {
        navbar.classList.remove('filled-bg');
    }
});