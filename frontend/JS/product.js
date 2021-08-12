import { object } from "./models/object.js";

import {ObjectService} from "./services/objectService.js";

init();

async function init() {
    const objectService = new ObjectService();
    let params = new URLSearchParams(window.location.search);
    let objectId = params.get("id");
    const object = await objectService.getObject(objectId);
    displayObject(object);
};

function displayObject(object){
    console.log(object);
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
        <p class="article__price">${object.price / 100}€ Total</p>
        <div class="button__container">
            <a href="index.html"><button class="index__button">Retour</button></a>
            <a href="basket.html"><button id="btnCart" class="addToCart__button">Ajouter au panier</button></a>
        </div>
        </article>`;
    }

let addToCartBtn = document.getElementById("btnCart");
addToCartBtn.addEventListener('click', (event) =>{



})







