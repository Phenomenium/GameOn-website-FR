/*----------------------------------*\
    $ DOM ELEMENTS MODAL
\*----------------------------------*/
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
//---> Ajout du btn close dans le DOM
const closeBtn = document.getElementsByClassName('close');

/*----------------------------------*\
    $ NAV RESPONSIVE
\*----------------------------------*/

// EDIT NAV sur clic hamburger
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*----------------------------------*\
    $ MODAL
\*----------------------------------*/

// launch modal event ---> Action sur  clic btn "je m'inscris"
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form ---> Ouverture du formulaire et changement du display en "block"
function launchModal() {
  modalbg.style.display = "block";
}

 // Ajout fermeture du formulaire via la croix
function closeModal() {
  modalbg.style.display = 'none';
}
closeBtn[0].addEventListener('click', closeModal);

/*----- OU 2ème solution avec un ID rajouter dans la balise HTML span -------*/

//function closeModal() {
//  modalbg.style.display = "none";
//}
//document.getElementById("closeform").addEventListener("click", closeModal);

/*---------------------------------------------------------------------------*/

	
