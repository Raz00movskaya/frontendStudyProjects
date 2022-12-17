const btn = document.querySelector('.menu-btn');

const menu_link = document.querySelector('.menu-link');

const nav = document.querySelector('.nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
});

menu_link.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
});
