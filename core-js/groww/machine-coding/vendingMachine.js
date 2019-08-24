const denominationsList = require('./denominationsList');

class VendingMachine {
    constructor(name) {
        this.name = name;
    }
    insertDenominations(value) {
        return denominationsList.checkValidDenomination(value);
    }
    dispenseProducts(productsArr, moneyPaid) {
        const totalPrice = this.getTotalPrice(productsArr);
        if (moneyPaid >= totalPrice) {
            return {
                productsArr,
                remaining: (moneyPaid - totalPrice)
            }
        } else {
            throw new Error('Total price of selected products is more that paid amount');
        }
    }
    getTotalPrice(productsArr) {
        const totalPrice = productsArr.reduce((acc, product) => {
            acc += product.price;
            return acc;
        }, 0);
        return totalPrice;
    }

}

exports.VendingMachine = new VendingMachine('Groww');