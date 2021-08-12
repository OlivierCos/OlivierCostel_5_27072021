import {ObjectService} from "./services/objectService.js";

(async function() {
    const objectService = new ObjectService();
    const objects = await objectService.getObjects();

    displayObjects(objects);
})();



function displayObjects(objects){
    objects.forEach(function(object){
        let objectsContainer = document.getElementById("products");
        objectsContainer.innerHTML +=
            `<article id="productContainer" class="product__container">
                <img id="productImage" class="product__image" src="${object.imageUrl}" alt="${object.name}">
                <h3 id="productTitle" class="product__title">${object.name}</h3>
                <div class="product__infos">
                    <p id="productPrice" class="product__price"> ${object.price/100} €</p>
                    <a class="discoverProduct" href="product.html?id=${object._id}">
                        <button id="lookProductButton" class="product__index__button">Aperçu</button>
                    </a>
                </div>
            </article>`;
    });
}