//Variable pour récupérer l'URL puis variable pour récupérer seulement le numéro de commande dans l'URL
let orderId = window.location.search;
let orderIdHtml = orderId.substring(9);
//Variable pour récupérer le prix final dans le localStorage
let sum = localStorage.getItem("finalPrice");


//Création de la fonction pour afficher dynamiquement la page HTML avec le récapitulatif de commande
function displayConfirmation() {
let confirmationContainer = document.getElementById("confirmation__order"); 
confirmationContainer.innerHTML +=
    `<h3 class="summary__title">Récapitulatif de votre commande :</h3>
    <p class="summary__description">Commande n°<strong>${orderIdHtml}</strong></p>
    <p class="summary__price">Prix total : <strong>${sum} €</strong></p>`;
}

displayConfirmation();

//Suppression des données du localStorage lorsque la commande est validée
// localStorage.clear();

