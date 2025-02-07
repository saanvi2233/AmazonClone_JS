import {formatCurrency} from  '../scripts/utils/money.js';

describe('test suite:formatCurrency', function() {
    it('converts cents into dollarss',()=>{
        // expect helps to comapre one value to ther 
        // it gives value in object and this object has many methoda to do comaprison
        expect(formatCurrency(2095)).toEqual('20.95');
    })
});