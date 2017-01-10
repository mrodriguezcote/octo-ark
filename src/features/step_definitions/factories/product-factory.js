var magentoApi = require('./api');
var soap = require('soap');
var db = require('../../support/db-connection');
var Q = require('q');
var _ = require('lodash');
var api = magentoApi();

module.exports = {

    buildProductDataArray: function() {
        return { 
            categories: { item: 58 },
            websites:{ item: 1 },
            name: 'BA Test Product 12',
            description: 'BA Test Product - Description',
            short_description: 'BA Test Product - Short description',
            // websites: ['1'], //doesnt work
            // categories: ['58'], // doesnt work
            weight: '1',
            status: '1',
            url_key: 'batest-simple12',
            visibility: '4',
            price: '5.00',
            tax_class_id: 'None',
            stock_data: {
                qty: '100',
                is_in_stock: 1
            }
        };
    },

    buildProductCustomAttributeReturnArray: function(code) {
        return {          
            'additional_attributes': {
                'key': code
            }
        };
    },

    buildProductCustomAttributeUpdateArray: function(code, value) {
        var test = {
            "name":"Product name new1",
            "additional_attributes":{
                "single_data": { 
                    "item": {
                        "key":"test_attribute",
                        "value":233
                    }
                }
            }
        };
        console.log(test.additional_attributes);
        return test;
    },

	getSimpleProduct: function() {
		
		return Q.Promise(function (resolve, reject) {
			api.getClientSession().then(function(client) {
				client.catalogProductInfo({
                    sessionId: client.session,
                    productId: "899" //product sku
                }, function (err, result) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    console.log(result.info.options_container)
                    resolve(result);
                });
			});
		});
	},

    createSimpleProduct: function() {
        
        var prod = this.buildProductDataArray();

        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.catalogProductCreate({
                    sessionId: client.session,
                    type: "simple",
                    set: "4",
                    sku: "batest-simple12",
                    productData: prod
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

    getProductAttributeSets: function() {

        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.catalogProductAttributeSetList({
                    sessionId: client.session
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

    getProductStock: function(prodSku) {
        //handles wanting just 1 product's stock, instead of multiple
        //prodSku can be either a sku or id
        if (prodSku == null) {
            console.log("prodSku is not defined");
            return;
        } else {
            prods = [prodSku];
        }

        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.catalogInventoryStockItemList({
                    sessionId: client.session,
                    products: prods
                }, function(err, result) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    console.log(result.result.item.qty);
                    prod = result["result"]["item"]["qty"]["$value"];
                    resolve(prod);
                });
            });
        });
    },

    getProductsStock: function(prodSkus) {
        //handles multiple products stock requests
        //prodSku can be either skus or ids
        if (prodSkus == null) {
            console.log("prodSkus is not defined");
            return;
        }

        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.catalogInventoryStockItemList({
                    sessionId: client.session,
                    products: prodSkus
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

    updateProductStock: function(prodSku, updateQty, inStockFlag) {
        //prodSku = product SKU
        //updateQty (string) = amount Qty is to be updated too 
        //inStockFlag = 0 (out of stock), 1 (in stock)

        if (prodSku == null || updateQty == null || inStockFlag == null) {
            console.log("Not all arguments are defined");
            return;
        } else {
            stockData = {
                'qty': updateQty,
                'is_in_stock' : inStockFlag
            }
        }
        
        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.catalogInventoryStockItemUpdate({
                    sessionId: client.session,
                    product: prodSku,
                    data: stockData
                }, function(err, result) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(result);
                })
            });
        });
    },

    updateProductAttribute: function(productSku, attribute, value) {
        
        var updateData = {};
        updateData[attribute] = value;

        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.catalogProductUpdate({
                    sessionId: client.session,
                    product: productSku,
                    productData: updateData
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

    getCatalogProductAttributeList: function(setId) {
        
        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.catalogProductAttributeList({
                    sessionId: client.session,
                    setId: 4
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

    getProductCustomAttributeArray: function(productSku, attributeCode) {
        var attributeData = this.buildProductCustomAttributeReturnArray(attributeCode);

        return Q.Promise(function (resolve, reject) {
            api.getClientSession().then(function(client) {
                client.catalogProductInfo({
                    sessionId: client.session,
                    productId: productSku, //product sku
                    attributes: attributeData
                }, function (err, result) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    //console.log(result.info.options_container)
                    resolve(result);
                });
            });
        });
    },

    updateCustomProductAttribute: function(productSku, attributeCode, optionId) {

        if (productSku == null || attributeCode == null || optionId == null) {
            console.log("Not all arguments are defined");
            return;
        } else {
            var attributeData = this.buildProductCustomAttributeUpdateArray(attributeCode, optionId);
        }

        console.log(attributeData);

        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.catalogProductUpdate({
                    sessionId: client.session,
                    product: productSku,
                    productData: attributeData
                }, function(err, result) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(result);
                });
            });
        });
    }

}