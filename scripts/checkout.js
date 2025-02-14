import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';

// import '../data/backend-practise.js'
import { loadProduct } from '../data/products.js';
import { loadCart } from '../data/cart.js';

// import  '../data/cart-oop.js';
// import '../data/cart-class.js';

// promise is a class in js-it runs the inner function immediately
// resolve is a function which is called when promise is resolved.let us control whne to go next step
// promise creates a new line of code that runs parallel to other(so that we can do multiple things at the smae time)

// Using Promise.all to handle multiple asynchronous operations
Promise.all([
    new Promise((resolve) => {
        // Load product asynchronously
        loadProduct(() => {
            console.log('product loaded');
            resolve('value1');
        });
    }),
    new Promise((resolve) => {
        // Load cart asynchronously
        loadCart(() => {
            console.log('cart loaded');
            resolve();
        });
    })
]).then((value) => {
    // Render summaries after both promises are resolved
    console.log(value);
    renderOrderSummary();
    renderPaymentSummary();
});
// .then as a next step to run
// promise helps to avoid nesting

/*
new Promise((resolve)=>{
    // console.log('promise resolved')

    // run some async code
    // console.log('start promise')
    loadProduct(()=>{
        console.log('product loaded')
        resolve('value1');
        });
    }).then((value)=>{
    console.log(value)
         return new Promise((resolve)=>{
                loadCart(()=>{
            console.log('cart loaded')
                 resolve();
             });
  
        })
    }).then(()=>{
  
    renderOrderSummary();
    renderPaymentSummary();
})

*/


// no need to create function having name(anaoynmous function can also be made)

/*
loadProduct(()=>{
    loadCart(()=>{
        renderOrderSummary();
    renderPaymentSummary();
});
    });
*/

    // multiple callbacks cause lot of nesting

