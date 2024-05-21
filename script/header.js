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
        <div class="header_principal">
            <div class="shadow_header"></div>

            <div class="logoETnav">
                <div class="divlogo_header">
                <img class="logo_header" src="./assets/images/picto_perso/Logo.png" alt="logo" />
                <h1 class="name_header">Sylvain Zoogones</h1>
                </div>

                <nav>
                <a href="portfolio.html#projects_ctn">
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
            </div>
            </div>

            <div class="presentation">
            <h2>Bienvenue sur mon profil</h2>

            <div class="technologies-header">
                <img class="logo" src="./assets/images/logos/icons8-javascript-256.png" alt="logo react" title="javascript" />
                <img class="logo" src="./assets/images/logos/icons8-react-native-256.png" alt="logo react" title="react" />
                <div class="merge_logo">
                <img class="logo merge_logo1" src="./assets/images/logos/icons8-nodejs-240-blanc.png" alt="logo node"
                    title="node.js" />
                <img class="logo merge_logo2" src="./assets/images/logos/icons8-nodejs-256.png" alt="logo node js"
                    title="node.js" />
                </div>
                <img class="logo" src="./assets/images/logos/icons8-angular-96.png" alt="logo angular" title="angular" />
                <img class="logo" src="./assets/images/logos/icons8-logo-de-printemps-144.png" alt="logo logo spring boot" title="Spring Boot" />
                <img class="logo" src="./assets/images/logos/icons8-logo-de-mysql-240.png" alt="logo mysql" title="mysql" />
                <img class="logo" src="./assets/images/logos/icons8-toupet-240.png" alt="logo photoshop" title="scss" />
                <img class="logo" src="./assets/images/logos/icons8-docker-144.png" alt="logo docker" title="docker" />
            </div>
        </div>
            
            `
};

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

document.addEventListener('DOMContentLoaded', () => {

    displayHeader();
});