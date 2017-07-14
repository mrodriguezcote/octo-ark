var Page = require('./page')
var productPage = Object.create(Page, {

    productTitle: { value: '.product-shop .product-name' },

    addToCart: { value: '#product-addtocart-button' },

    imageBlock: { value: '.product-img-box' },

    open1508: { value: function() {
        Page.open.call(this, 'beachside-polo');
    } },

    open847074574682: { value: function() {
        Page.open.call(this, '5-pack-skipjack-seal-stickers');
    } },


    clickRelated: { value: function() {
        browser.execute(function() {
            jQuery('#related_products .product-image')[0].click()
        })
    } }, 

    selectColorSizeAdd: { value: function() {
        browser.execute(function() {
            jQuery('.option .amconf-image-container')[0].children[0].click();
            jQuery('.option.size .input-box')[0].children[0].setValue(117);
            jQuery('#product-addtocart-button')[0].click()
        })
    } },

    selectColor: { value: function() {
        browser.execute(function() {
            jQuery('.option .amconf-image-container')[0].children[0].click()
        })
    } },

    selectSize: { value: function() {
        browser.execute(function() {
            jQuery('.option.size .input-box')[0].children[0].setValue(117)
        })
    } },

    clickATC: { value: function() {
        browser.execute(function() {
            jQuery('#product-addtocart-button')[0].click()
        })
    } }    

});

module.exports = productPage;