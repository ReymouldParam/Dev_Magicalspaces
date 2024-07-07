window.addEventListener('scroll', function () {
    var navbar = document.querySelector('header');
    if (window.scrollY > 3) {
        navbar.classList.add('header2');
    } else {
        navbar.classList.remove('header2');
    }
});