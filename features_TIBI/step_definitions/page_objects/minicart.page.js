var Page = require('./page')
var miniCart = Object.create(Page, {

    productTitle: { value: '#header-cart .product-name' }

});

module.exports = miniCart;