// @ts-check
const owner = require('./owner');
const vendingMachine = require('./vendingMachine').VendingMachine;
const productList = require('./productList');

const products = productList.getProducts();

// user selects products
const selectedProducts = products.slice(0, 2);
// console.log(selectedProducts);
// user inserts denominations
let total = 0;

total += vendingMachine.insertDenominations(5);
total += vendingMachine.insertDenominations(10);
total += vendingMachine.insertDenominations(100);
// console.log(total);


// Invalid scenario
// vendingMachine.insertDenominations(11);


// dispense product
const result = vendingMachine.dispenseProducts(selectedProducts, total);
console.log(result);
