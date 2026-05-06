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
                <a href="portfolio.html#CV">
                    <p>CV</p>
                </a>
                <a href="portfolio.html#contact">
                    <p>Contact</p>
                </a>
            </nav>
        `;

    // Ajouter la logique du burger menu
    const burgerButton = header.querySelector('.burger_menu');
    const navMenu = header.querySelector('.nav_menu');
    const burgerIcon = burgerButton.querySelector('i');

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
};

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

document.addEventListener('DOMContentLoaded', () => {

    displayHeader();

    // Logique du scroll pour fixer le burger
    let lastScrollTop = 0;
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;

        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });
});