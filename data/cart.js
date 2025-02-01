export const cart=[];

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