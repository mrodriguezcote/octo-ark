var Page = require('./page')
var homePage = Object.create(Page, {

    popup: { value: '.newsletter-modal' },

    open: { value: function() {
        Page.open.call(this, '');
    } }

});

module.exports = homePage;