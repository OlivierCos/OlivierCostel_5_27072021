import { CartService } from "./services/cartService.js";
import { FormService } from "./services/formService.js";

init();

///Fonction init pour lancer : nouvelle promise de la classe CartService, constante pour appeler la fonction fetch et appel de celle
//qui fait le rendu html dynamique
async function init() {
  const cartService = new CartService();
  const objectsCart = await cartService.getCart();
  displayCart(objectsCart);
  //Appel de la fonction pour supprimer les objets du panier
  deleteObject();
}

//Appel de la classe FormService à l'aide d'une variable afin d'appeler la fonction pour vérifier le formulaire et envoyer les données au
//serveur via la méthose POST(fetch)
const formService = new FormService();
formService.displayForm();

//Création de la fonction pour afficher dynamiquement le panier en HTML
function displayCart(cart) {
  const totalSum = calculateTotal();

  if (!cart || cart.objects == null) {
    const emptyBasket = `<span id="BasketIsEmpty"> Votre panier est vide</span>`;
    const emptyBasketLine = document.getElementById("table");
    emptyBasketLine.innerHTML = emptyBasket;
  } else {
    cart.objects.forEach((object) => {
      let objectsCartContainer = document.getElementById("tableb");
      objectsCartContainer.innerHTML += `
            <tr id="${object.id}"><td><img class="table__img" src="${object.image}"></td>
                <td><p class="table__name">${object.name}</p></td>
                <td></td>
                <td><p class="table__price" src>${object.price}€</p></td>
                <td><button type="button" id="deleteLineButton_${object.id}" class="deleteLineButton">Supprimer</button></td></tr>
            `;
    });
    displayTotal(totalSum);
  }
}
//Création de la fonction pour récupérer les prix des objets et les aditionner afin d'obtenir le prix final
function calculateTotal() {
  const LOCAL_STORAGE_KEY = "object";
  let localStorageObject = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  let totalPrice = [];

  if (localStorageObject) {
    for (let m = 0; m < localStorageObject.length; m++) {
      let objectPrice = localStorageObject[m].price;
      totalPrice.push(objectPrice);
    }
  }
  let sum = 0;

  for (let i = 0; i < totalPrice.length; i++) {
    sum += totalPrice[i];
  }
  //Sauvegarde du prix total dans le LocalStorage
  localStorage.setItem("finalPrice", sum);
  return sum;
}

//Création de la fonction pour afficher dynamiquement le prix total en HTML
function displayTotal(sum) {
  let displayTotalLine = document.getElementById("table__tfoot");
  displayTotalLine.innerHTML += `
    <tr id="tfoot__tr">
    <th></th>
    <th></th>
    <th class="final__total">Total</th>
    <th class="final__price">${sum}€</th>
    </tr>
    `;
}

//Création de la fonction pour supprimer les objets, soit par id, soit vider tout le panier
function deleteObject() {
  const LOCAL_STORAGE_KEY = "object";
  let localStorageObject = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  let deleteLineBtn = document.querySelectorAll("[id^='deleteLineButton_']");

  deleteLineBtn.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const objectId = deleteBtn.id.split("_")[1];
      const deleteLineObject = document.getElementById(objectId);
      localStorageObject = localStorageObject.filter(
        (object) => object.id !== objectId
      );
      deleteLineObject.remove();
      localStorage.setItem("object", JSON.stringify(localStorageObject));
      window.location.href = "basket.html";
    });
  });

  const deleteTotalBtn = document.getElementById("empty__basket");
  deleteTotalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = "basket.html";
  });
}
