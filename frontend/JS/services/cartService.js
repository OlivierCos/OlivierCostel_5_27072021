import {cart} from "../models/cart.js";

const LOCAL_STORAGE_KEY = "object";
let localStorageObject = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

export class CartService {
    constructor() {}
    getCart() {
        const objects = localStorageObject?localStorageObject: [];
        return new cart(objects);
    }

    displayCart(cart) {
        const tableContainer = document.getElementById('tableb');

        for (const object of cart.objects) {
            let objectsCartContainer = document.getElementById('tr__body');
            objectsCartContainer.innerHTML += `
                <tr><td><img class="table__img" src="${object.imageUrl}"></td>
                    <td><p class="table__name">${object.name}</p></td>
                    <td><p class="table__price" src>${object.price}</p></td>
                    <td></td>
                    <td><button type="button" class="table__button">Supprimer</button></td></tr>
                `;

            tableContainer.objectsCartContainer;
        };
    }
}