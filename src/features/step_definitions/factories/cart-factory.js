var magentoApi = require('./api');
var soap = require('soap');
var db = require('../../support/db-connection');
var Q = require('q');
var _ = require('lodash');
var api = magentoApi();

module.exports = {
	
    buildProductArray: function() {
        return { 
            'product_id': '900',
            'qty': 1
        };
    },

    buildCustomerAddressArray: function() {
    	return {
    		'mode': 'billing',
    		'firstname': 'Luke',
    		'lastname': 'Fitzgerald',
    		'street': '145 Williman',
    		'city': 'Charleston',
    		'region': 'South Carolina',
    		'postcode': '29403',
    		'country_id': 'id',
    		'telephone': '8779442583'
    	};
    },

    buildCustomerArray: function() {
        return {
            "mode":"customer",
            "customer_id": 143,
            "firstname":"Luke",
            "lastname":"Fitzgerald",
            "email": "luke.fitzgerald@blueacorn.com",
            "password": "pass4luke",
            "confirmation": "true",
            "website_id": 1,
            "group_id": 1,
            "store_id": 1
        };
    },

	createEmptyCart: function() {

		return Q.Promise(function(resolve, reject) {
			api.getClientSession().then(function(client) {
				client.shoppingCartCreate({
					sessionId: client.session,
                    storeId: "1"
				}, function(err, result) {
					if (err) {
						reject(err);
						return;
					}
					resolve(result);
				});
			});
		});
	},

    addProductToCartQuote: function(cartQuoteId) {
    	var prod = this.buildProductArray();    	
        var prodArray = [prod];

        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.shoppingCartProductAdd({
                	sessionId: client.session,
                	quoteId: cartQuoteId,
                	products: prodArray
                }, function(err, result) {
                	if (err) {
                		reject(err);
                		return;
                	}
                	resolve(result);
                });
            });
        });
    },

    setCartCustomer: function(cartQuoteId) {
    	var customerData = this.buildCustomerArray();
    	console.log(customerData);

    	return Q.Promise(function(resolve, reject) {
    		api.getClientSession().then(function(client) {
    			client.shoppingCartCustomerSet({
    				sessionId: client.session,
    				quoteId: cartQuoteId,
    				customer: customerData,
                    store: 1
    			}, function(err, result) {
    				if (err) {
    					reject(err);
    					return;
    				}
    				resolve(result);
    			});
    		});
    	});
    },

    //doesnt work yet
    moveQuoteToCustomerQuote: function() {
    	var prod = this.buildProductArray();
        var prodArray = [prod];

    	return Q.Promise(function(resolve, reject) {
    		api.getClientSession().then(function(client) {
    			client.shoppingCartProductMoveToCustomerQuote({
    				sessionId: client.session,
    				quoteId: 741,
    				products: prodArray
    			}, function(err, result) {
    				if (err) {
    					reject(err);
    					return;
    				}
    				resolve(result);
    			});
    		});
    	});
    },

    //doesnt work yet
    setCartAddresses: function(cartQuoteId) {
    	var customerAddress = this.buildCustomerAddressArray();
    	console.log(customerAddress);
    	array1 = [customerAddress];

    	return Q.promise(function(resolve, reject) {
    		api.getClientSession().then(function(client) {
    			client.shoppingCartCustomerAddresses({
    				sessionId: client.session,
    				quoteId: cartQuoteId,
    				customerAddressData: array1
    			}, function(err, result) {
    				if (err) {
    					reject(err);
    					return;
    				}
    				resolve(result);
    			});
    		});
    	});
    },

    getCartInfo: function(cartQuoteId) {

        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.shoppingCartInfo({
                    sessionId: client.session,
                    quoteId: cartQuoteId,
                }, function(err, result) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(result);
                });
            });
        });
    },

}