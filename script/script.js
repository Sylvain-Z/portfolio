'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/


/*  Projets  */
const toggleShow = document.getElementsByClassName('toggleshow');
const toggleHide = document.getElementsByClassName('toggleHide');
const content = document.getElementsByClassName('contentToToggle');

/* Liste des compétences */

const skillsIllustration = document.getElementsByClassName('recto');
const skillsList = document.getElementsByClassName('verso');
const skillsShow = document.getElementsByClassName('skillsShow');
const skillsHide = document.getElementsByClassName('skillsHide');



/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/


/* TOGGLE CHEVRONS PROJECTS */

function showContent() {
    for (let i = 0; i < toggleShow.length; i++) {
        toggleShow[i].addEventListener('click', () => {
            content[i].classList.remove('toggle');
            toggleHide[i].classList.add('fa-solid', 'fa-chevron-up', 'fa-xl');
            toggleShow[i].classList.remove('fa-solid', 'fa-chevron-down', 'fa-xl');
        });
    }
}
function hideContent() {
    for (let i = 0; i < toggleHide.length; i++) {
        toggleHide[i].addEventListener('click', () => {
            content[i].classList.add('toggle');
            toggleHide[i].classList.remove('fa-solid', 'fa-chevron-up', 'fa-xl');
            toggleShow[i].classList.add('fa-solid', 'fa-chevron-down', 'fa-xl');
        });
    }
}

/* TOGGLE SKILLS LIST */

function showList() {
    for (let i = 0; i < skillsIllustration.length; i++) {
        skillsIllustration[i].addEventListener('click', () => {
            skillsList[i].classList.remove('hiddenList');
            skillsShow[i].classList.remove('fa-solid', 'fa-chevron-down', 'fa-xl');
            skillsHide[i].classList.add('fa-solid', 'fa-chevron-up', 'fa-xl');
        });
    }
}
function hideList() {
    for (let i = 0; i < skillsIllustration.length; i++) {
        skillsList[i].addEventListener('click', () => {
            skillsList[i].classList.add('hiddenList');
            skillsShow[i].classList.add('fa-solid', 'fa-chevron-down', 'fa-xl');
            skillsHide[i].classList.remove('fa-solid', 'fa-chevron-up', 'fa-xl');
        });
    }
}


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

document.addEventListener('DOMContentLoaded', () => {

    showContent();
    hideContent();

    showList();
    hideList();
});