///Importe la fonction qui va appeler l'API avec la méthode GET fetch
import {ObjectService} from "./services/objectService.js";

///Utilisation de la fonction init pour lancer le process
init();

///Fonction pour lancer : nouvelle promise de la classe ObjectService, constante pour appeler la fonction fetch et appel de celle qui fait le rendu html dynamique///
async function init() {
    const objectService = new ObjectService();
    ///Création d'une variable afin de récupérer l'id de l'object sélectionné dans la page index.html
    let params = new URLSearchParams(window.location.search);
    let objectId = params.get("id");
    const objectHtml = await objectService.getObject(objectId);
    displayObject(objectHtml);
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
            <select id="varnish" name="varnish"></select> 
        </div>
        <p class="article__price">${object.price}€ Total</p>
        <div class="button__container">
            <a href="index.html"><button class="index__button">Retour</button></a>
            <a><button id="btnCart" class="addToCart__button">Ajouter au panier</button></a>
        </div>
        </article>`;

    const varnishes = object.varnish;
	varnishes.forEach( varnish => {
	const varnishHtml = document.getElementById('varnish');
	varnishHtml.innerHTML += `<option>${varnish}</option>`;
	});

    let addToCartBtn = document.getElementById("btnCart");
    addToCartBtn.addEventListener('click', (event) =>{

        let objectStorage = {
            image: object.imageUrl,
            name: object.name,
            id: object._id,
            price: object.price
        };
        let localStorageObject = JSON.parse(localStorage.getItem("object"));
        if (!localStorageObject) {
            localStorageObject = [];
        }
        let addLocalStorage = () => {

            localStorageObject.push(objectStorage);
            localStorage.setItem("object", JSON.stringify(localStorageObject));
        };

        addLocalStorage();
        console.log(localStorageObject);
    })
}








