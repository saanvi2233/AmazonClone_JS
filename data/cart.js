export let cart = [
    {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2
    },
    {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1
    }
  ];
// using the id we can find other details of the product from original product list
// this is called noramalization OF DATA


export function addToCart(productId) {
    let matchingItem;
       
    productId;
    // checking if product is altredy exisimg in the cart
    cart.forEach((item)=>{
        if(productId==item.productId){
           matchingItem=item;
        }
    });
    if(matchingItem){
        matchingItem.quantity+=1;
    }else{
        cart.push({
            productId: productId,
            quantity: 1
        
        });
    }

    
    
    console.log(cart);

}

// Function to update cart quantity in header
 export function updateCartQuantity() {
    let totalQuantity = 0;
    cart.forEach(item => {
        totalQuantity += item.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML = totalQuantity;
}

// Function to change the button text temporarily to "Added"
 export function changeAddToCartButton(button) {
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
}

// export function removeFromCart(productId){
//     // first create a array
//     const newCart=[];

//     // loop throgh the cart and add all item except that's beong deleted
//     cart.forEach((item)=>{
//         if(item.productId!=productId){
//             newCart.push(item);
//         }
//     });
//     cart=newCart;


// }