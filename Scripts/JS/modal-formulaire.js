/*----------------------------------*\
    $ DOM ELEMENTS MODAL
\*----------------------------------*/

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');
const birthdate = document.getElementById('birthdate');
const allLocations = document.getElementById('allLocations');
const locations = document.querySelectorAll('#allLocations .checkbox-input');
const checkbox1 = document.getElementById('checkbox1');
//--- Ajout du constructeur pour la reconnaissance d'un modèle dans un texte
const input = document.getElementsByClassName('text-control');
const form = document.getElementById('form');
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

/*----------------------------------*\
    $ FORMULAIRE DE VALIDATION
\*----------------------------------*/

//--- PRENOM ET NOM

function checkFirstName() {
    if (firstName.value.trim().length < 2 || first.value.trim() === '' || !firstName.value.match(regex)) {
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.style.border = '6px solid #ff0000';
        return false;
    } 
        first.parentElement.setAttribute('data-error-visible', 'false');
        first.style.border = '6px solid #279e7a';
        return true;
}

function checkLastName() {
    if (lastName.value.trim().length < 2 || last.value.trim() === "" || !lastName.value.match(regex)) {
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.style.border = '6px solid #ff0000';
        return false;
    }
        last.parentElement.setAttribute('data-error-visible', 'false');
        last.style.border = '6px solid #279e7a';
        return true;
}

//--- EMAIL

function checkEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value.trim().match(re)) {
        email.parentElement.setAttribute('data-error-visible', 'false');
        email.style.border = '6px solid #279e7a';
        return true;
    }
        email.parentElement.setAttribute('data-error-visible', 'true');
        email.style.border = '6px solid #ff0000';
        return false;
}

//--- DATE NAISSANCE

function checkBirthdate() {
    if (birthdate.value.trim().length !== 10) {
        birthdate.parentElement.setAttribute('data-error-visible', 'true');
        birthdate.style.border = '6px solid #ff0000';
        return false;
    }
        birthdate.parentElement.setAttribute('data-error-visible', 'false');
        birthdate.style.border = '6px solid #279e7a';
        return true;
}

//--- NOMBRE DE TOURNOIS

function checkTournamentsQuantity() {
    if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        quantity.style.border = 'px solid #ff0000';
        return false;
    }
        quantity.parentElement.setAttribute('data-error-visible', 'false');
        quantity.style.border = '6px solid #279e7a';
        return true;
}

//--- VILLES

function checkLocations() {
    allLocations.setAttribute('data-error-visible', 'true');
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            allLocations.setAttribute('data-error-visible', 'false');
            return true;
        }
    }
        return false;
}

//--- TERME D'UTILISATION

function checkCheckBox() {
    if (checkbox1.checked === false) {
        checkbox1.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
        checkbox1.parentElement.setAttribute('data-error-visible', 'false');
        return true;
}

--- EVENEMENTS SUR CHAMPS DU FORMULAIRE

function formFieldsValidation(element, method, event) {
    element.addEventListener(event, method);
}
/*--- ajout d'un évenement focus, lorsqu'un utilisateur saute dans l'un des éléments <input>, l'événement focus se produit et indique le champs ---*/
formFieldsValidation(firstName, checkFirstName, 'focusout');
formFieldsValidation(lastName, checkLastName, 'focusout');
formFieldsValidation(email, checkEmail, 'focusout');
formFieldsValidation(birthdate, checkBirthdate, 'focusout');
formFieldsValidation(quantity, checkTournamentsQuantity, 'focusout');
formFieldsValidation(allLocations, checkLocations, 'change');
formFieldsValidation(checkbox1, checkCheckBox, 'change');

//--- VALIDATION DES CHAMPS DU FORMULAIRE

function forAllFieldsValidation() {
    checkFirstName()
    checkLastName()
    checkEmail()
    checkBirthdate()
    checkTournamentsQuantity()
    checkLocations()
    checkCheckBox()
}

function formValidation() {
    if (checkFirstName() === true &&
        checkLastName() === true &&
        checkEmail() === true &&
        checkBirthdate() === true &&
        checkTournamentsQuantity() === true &&
        checkLocations() === true &&
        checkCheckBox() === true) {
        return true;
    }
    return false;
}

//--- FONCTION SUR BTN ENVOI DU FORMULAIRE

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (formValidation() == true) {
        displayModalSubmit();
        document.querySelector('form').reset();
    } else {
        forAllFieldsValidation();
    }
});