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

/* Les popups */

const popups = document.getElementsByClassName('popup_ctn');
const openBtn = document.getElementsByClassName('openPopup_btn');
const closeBtn = document.getElementsByClassName('closePopup_btn');

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

/* TOGGLE POPUPS PROJECTS */

function openPopUp() {
    for (let i = 0; i < openBtn.length; i++) {
      openBtn[i].addEventListener('click', () => {
          popups[i].style.display = 'flex';
          popups[i].classList.add("active");
          document.body.classList.add("noscroll");

          const defaultTab = popups[i].querySelector('.tab-button');
          if (defaultTab) {
            defaultTab.click();
          }
        });
    }
}
function closePopUp() {
    for (let i = 0; i < closeBtn.length; i++) {
            closeBtn[i].addEventListener('click', () => {
              popups[i].style.display = 'none';
              popups[i].classList.remove("active");
              document.body.classList.remove("noscroll");
        });
    }
}

function openTab(evt, tabId) {
  const popupBox = evt.currentTarget.closest('.popup_box');

  const tabs = popupBox.querySelectorAll('.tab-content');
  const buttons = popupBox.querySelectorAll('.tab-button');

  // Cacher tous les contenus
  tabs.forEach(tab => {
    tab.style.display = 'none';
  });

  // Retirer l'état actif de tous les boutons
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });

  // Afficher l'onglet sélectionné
  const selectedTabs = popupBox.querySelectorAll(`#${tabId}`);
  selectedTabs.forEach(tab => {
    tab.style.display = 'flex';
  });

  // Marquer le bouton comme actif
  evt.currentTarget.classList.add('active');
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

/* COUNTDOWN */

function Countdown() {
    const targetTimestamp = new Date("2027-09-17T00:00:00").getTime(); // Date cible en timestamp
    const currentTimestamp = Date.now(); // Date actuelle en timestamp
    const difference = targetTimestamp - currentTimestamp;
  
    if (difference <= 0) {
      document.getElementById("countdown-display").innerHTML = "The countdown is complete!";
      clearInterval(interval);
      return;
    }
  
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30.44); // Approximation : 30.44 jours/mois
    const remainingDays = days % 30.44;
  
    // Fonction pour ajouter un zéro si la valeur est inférieure à 10
    const formatNumber = (number) => (number < 10 ? `0${number}` : number);
  
    document.getElementById("countdown-months").innerHTML = `
      ${formatNumber(months)}
    `;
    document.getElementById("countdown-days").innerHTML = `
      ${formatNumber(Math.floor(remainingDays))}
    `;
    document.getElementById("countdown-hours").innerHTML = `
      ${formatNumber(hours)}
    `;
    document.getElementById("countdown-minutes").innerHTML = `
      ${formatNumber(minutes)}
    `;
    document.getElementById("countdown-seconds").innerHTML = `
      ${formatNumber(seconds)}
    `;
  }
  
  // Met à jour le compte à rebours chaque seconde
  const interval = setInterval(Countdown, 1000);

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

document.addEventListener('DOMContentLoaded', () => {

    showContent();
    hideContent();
    openPopUp();
    closePopUp();

    showList();
    hideList();
});