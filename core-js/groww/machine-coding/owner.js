// @ts-check
// const VendingMachine = require('./vendingMachine').VendingMachine;
const productList = require('./productList');
const denominationsList = require('./denominationsList');

// Add products
productList.addProduct(1, 'product1', 10);
productList.addProduct(2, 'product2', 20);
productList.addProduct(3, 'product3', 30);
// console.log(productList.getProducts());
// productList.removeProduct(1);
// console.log(productList.getProducts());

denominationsList.addDenomination(1, 5);
denominationsList.addDenomination(2, 10);
denominationsList.addDenomination(3, 50);
denominationsList.addDenomination(4, 100);

// console.log(denominationsList.getDenominations());


// const vendingMachine = new VendingMachine('Groww');

// exports.vendingMachine = vendingMachine;

