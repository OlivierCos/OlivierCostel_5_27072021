///Importe la fonction qui va appeler l'API avec la méthode GET fetch///
import {ObjectService} from "./services/objectService.js";

///Fonction pour lancer : nouvelle promise de la classe ObjectService, constante pour appeler la fonction fetch et appel de celle qui fait le rendu html dynamique
(async function() {
    const objectService = new ObjectService();
    const objectsHTML = await objectService.getObjects();
    displayObjects(objectsHTML);
})();


///Fonction qui affiche les objets dans un conteneur html///
function displayObjects(objects) {
    objects.forEach( object => {
        let objectsContainer = document.getElementById("products");
        objectsContainer.innerHTML +=
            `<article id="productContainer" class="product__container">
                <img id="productImage" class="product__image" src="${object.imageUrl}" alt="${object.name}">
                <h3 id="productTitle" class="product__title">${object.name}</h3>
                <div class="product__infos">
                    <p id="productPrice" class="product__price"> ${object.price} €</p>
                    <a class="discoverProduct" href="product.html?id=${object._id}">
                        <button id="lookProductButton" class="product__index__button">Aperçu</button>
                    </a>
                </div>
            </article>`;
    });
}