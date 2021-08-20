import {cart} from "../models/cart.js";

const LOCAL_STORAGE_KEY = "object";
let localStorageObject = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

export class CartService {
    constructor() {}
    getCart() {
        const objects = localStorageObject?localStorageObject: [];
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