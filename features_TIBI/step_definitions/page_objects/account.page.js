var Page = require('./page')
var accountPage = Object.create(Page, {

    loginTitle: { value: '.account-login .page-title' },

    accountTitle: { value: '.my-account .page-title' },

    wishlistTitle: { value: '.my-wishlist .page-title'},

    wishlistSuccess: {value: '.success-msg'},

    openLogin: { value: function() {
        Page.open.call(this, 'customer/account/login/');
    } },

    openAccount: { value: function() {
        Page.open.call(this, 'customer/account/index/');
    } },

    submitLogin: { value: function() {
        browser.execute(function() {
            jQuery('#email')[0].setValue('marco.rodriguez@blueacorn.com');
            //jQuery('#email')[0].setValue('marco@blueacorn.com');
            jQuery('#pass')[0].setValue('pass4marco');
            jQuery('#send2')[0].click()
        })
    } },

    clickWishlist: { value: function() {
        browser.execute(function() {
            jQuery('.sidebar .block-content')[0].children[0].children[4].children[0].click()
        })
    } },

    clickWishlistATC: { value: function() {
        browser.execute(function() {
            jQuery('.my-wishlist .btn-add')[0].click()
        })
    } },

    clickOrders: { value: function() {
        browser.execute(function() {
            jQuery('.sidebar .block-content')[0].children[0].children[3].children[0].click()
        })
    } },

    clickOrdersReorder: { value: function() {
        browser.execute(function() {
            jQuery('.order-details-buttons .button')[1].click()
        })
    } }

});

module.exports = accountPage;