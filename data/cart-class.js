
// class looks like object
// more cleaner
// class have extra features than OOp:
// constructor=helps to run the setup code(runs automatically)
// a class looks like the object it generated
// extra feature than oop- contructor
// class is a blueprint of object

// property with hash in front can only be assed by the class(private property)

class Cart {
    cartItems;
    #localStorageKey;
  
    constructor(localStorageKey) {
      this.#localStorageKey = localStorageKey;
      this.#loadFromStorage();
    }
  
    #loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
  
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
    }
  
    saveToStorage() {
      localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }
  
    addToCart(productId) {
      let matchingItem;
  
      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });
  
      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        this.cartItems.push({
          productId: productId,
          quantity: 1,
          deliveryOptionId: '1'
        });
      }
  
      this.saveToStorage();
    }
  
    removeFromCart(productId) {
      const newCart = [];
  
      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });
  
      this.cartItems = newCart;
  
      this.saveToStorage();
    }
  
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
  }
  
  const cart = new Cart('cart-oop');
  const businessCart = new Cart('cart-business');
  
  console.log(cart);
  console.log(businessCart);
  console.log(businessCart instanceof Cart);

// function Cart(localStorageKey){
//     const cart={
    //   cartItems:undefined,
      
      // function inside the method
      // this helps to give the outer object
    //   loadfromStorage(){
    //       this.cartItems=JSON.parse(localStorage.getItem(localStorageKey));
    //   if (!this.cartItems) {
    //       this.cartItems = [{
    //         productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    //         quantity: 2,
    //         deliveryOptionId: '1'
    //       }, {
    //         productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    //         quantity: 1,
    //         deliveryOptionId: '2'
    //       }];
    //     }
    //   },
  
    //   saveToStorage:function() {
    //     localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    //   },
  
  
    //   addToCart(productId,selectedQuantity) {
    //     let matchingItem;
      
    //     this.cartItems.forEach((cartItem) => {
    //       if (productId === cartItem.productId) {
    //         matchingItem = cartItem;
    //       }
    //     });
      
    //     if (matchingItem) {
    //       matchingItem.quantity += selectedQuantity;
    //     } else {
    //       this.cartItems.push({
    //         productId: productId,
    //         quantity: selectedQuantity,
    //         deliveryOptions: '1'
    //       });
    //     }
      
    //     // this here is added to access the function inside the method
    //     this.saveToStorage();
    //   },
  
//        removeFromCart(productId) {
//         const newCart = [];
      
//         this.cartItems.forEach((cartItem) => {
//           if (cartItem.productId !== productId) {
//             newCart.push(cartItem);
//           }
//         });
      
//         this.cartItems = newCart;
      
//         this.saveToStorage();
//       },
  
//       // Function to change the button text temporarily to "Added"
//      changeAddToCartButton(button) {
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
//   },
  
//    updateDeliveryOption(productId, deliveryOptionId) {
//     let matchingItem;
  
//     this.cartItems.forEach((cartItem) => {
//       if (productId === cartItem.productId) {
//         matchingItem = cartItem;
//       }
//     });
  
//     matchingItem.deliveryOptionId = deliveryOptionId;
  
//     this.saveToStorage();
//   }
  
//   };
//   return cart;
//   }