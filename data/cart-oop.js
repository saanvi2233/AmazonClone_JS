// use pascal case for things that enerate objects
// pascalCase=start every word with capital
function Cart(localStorageKey){
  const cart={
    cartItems:undefined,
    
    // function inside the method
    // this helps to give the outer object
    loadfromStorage(){
        this.cartItems=JSON.parse(localStorage.getItem(localStorageKey));
    if (!this.cartItems) {
        this.cartItems = [{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId: '1'
        }, {
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 1,
          deliveryOptionId: '2'
        }];
      }
    },

    saveToStorage:function() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },


    addToCart(productId,selectedQuantity) {
      let matchingItem;
    
      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });
    
      if (matchingItem) {
        matchingItem.quantity += selectedQuantity;
      } else {
        this.cartItems.push({
          productId: productId,
          quantity: selectedQuantity,
          deliveryOptions: '1'
        });
      }
    
      // this here is added to access the function inside the method
      this.saveToStorage();
    },

     removeFromCart(productId) {
      const newCart = [];
    
      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });
    
      this.cartItems = newCart;
    
      this.saveToStorage();
    },

    // Function to change the button text temporarily to "Added"
   changeAddToCartButton(button) {
  button.innerHTML = "Added";
  button.classList.add("added-to-cart-button");

  // Show the "Added" message
  const productContainer = button.closest('.product-container');
  productContainer.querySelector('.js-added-to-cart').style.display = 'block';

  // Revert back to "Add to Cart" after 1 second
  setTimeout(() => {
      button.innerHTML = "Add to Cart";
      button.classList.remove("added-to-cart-button");
      productContainer.querySelector('.js-added-to-cart').style.display = 'none';
  }, 1000);
},

 updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  this.cartItems.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  this.saveToStorage();
}

};
return cart;
}

const cart=Cart('cart-oop');
const businessCart=Cart('cart-oop-business');
cart.loadfromStorage();
businessCart.loadfromStorage();
console.log(cart);
console.log(businessCart);


// OOp approach

// use the function to create multiple carts intsead of using the object literal again and again


//  businessCart.loadfromStorage();
//  console.log(businessCart);

// if (!cart) {
//   cart = [{
//     productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//     quantity: 2,
//     deliveryOptionId: '1'
//   }, {
//     productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
//     quantity: 1,
//     deliveryOptionId: '2'
//   }];
// }

// function saveToStorage() {
//   localStorage.setItem('cart', JSON.stringify(cart));
// }

// export function addToCart(productId,selectedQuantity) {
//   let matchingItem;

//   cart.forEach((cartItem) => {
//     if (productId === cartItem.productId) {
//       matchingItem = cartItem;
//     }
//   });

//   if (matchingItem) {
//     matchingItem.quantity += selectedQuantity;
//   } else {
//     cart.push({
//       productId: productId,
//       quantity: selectedQuantity,
//       deliveryOptions: '1'
//     });
//   }

//   saveToStorage();
// }

// export function removeFromCart(productId) {
//   const newCart = [];

//   cart.forEach((cartItem) => {
//     if (cartItem.productId !== productId) {
//       newCart.push(cartItem);
//     }
//   });

//   cart = newCart;

//   saveToStorage();
// }

// Function to change the button text temporarily to "Added"
// export function changeAddToCartButton(button) {
//     button.innerHTML = "Added";
//     button.classList.add("added-to-cart-button");

//     // Show the "Added" message
//     const productContainer = button.closest('.product-container');
//     productContainer.querySelector('.js-added-to-cart').style.display = 'block';

//     // Revert back to "Add to Cart" after 1 second
//     setTimeout(() => {
//         button.innerHTML = "Add to Cart";
//         button.classList.remove("added-to-cart-button");
//         productContainer.querySelector('.js-added-to-cart').style.display = 'none';
//     }, 1000);
// }


// export function updateDeliveryOption(productId, deliveryOptionId) {
//   let matchingItem;

//   cart.forEach((cartItem) => {
//     if (productId === cartItem.productId) {
//       matchingItem = cartItem;
//     }
//   });

//   matchingItem.deliveryOptionId = deliveryOptionId;

//   saveToStorage();
// }