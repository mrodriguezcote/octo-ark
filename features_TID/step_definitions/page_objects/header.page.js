var Page = require('./page')
var header = Object.create(Page, {

    callout: { value: '.welcome-msg' },

    clickMiniCart: { value: function() {
        browser.execute(function() {
            jQuery('.cart-link')[1].click()
        })
    } }

});

module.exports = header;