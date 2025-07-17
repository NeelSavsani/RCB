const menu = document.getElementById("mobileMenu");
const toggleBtn = document.getElementById("menuToggle");
const toggleIcon = toggleBtn.querySelector("i");
const body = document.body;

function toggleMenu() {
    menu.classList.toggle('show');
    body.classList.toggle('blurred', menu.classList.contains('show'));
    if (menu.classList.contains('show')) {
        toggleIcon.classList.remove('fa-bars');
        toggleIcon.classList.add('fa-xmark');
    } else {
        toggleIcon.classList.remove('fa-xmark');
        toggleIcon.classList.add('fa-bars');
    }
}

function toggleTheme(event) {
    event.preventDefault();
    document.body.classList.toggle('dark-mode');
}

document.addEventListener('click', function (event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnToggle = toggleBtn.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle && menu.classList.contains('show')) {
        menu.classList.remove('show');
        body.classList.remove('blurred');

        toggleIcon.classList.remove('fa-xmark');
        toggleIcon.classList.add('fa-bars');
    }
});