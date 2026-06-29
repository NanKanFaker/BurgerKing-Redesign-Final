/*=============== SHOW MENU ===============*/
function showMenu(menu, toggleBtn) {
    const navMenu = document.getElementById(menu),
        toggleButton = document.getElementById(toggleBtn)
    toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu')
    })
}

showMenu('nav-menu', 'nav-toggle');


/*=============== CHANGE BG HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')

    window.scrollY > 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const navSocial = document.querySelectorAll('.nav__social-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}

navLink.forEach((link) => {
    link.addEventListener('click', linkAction)
});

navSocial.forEach((link) => {
    link.addEventListener('click', linkAction)
});


/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollup = document.getElementById('scroll-up')

    if (scrollup) {
        this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
            : scrollup.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollUp);