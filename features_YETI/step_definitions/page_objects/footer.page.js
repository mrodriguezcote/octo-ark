var Page = require('./page')
var footer = Object.create(Page, {

    clickFooterRegister: { value: function() {
        browser.execute(function() {
            jQuery('a[title="Register Your YETI"]')[0].click()
        })
    } }

});

module.exports = footer;