// import { cart } from "./data/cart";
// import { products } from "./data/products";

import {cart, removeFromCart} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js'
// ESM VERSION (default export)
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'

import {deliveryOptions,getDeliveryOption} from '../data/deliveryOptions.js';

hello();
const today=dayjs();
console.log(today.format('dddd, MMMM D'));
const deliverydate=today.add(7, 'day'); // Add 7 days to today
console.log(deliverydate.format('dddd, MMMM D'));
let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingProduct;

    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });

    const deliveryOptionId = cartItem.deliveryOptionId;

    const deliveryOption = getDeliveryOption(deliveryOptionId);

    const today = dayjs();
    const deliveryDate = today.add(
      deliveryOption.deliveryDays,
      'days'
    );
    const dateString = deliveryDate.format(
      'dddd, MMMM D'
    );
    cartSummaryHTML += `
      <div class="cart-item-container
        js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: ${dateString}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingProduct.image}">

          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-price">
              $${formatCurrency(matchingProduct.priceCents)}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary">
                Update
              </span>
              <input class="quantity-input" type="number" value="${cartItem.quantity}">
              <span class="save-quantity-link link-primary"  >Save</span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            ${deliveryOptionHTML(matchingProduct,cartItem)}
            
            
          </div>
        </div>
      </div>
    `;
  });


  function deliveryOptionHTML(matchingProduct,cartItem) {
    let html='';
  deliveryOptions.forEach((deliveryOption)=>{
    const today=dayjs();
    const deliveryDate=today.add(deliveryOption.deliveryDay, 'days');

    const dateString=deliveryDate.format('dddd, MMMM D');
    const priceString=deliveryOption.priceCents===0?'FREE Shipping':`$${formatCurrency(deliveryOption.priceCents)} - Shipping`;

    const isChecked=deliveryOption.id===
    cartItem.deliveryOptions?'checked':'';
        html+=  `
          <div class="delivery-option">
              <input type="radio"
              ${isChecked?'checked':''}
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
              <div>
                <div class="delivery-option-date">
                ${dateString}
                </div>
                <div class="delivery-option-price">
                  ${priceString}
                </div>
              </div>
            </div>
          `
  });
  return html;
  }

  document.querySelector('.js-order-summary')
    .innerHTML = cartSummaryHTML;

  // document.querySelectorAll('.update-quantity-link').forEach((link) => {
  //   link.addEventListner('click',(e)=>{
  //     const cartItemContainer = e.target.closest('.cart-item-container');
  //     const quantityLabel = cartItemContainer.querySelector('.quantity-input');
  //     const saveButton = cartItemContainer.querySelector('.save-quantity-link');
  //     quantityInput.disabled = false;
  //     saveButton.style.display = 'inline'; // Show Save button
      
  //   })
  // });

  document.querySelectorAll('.js-delete-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);

        const container = document.querySelector(
          `.js-cart-item-container-${productId}`
        );
        container.remove();
      });
    });

    // function updateQuantityInCart(productId, newQuantity) {
    //   let matchingItem=cart.find((cartItem)=>cartItem.productId===productId);

    //   if(matchingItem){
    //     matchingItem.quantity=newQuantity;
    //   }

    // }