// const products = [
//     {
//         image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//         name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//         rating: { stars: 4.5, count: 87 },
//         priceCents: 1090
//     },
//     {
//         image: 'images/products/intermediate-composite-basketball.jpg',
//         name: 'Intermediate Size Basketball',
//         rating: { stars: 4, count: 127 },
//         priceCents: 2095
//     },
//     {
//         image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//         name: 'Adults Plain Cotton T-Shirt - 2 Pack',
//         rating: { stars: 4.5, count: 56 },
//         priceCents: 799
//     },
//     {
//         image: 'images/products/black-2-slot-toaster.jpg',
//         name: 'Black 2-Slot Toaster',
//         rating: { stars: 3.5, count: 34 },
//         priceCents: 2499
//     }
// ];

cart = [];

// now all the products come for the data folder
let productHTML = '';

products.forEach(product => {
    const ratingImage = `images/ratings/rating-${Math.round(product.rating.stars * 10)}.png`;

    productHTML += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image" src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-name limit-text-to-2-lines">${product.name}</div>
            <div class="product-rating-container">
                <img class="product-rating-stars" src="${ratingImage}" alt="${product.rating.stars} stars">
                <div class="product-rating-count link-primary">${product.rating.count} reviews</div>
            </div>
            <div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>
            <div class="product-quantity-container">
                <select>
                    ${Array.from({ length: 10 }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
                </select>
            </div>
            <div class="product-spacer"></div>
            <div class="added-to-cart js-added-to-cart" style="display: none;">
                <img src="images/icons/checkmark.png" alt="Added to Cart">
                Added
            </div>
            <button class="add-to-cart-button button-primary 
            js-add-to-cart"  
            data-product-id="${product.id} ">Add to Cart</button>
        </div>
    `;  //added attribute data-product-name
    // first we attach the product name to the buttob
});

const productsGrid = document.querySelector('.js-products-grid');
if (productsGrid) {
    productsGrid.innerHTML = productHTML;
} else {
    console.error('Element with class .js-products-grid not found');
    
}



document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click',()=>{
        // console.log('Added to cart')
        // used to load the data from the attribute
        // console.log(button.dataset) // this displays all the data attributes
        const productId = button.dataset.productId; // this is used to get the name of the product
        // console.log(productName)

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

        let totalquantity = 0;
        cart.forEach((item)=>{
            totalquantity+=item.quantity;
        });

        document.querySelector('.js-cart-quantity').innerHTML = totalquantity;
        console.log(totalquantity);
        
        console.log(cart);


       // Change button text to "Added"
       button.innerHTML = "Added";
       button.classList.add("added-to-cart-button"); // Add a class for styling

       // Display the "Added" message
       const productContainer = button.closest('.product-container');
       productContainer.querySelector('.js-added-to-cart').style.display = 'block';

    //    Revert the button text to "Add to Cart" after 2 seconds
    setTimeout(()=>{
        button.innerHTML="Add to Cart";
        button.classList.remove("added-to-cart-button");
        productContainer.querySelector('.js-added-to-cart').style.display = 'none';
    },1000);
    });
});

// document.querySelector('.js-').addEventListener('click',(event)=>{

// })


// function updateAddToCartButton(){
//     const buttonE= document.querySelector('.js-add-to-cart');
//     if(buttonE.innerHTML==='Add to cart'){
//         buttonE.innerHTML='Added';
//         buttonE.classList.add('added-to-cart');
//     }else{
//         buttonE.innerHTML='Add to cart';
//         buttonE.classList.remove('added-to-cart');
//     }

