var Page = require('./page')
var categoryPage = Object.create(Page, {

    breadcrumbs: { value: '.breadcrumbs' },

    openNewArrivals: { value: function() {
        Page.open.call(this, 'shop/new-arrivals');
    } },

    openSearchShoes: { value: function() {
        Page.open.call(this, 'shop/catalogsearch/result/?q=shoes');
    } },

    clickGridItem: { value: function() {
        browser.execute(function() {
            jQuery('.products-grid .product-image')[0].click()
        })
    } },

});

module.exports = categoryPage;