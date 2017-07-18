var Page = require('./page')
var registrationPage = Object.create(Page, {

	header: { value: '.cooler-registration-header' },

	types: { value: '#jq-coolers' },

	sizes: { value: '#jq-sizes' },

	colors: { value: '#jq-colors' },

	selectedProduct: { value: '#selected-product' },

	zipField: { value: '#zip' },

    selectProduct: { value: function() {
        browser
        .execute(function() {
            jQuery('#jq-coolers li[title="Tundra"]')[0].click();
        })
        .waitForVisible('#jq-sizes', 10000)
        .execute(function() {
            jQuery('#jq-sizes')[0].children[0].click()
        })
        .waitForVisible('#jq-colors', 10000)
        .execute(function() {
            jQuery('#jq-colors')[0].children[0].click()
        })
    } },

    clickRegister: { value: function() {
        browser.execute(function() {
            jQuery('.button.yeti-orange-but')[0].click()
        })
    } },

    inputSerialNumber: { value: function() {
        browser.execute(function() {
            jQuery('#registration_number')[0].setValue('TESTNUMBER');
        })
    } },

    fillShippingInfo: { value: function() {
        browser.execute(function() {
            jQuery("input[title='First Name']")[0].setValue('Marco');
            jQuery("input[title='Last Name']")[0].setValue('Rodriguez');
            jQuery("input[title='Address 1']")[0].setValue('145 Williman St');
            jQuery("input[title='City']")[0].setValue('Charleston');
            jQuery("select[title='State/Province']")[0].setValue(54);
            jQuery("input[title='Zip/Postal Code']")[0].setValue('29403');
            jQuery("input[title='Phone']")[0].setValue('8677777777');
            jQuery("input[title='Email']")[0].setValue('marco@blueacorn.com');
        })
    } },

});

module.exports = registrationPage;