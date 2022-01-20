const nav = document.querySelector('nav');
const navMenu = document.querySelector('nav .nav-menu');

if(window.scrollY > 20) {
    nav.classList.add('active');
} else {
    nav.classList.remove('active');
}

window.addEventListener('scroll', function () {
    if(!navMenu.classList.contains('show')) {
        if(this.scrollY > 20) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    }
})

