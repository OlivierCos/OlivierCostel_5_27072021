import {cart} from "../models/cart.js";

const LOCAL_STORAGE_KEY = "object";
let localStorageObject = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//Création d'une classe pour importer les objets du localStorage dans le panier, création d'un tableau si le localStorage est vide
export class CartService {
    constructor() {}
    getCart() {
        const objects = localStorageObject?localStorageObject: [];
        //Condition si le panier est vide
        if(objects == 0){
            const emptyBasket = `<span id="BasketIsEmpty"> Votre panier est vide</span>`
            let emptyBasketLine = document.getElementById("table");
            return emptyBasketLine.innerHTML = emptyBasket;
            }
        else{
            return new cart(objects);
        }
    }
}