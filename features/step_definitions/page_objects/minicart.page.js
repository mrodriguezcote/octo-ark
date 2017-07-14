var Page = require('./page')
var miniCart = Object.create(Page, {

    productTitle: { value: '#mini-cart .product-name' }

});

module.exports = miniCart;