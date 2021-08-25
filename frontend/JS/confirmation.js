//Variable pour récupérer l'URL puis variable pour récupérer le numéro de commande dans l'URL
const params = new URLSearchParams(window.location.search);
const orderId = params.get("orderId");
//Variable pour récupérer le prix final dans le localStorage
const sum = localStorage.getItem("finalPrice");

//Création de la fonction pour afficher dynamiquement la page HTML avec le récapitulatif de commande
function displayConfirmation() {
  const confirmationContainer = document.getElementById("confirmation__order");
  confirmationContainer.innerHTML += `<h3 class="summary__title">Récapitulatif de votre commande :</h3>
    <p class="summary__description">Commande n°<strong>${orderId}</strong></p>
    <p class="summary__price">Prix total : <strong>${sum} €</strong></p>`;
}

displayConfirmation();

//Suppression des données du localStorage lorsque la commande est validée
localStorage.clear();
