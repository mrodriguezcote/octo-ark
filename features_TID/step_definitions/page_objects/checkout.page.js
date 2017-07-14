var Page = require('./page')
var checkout = Object.create(Page, {

    pageTitle: { value: '.checkout-onepage-index .page-title' },

    confirmationPageTitle: { value: '.col-main .page-title' },

    zipField: { value: '.validate-zip-international' },

    shippingMethods: { value: '#checkout-shipping-method-load' },

    paymentMethods: { value: '#checkout-payment-method-load' },

    giftcardForm: { value: '#giftcard-form' },

    promoForm: { value: '.discount-form' },

    giftcardWaitMsg: { value: '#gc-apply-please-wait' },

    promoWaitMsg: { value: '#coupon-please-wait' },

    freePaymentMethod: { value: '#p_method_free' },

    paypalCallout: { value: '#payment_form_paypal_express' },

    paypalButton: { value: '#createAccount' },

    submitPaymentButton: { value: '#payment-buttons-container .button' },

    cvvField: { value: '#authorizenet_cc_cid' },

    reviewTable: { value: '#checkout-review-table' },

    storyBox: { value: '#storyboxModule' },

    open: { value: function() {
        Page.open.call(this, 'checkout/onepage/');
    } },

    continueGuest: { value: function() {
        browser.execute(function() {
            jQuery(jQuery('.control .radio')[1]).prop("checked", true);
            jQuery('.buttons-set')[1].children[0].click()
        })
    } },

    continueCreate: { value: function() {
        browser.execute(function() {
            jQuery(jQuery('.control .radio')[0]).prop("checked", true);
            jQuery('.buttons-set')[1].children[0].click()
        })
    } },

    fillBilling: { value: function() {
        browser.execute(function() {
            jQuery("input[title='First Name']")[0].setValue('Marco');
            jQuery("input[title='Last Name']")[0].setValue('Rodriguez');
            jQuery("input[title='Telephone']")[0].setValue('8677777777');
            jQuery("input[title='Email Address']")[0].setValue('marco@blueacorn.com');
            jQuery("input[title='Street Address']")[0].setValue('145 Williman St');
            jQuery("input[title='City']")[0].setValue('Charleston');
            jQuery("input[title='Zip/Postal Code']")[0].setValue('29403');
            jQuery("select[title='State/Province']")[0].setValue(54)
        })
    } },

    continueShipSame: { value: function() {
        browser.execute(function() {
            jQuery(jQuery('.control .radio')[2]).prop("checked", true);
            jQuery('#billing-buttons-container')[0].children[0].click()
        })
    } },

    continueShipNew: { value: function() {
        browser.execute(function() {
            jQuery(jQuery('.control .radio')[3]).prop("checked", true);
            jQuery('#billing-buttons-container')[0].children[0].click()
        })
    } },

    selectUps03: { value: function() {
        browser.execute(function() {
            jQuery('#s_method_ups_03').prop("checked", true);
            jQuery('#shipping-method-buttons-container')[0].children[1].click()
        })
    } },

    selectStoreCredit: { value: function() {
        browser.execute(function() {
            jQuery('#use_customer_balance')[0].click();
            jQuery(jQuery('#use_customer_balance')[0]).prop('checked', true)
        })
    } },    

    selectPromoCheckbox: { value: function() {
        browser.execute(function() {
            jQuery('#callout_in_checkout')[0].click();
        })
    } },

    submitGiftcard: { value: function() {
        browser.execute(function() {
            jQuery('#giftcard_code')[0].setValue('W7T-0WD-2S8-BZS');
            jQuery('#giftcard-form .button2')[0].click()
        })
    } },

    submitGiftcardTotal: { value: function() {
        browser.execute(function() {
            jQuery('#giftcard_code')[0].setValue('W7T-7RU-1E9-EK1');
            jQuery('#giftcard-form .button2')[0].click()
        })
    } },

    submitPromo: { value: function() {
        browser.execute(function() {
            jQuery('#coupon_code')[0].setValue('TESTX');
            jQuery('.discount-form .button2')[0].click();
        })
    } },

    submitPromoTotal: { value: function() {
        browser.execute(function() {
            jQuery('#coupon_code')[0].setValue('TESTXFREE');
            jQuery('.discount-form .button2')[0].click();
        })
    } },

    selectCardPayment: { value: function() {
        browser.execute(function() {
            jQuery('#p_method_authorizenet').click();
        })
    } },

    selectPaypalPayment: { value: function() {
        browser.execute(function() {
            jQuery('#p_method_paypal_express').click();
        })
    } },

    selectTestPayment: { value: function() {
        browser.execute(function() {
            jQuery('#p_method_cashondelivery').click();
            jQuery('#payment-buttons-container .button')[0].click()
        })
    } },

    submitVisa: { value: function() {
        browser.execute(function() {
            jQuery('#authorizenet_cc_type')[0].setValue('VI');
            jQuery('#authorizenet_cc_number')[0].setValue('4111111111111111');
            jQuery('#authorizenet_expiration')[0].setValue(1);
            jQuery('#authorizenet_expiration_yr')[0].setValue(2020);
            jQuery('#authorizenet_cc_cid')[0].setValue('123');
            jQuery('#payment-buttons-container .button')[0].click()
        })
    } },

    submitMasterCard: { value: function() {
        browser.execute(function() {
            jQuery('#authorizenet_cc_type')[0].setValue('MC');
            jQuery('#authorizenet_cc_number')[0].setValue('5474151752505476');
            jQuery('#authorizenet_expiration')[0].setValue(8);
            jQuery('#authorizenet_expiration_yr')[0].setValue(2019);
            jQuery('#authorizenet_cc_cid')[0].setValue('158');
            jQuery('#payment-buttons-container .button')[0].click()
        })
    } },

    paymentContinue: { value: function() {
        browser.execute(function() {
            jQuery('#payment-buttons-container .button')[0].click()
        })
    } },

    clickPlaceOrder: { value: function() {
        browser.execute(function() {
            jQuery("button[title='Place Order']")[0].click()
        })
    } }


});

module.exports = checkout;