import {ObjectService} from "./services/objectService.js";

async function init() {
    const objectService = new ObjectService();
    let params = new URLSearchParams(window.location.search);
    let objectId = params.get("_id");
    const object = await objectService.getObject(objectId);
};


function displayObject(object){
        let objectContainer = document.getElementById("object__product");
        objectContainer.innerHTML +=
            `<article class="article__product">
            <img class="article__image" src="${object.imageUrl}" alt="${object.name}">
            <h2 class="article__title">${object.name}</h2>
            <p class="article__description">${object.description}</p>
            <div class="article__varnish"> 
                <label for="varnish">Vernis :</label>
                <select id="varnish" name="varnish" src="${object.varnish}"></select> 
            </div>
            <p class="article__price">${object.price}€ Total</p>
            <div class="button__container">
                <a href="index.html"><button class="index__button">Retour</button></a>
                <a href="basket.html"><button id="btnCart" class="addToCart__button">Ajouter au panier</button></a>
            </div>
            </article>`;
        }

init();
displayObject(object);

