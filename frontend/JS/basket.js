import { CartService } from "./services/cartService.js";
const cartService = new CartService();

init();

function init() {

    const cart = cartService.getCart();
    cartService.displayCart(cart);
}