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

function knowChampions() {
    window.location.href = "team.html";
}

function reliveVictory() {
    window.location.href = "ipl.html";
}

function visitPortfolio(){
    window.open('https://neelsavsani.vercel.app', '_blank');
}

let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.style.top = "-100px"; // hide header
    } else {
        // Scrolling up
        header.style.top = "0"; // show header
    }

    lastScrollTop = currentScroll;
});