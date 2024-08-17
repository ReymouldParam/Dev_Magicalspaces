window.addEventListener('scroll', function () {
    var navbar = document.querySelector('header');
    var navlist = document.querySelector('.nav-list-options');
    var sociallist = document.querySelector('.socialmedia-section');
    if (window.scrollY > 3) {
        navbar.classList.add('header2');
        navlist.classList.add('nav-list-options2');
        sociallist.classList.add('socialmedia-section2');
    } else {
        navbar.classList.remove('header2');
        navlist.classList.remove('nav-list-options2');
        sociallist.classList.remove('socialmedia-section2');

    }
});