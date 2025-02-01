// import { cart } from "./data/cart";
// import { products } from "./data/products";

const cart1 = [
    {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2
    },
    {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1
    }
  ];
//  import {cart as cart1} from '../data/cart.js';
  import { products  } from '../data/products.js';
  import { formatCurrency } from './utils/money.js';

  let cartsummaryHTML='';

cart1.forEach((cartItem)=>{

    const productId = cartItem.productId;

    let matchingProduct = products.find((product) => product.id === productId); // Using find for easier matching
//   console.log(matchingProduct);
    // Log matching product details
cartsummaryHTML+=`<div class="cart-item-container">
              <div class="delivery-date">
                Delivery date: Tuesday, June 21
              </div>
  
              <div class="cart-item-details-grid">
                <img class ="product-image"src="${matchingProduct.image}" alt="${matchingProduct.name}">
  
  
                <div class="cart-item-details">
                  <div class="product-name">
                   ${matchingProduct.name}
                  </div>
                  <div class="product-price">
                    ${formatCurrency(matchingProduct.priceCents)}
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label">${cart1.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                      Update
                    </span>
                    <span class="delete-quantity-link link-primary">
                      Delete
                    </span>
                  </div>
                </div>
  
                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  <div class="delivery-option">
                    <input type="radio" checked
                      class="delivery-option-input"
                      name="delivery-option-${matchingProduct.id}">
                    <div>
                      <div class="delivery-option-date">
                        Tuesday, June 21
                      </div>
                      <div class="delivery-option-price">
                        FREE Shipping
                      </div>
                    </div>
                  </div>
                  <div class="delivery-option">
                    <input type="radio"
                      class="delivery-option-input"
                      name="delivery-option-${matchingProduct.id}">
                    <div>
                      <div class="delivery-option-date">
                        Wednesday, June 15
                      </div>
                      <div class="delivery-option-price">
                        $4.99 - Shipping
                      </div>
                    </div>
                  </div>
                  <div class="delivery-option">
                    <input type="radio"
                      class="delivery-option-input"
                      name="delivery-option-${matchingProduct.id}">
                    <div>
                      <div class="delivery-option-date">
                        Monday, June 13
                      </div>
                      <div class="delivery-option-price">
                        $9.99 - Shipping
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;

        
  

});
// generatin the html with js
document.querySelector('.js-order-summary').innerHTML=cartsummaryHTML;

console.log(cartsummaryHTML);