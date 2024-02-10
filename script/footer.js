'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/




/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/


function displayFooter() {

    const footer = document.getElementById('footer');
    footer.innerHTML =
        `
        
    <a href="index.html"><img src="./assets/images/picto_perso/Logo.png" /></a>
    <a href="https://www.linkedin.com/in/Sylvainz" target="_blank"><img src="./assets/images/picto_perso/logo_linkedin.png" /></a>
    <a href="https://www.behance.net/Sylvainz" target="_blank"><img src="./assets/images/picto_perso/logo_behance.png" /></a>
    <a href="cgu.html"><p>Mentions légales</p></a>
            
            `
};

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

document.addEventListener('DOMContentLoaded', () => {

    displayFooter();
});