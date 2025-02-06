import {formatCurrency} from "../scripts/utils/money.js";

console.log('test suite :format Currency')
console.log('convet cents into dollars');
if(formatCurrency(2095)==='20.95'){
    console.log('Test1 passed');
}
else{
    console.log('Test1 failed');

}
console.log('works with zero');

if(formatCurrency(0)==='0.00'){
    console.log('Test2 passed');
}
else{
    console.log('Test1 failed');

}
console.log('round upto nearest cents')

if(formatCurrency(2000.5)==='20.01'){
    console.log('Test3 passed');
}
else{
    console.log('Test3 failed');

}