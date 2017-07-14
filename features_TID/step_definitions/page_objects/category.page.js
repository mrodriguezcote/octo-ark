var Page = require('./page')
var categoryPage = Object.create(Page, {

    categoryTitle: { value: '.category-title' },

    pageTitle: { value: '.page-title' },

    quickviewRelated: { value: '#related_products' },

    openMen: { value: function() {
        Page.open.call(this, 'men');
    } },

    openSearchShorts: { value: function() {
        Page.open.call(this, 'catalogsearch/result/?q=shorts');
    } },

    clickGridItem: { value: function() {
        browser.execute(function() {
            jQuery('.products-grid .product-image')[0].click()
        })
    } },

    clickQuickview: { value: function() {
        browser.execute(function() {
            jQuery('#brainvire_quickshop_handler')[0].click()
        })
    } },

    clickQuickviewRelated: { value: function() {
        browser.execute(function() {
            jQuery('#related_products .product-image')[0].click()
        })
    } }

});

module.exports = categoryPage;