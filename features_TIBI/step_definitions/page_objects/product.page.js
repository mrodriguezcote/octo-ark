var Page = require('./page')
var productPage = Object.create(Page, {

    productTitle: { value: '.product-shop .product-name' },

    addToCart: { value: '.add-to-cart-buttons .button' },

    imageBlock: { value: '.product-image-gallery' },

    openSS117JAN5183: { value: function() {
        Page.open.call(this, 'shop/janie-sandals-tea-rose');
    } },

    clickRelated: { value: function() {
        browser.execute(function() {
            jQuery('.box-related .product-image')[0].click()
        })
    } }, 

    selectColorSizeAdd: { value: function() {
        browser.execute(function() {
            jQuery('.select-shoe_color')[0].children[0].children[0].click()
            jQuery('.select-shoe_size')[0].children[4].children[0].click()
            jQuery('.add-to-cart-buttons .button')[0].click()
        })
    } },

    clickATC: { value: function() {
        browser.execute(function() {
            jQuery('.add-to-cart-buttons .button')[0].click()
        })
    } },
  

});

module.exports = productPage;