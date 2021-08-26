import { cart } from "../models/cart.js";

const LOCAL_STORAGE_KEY = "object";
let localStorageObject = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//Création d'une classe pour importer les objets du localStorage dans le panier
export class CartService {
  constructor() {}
  getCart() {
    const objects = localStorageObject;
    return new cart(objects);
  }
}
