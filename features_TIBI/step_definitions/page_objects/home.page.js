var Page = require('./page')
var homePage = Object.create(Page, {

    popup: { value: '#signup-popup' },

    open: { value: function() {
        Page.open.call(this, '');
    } },

    closePopup: { value: function() {
        browser.execute(function() {
            jQuery('#signup-popup .close')[0].click()
        })
    } },

});

module.exports = homePage;