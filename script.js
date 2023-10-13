'strict mode';

const btnClose = document.querySelector('.sideBarClose');
const btnOpen = document.querySelector('.sideBarOpen');
const navbar = document.querySelector('.navbar');



btnClose.addEventListener('click', function() {
    navbar.style.display = "none";
});


btnOpen.addEventListener('click', function() {
    navbar.style.display = "flex";
});




