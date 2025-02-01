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
            <div class="added-to-cart">
                <img src="images/icons/checkmark.png" alt="Added to Cart">
                Added
            </div>
            <button class="add-to-cart-button button-primary">Add to Cart</button>
        </div>
    `;
});

const productsGrid = document.querySelector('.js-products-grid');
if (productsGrid) {
    productsGrid.innerHTML = productHTML;
} else {
    console.error('Element with class .js-products-grid not found');
}
