var Page = require('./page')
var cart = Object.create(Page, {

    cartTitle: { value: '.cart .page-title'},

    productTitle: { value: '#shopping-cart-table .product-name' }
   
});

module.exports = cart;