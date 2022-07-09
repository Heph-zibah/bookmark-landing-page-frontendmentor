const mobileModal = document.querySelector('.mobile__modal'),
    menuBar = document.querySelector('#menu__bar'),
    closeBar = document.querySelector('.close__menu');

menuBar.addEventListener('click', () => {
    menuBar.style.display = 'none';
    mobileModal.style.display = 'block';
});

closeBar.addEventListener('click', () => {
    mobileModal.style.display = 'none';
    menuBar.style.display = 'block';
});