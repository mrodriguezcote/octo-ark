var Page = require('./page')
var homePage = Object.create(Page, {

    popup: { value: '#popup-newssubscribe' },

    open: { value: function() {
        Page.open.call(this, '');
    } },

    clickNewArival: { value: function() {
        browser.execute(function() {
            jQuery('.new-product.block-link')[0].click()
        })
    } }

});

module.exports = homePage;