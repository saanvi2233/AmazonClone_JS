import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';

// import '../data/backend-practise.js'
import { loadProduct ,loadProductFetch} from '../data/products.js';
import { loadCart } from '../data/cart.js';

// async return promises and await waits for the promise to resolve
// await only used inside async functioon
// makes code cleaner

// so we can use throw if we are creating the error synchronously
// and use reject if we are creating the error asynchronously

async function loadPage(){

    try{
        // throw 'error1';

        console.log('load page');
        await loadProductFetch();
        const value=await new Promise((resolve,reject) => {
            // Load cart asynchronously
            loadCart(() => {
                // console.log('cart loaded');
                // reject('error3');
                resolve('value3');
            });
        })
    }
    catch(error){
        console.log('Unexpected error.Please try again later');
    }
    

    

    renderOrderSummary();
    renderPaymentSummary();

    // thsi act as the resolve and act as a next step
    // return 'value2async'
}
loadPage();


// promise is a class in js-it runs the inner function immediately
// resolve is a function which is called when promise is resolved.let us control whne to go next step
// promise creates a new line of code that runs parallel to other(so that we can do multiple things at the smae time)

// Using Promise.all to handle multiple asynchronous operations
/*Promise.all([
    loadProductFetch(),
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
*/
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

