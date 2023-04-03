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
      <button class="cart-card__quantity_less">-</button>
      <div class="cart-card__quantity">${item.quantity}</div>
      <button class="cart-card__quantity_add">+</button>
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
      let qtd = 1
      let totalValue = 0;
      cartItems.map((item) => totalValue += item.price);
      document.querySelector(".product-list").innerHTML = htmlItems.join("");
      document.querySelector(".cart-total-hide").style.display = "block";
      document.querySelector(".cart-total").innerHTML = `Total: $${(totalValue).toFixed(2)}`;

      
      document.querySelector(".cart-card__quantity_add").addEventListener("click", () =>{
        qtd++
        document.querySelector(".cart-card__quantity").innerHTML = qtd
        total = totalValue + (item.price * qtd)
        console.log(total)

      })
      document.querySelector(".cart-card__quantity_less").addEventListener("click", () =>{
        if (qtd > 1){
          qtd--
          document.querySelector(".cart-card__quantity").innerHTML = qtd
        } else{
          if(qtd < 1)
          document.querySelector(".cart-card divider").remove()
        }

      }
      )
    }

}

  