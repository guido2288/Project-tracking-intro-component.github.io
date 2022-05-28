const iconMenu = document.getElementById('iconMenu');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');




iconMenu.addEventListener('click' , function () {
    closeMenu.classList.add('active');
    iconMenu.classList.remove('active');

    mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click' , function () {
    closeMenu.classList.remove('active');
    iconMenu.classList.add('active');

    mobileMenu.classList.remove('active');
});