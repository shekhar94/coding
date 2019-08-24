// For tracking all the products
const Product = require('./product').Product;

const productList = [];
const productMap = new Map();

function addProduct(id, name, price) {
    if (productMap.has(id)) throw new Error('Duplicate product id');
    const product = new Product(id, name, price);
    productList.push(product);
    productMap.set(id, product);
    return productList;
}

function removeProduct(id) {
    if (!productMap.has(id)) throw new Error('Product with given id does not exists');
    productMap.delete(id);
    const index = productList.findIndex((val, index) => {
        return val.id === id;
    });
    productList.splice(index, 1);
    return productList;
}

function getProducts() {
    return productList;
}


module.exports = {
    addProduct,
    removeProduct,
    getProducts
}

