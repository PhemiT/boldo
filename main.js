let openNavButton = document.getElementById('openNav');
let closeNavButton = document.getElementById('closeNav');
let sideNav = document.getElementById('sideNav');

openNavButton.addEventListener('click', function() {
    sideNav.style.width = "100%";
});

closeNavButton.addEventListener('click', function() {
    sideNav.style.width = "0";
});
