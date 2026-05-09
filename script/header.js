'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/




/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/


function displayHeader() {

    const header = document.getElementById('header');
    header.innerHTML =
        `
            <div class="divlogo_header">
                <img class="logo_header" src="./assets/images/picto_perso/Logo.png" alt="logo" />
                <h1 class="name_header">Sylvain Zoogones</h1>
            </div>
            <button class="burger_menu" aria-label="Menu">
                <i class="fas fa-bars"></i>
            </button>
            <div class="nav_scroll_wrap">
                <button class="nav_scroll_btn left is-hidden" aria-label="Faire défiler la navigation vers la gauche" type="button">
                    <i class="fas fa-chevron-left fa-xs"></i>
                </button>
                <nav class="nav_menu">
                    <a href="portfolio.html#formations">
                        <p>Formations</p>
                    </a>
                    <a href="portfolio.html#projects">
                        <p>Projets</p>
                    </a>
                    <a href="portfolio.html#skills">
                        <p>Compétences</p>
                    </a>
                    <a href="portfolio.html#journey">
                        <p>Histoire</p>
                    </a>
                    <a href="portfolio.html#contact">
                        <p>Contact · CV</p>
                    </a>
                </nav>
                <button class="nav_scroll_btn right" aria-label="Faire défiler la navigation vers la droite" type="button">
                    <i class="fas fa-chevron-right fa-xs"></i>
                </button>
            </div>
        `;

    // Ajouter la logique du burger menu
    const burgerButton = header.querySelector('.burger_menu');
    const navMenu = header.querySelector('.nav_menu');
    const burgerIcon = burgerButton.querySelector('i');
    const leftNavButton = header.querySelector('.nav_scroll_btn.left');
    const rightNavButton = header.querySelector('.nav_scroll_btn.right');

    burgerButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        burgerButton.classList.toggle('active');
        burgerIcon.classList.toggle('fa-bars');
        burgerIcon.classList.toggle('fa-xmark');
    });

    // Fermer le menu quand on clique sur un lien
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            burgerButton.classList.remove('active');
            burgerIcon.classList.add('fa-bars');
            burgerIcon.classList.remove('fa-xmark');
        });
    });

    initNavHorizontalScroll(navMenu, leftNavButton, rightNavButton);
};

function initNavHorizontalScroll(navMenu, leftButton, rightButton) {
    if (!navMenu || !leftButton || !rightButton) return;

    const laptopAndUp = window.matchMedia('(min-width: 781px)');
    const step = 180;
    let initialPositionSet = false;

    const updateButtons = () => {
        const enabled = laptopAndUp.matches;
        const hasOverflow = navMenu.scrollWidth > navMenu.clientWidth + 2;

        if (!enabled || !hasOverflow) {
            leftButton.classList.add('is-hidden');
            rightButton.classList.add('is-hidden');
            if (!enabled) initialPositionSet = false;
            return;
        }

        if (!initialPositionSet) {
            navMenu.scrollLeft = 0;
            initialPositionSet = true;
        }

        const atStart = navMenu.scrollLeft <= 2;
        const atEnd = navMenu.scrollLeft + navMenu.clientWidth >= navMenu.scrollWidth - 2;

        if (atStart) {
            leftButton.classList.add('is-hidden');
            rightButton.classList.remove('is-hidden');
            return;
        }

        if (atEnd) {
            leftButton.classList.remove('is-hidden');
            rightButton.classList.add('is-hidden');
            return;
        }

        leftButton.classList.remove('is-hidden');
        rightButton.classList.remove('is-hidden');
    };

    leftButton.addEventListener('click', () => {
        navMenu.scrollBy({ left: -step, behavior: 'smooth' });
    });

    rightButton.addEventListener('click', () => {
        navMenu.scrollBy({ left: step, behavior: 'smooth' });
    });

    navMenu.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);
    window.addEventListener('load', updateButtons);
    laptopAndUp.addEventListener('change', updateButtons);

    if ('ResizeObserver' in window) {
        const observer = new ResizeObserver(updateButtons);
        observer.observe(navMenu);
    }

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(updateButtons);
    }

    requestAnimationFrame(updateButtons);
    setTimeout(updateButtons, 120);
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

document.addEventListener('DOMContentLoaded', () => {

    displayHeader();

    // Logique du scroll pour fixer le burger
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;

        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});