import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function cartItemTemplate(item) {
    const newItem = `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img
        src="${item.img}"
        alt="${item.name}"
      />
    </a>
    <a href="#">
      <h2 class="card__name">${item.name}</h2>
    </a>
    <div cart-card__quantity_area>
      <button id="${item.id}" class="cart-card__quantity_less">-</button>
      <div id="${item.id}" class="cart-card__quantity">${item.quantity}</div>
      <button id="${item.id}" class="cart-card__quantity_add" onclick="changeQtd()">+</button>
    </div>
    <p class="cart-card__price">$${(item.price).toFixed(2)}</p>
  </li>`;
  
    return newItem;
}

export default class ShoppingCart {
    constructor(key, parentSelector) {
      this.key = key;
      this.parentSelector = parentSelector;
    }
    renderCartContents() {
      const cartItems = getLocalStorage(this.key);
      const htmlItems = cartItems.map((item) => cartItemTemplate(item));
      document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
      
      let quantity = 1
      const addQtd = document.querySelector('.cart-card__quantity_add');
      const decreaseQtd = document.querySelector('.cart-card__quantity_less')
      let infoQtd = document.querySelector('.cart-card__quantity')
      let infoPrice = document.querySelector('.cart-card__price')
    
      let totalValue = 0;
      cartItems.map((item) => totalValue += item.price) ;
      document.querySelector(".product-list").innerHTML = htmlItems.join("");
      document.querySelector(".cart-total-hide").style.display = "block";
      document.querySelector(".cart-total").innerHTML = `Total: $${(totalValue).toFixed(2)}`
    }
}

  