import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';

// import '../data/backend-practise.js'
import { loadProduct } from '../data/products.js';

import  '../data/cart-oop.js';
import '../data/cart-class.js';

// no need to create function having name(anaoynmous function can also be made)
loadProduct(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
