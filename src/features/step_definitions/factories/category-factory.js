var magentoApi = require('./api');
var soap = require('soap');
var db = require('../../support/db-connection');
var Q = require('q');
var _ = require('lodash');
var api = magentoApi();
var available_sort_by_array = ['price'];

module.exports = {

	buildCategoryDataArray: function() {
        return { 
            name: 'Test Category 1',
            is_active: 1,
            "available_sort_by": ["name"],
            //default_sort_by: 'name',
            description: 'Test category description',
            is_anchor: 1,
            url_key: 'test-cat1',
            include_in_menu: 1
        };
    },

    //DOESNT WORK, keep getting an 'available_sort_by is required' error
    createCategory: function() {

    	var catData = this.buildCategoryDataArray();   
    	console.log(catData["available_sort_by"]);

        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.catalogCategoryCreate({
                    sessionId: client.session,
                    parentId: 2, //parentId of 2 is the Default Category in mage
                    categoryData: catData
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

    deleteCategory: function(catId) {

    	if (catId == null) {
    		console.log('Category ID is required');
    		return;
    	}

    	console.log("Category ID: " + catId);

        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.catalogCategoryDelete({
                    sessionId: client.session,
                    categoryId: catId
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

    addProdToCategory: function(catId, prodSku) {

        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.catalogCategoryAssignProduct({
                    sessionId: client.session,
                    categoryId: catId,
                    product: prodSku
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

    removeProdFromCategory: function(catId, prodSku) {

        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.catalogCategoryRemoveProduct({
                    sessionId: client.session,
                    categoryId: catId,
                    product: prodSku
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

    //DOESN'T WORK
    updateCategory: function(catId, attribute, value) {
    	
    	var updateData = {};
    	updateData[attribute] = value;

    	return Q.Promise(function(resolve, reject) {
    		api.getClientSession().then(function(client) {
    			client.catalogCategoryUpdate({
    				sessionId: client.session,
    				categoryId: catId,
    				categoryData: updateData
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

    getCategoryAttributes: function() {

        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.catalogCategoryAttributeList({
                    sessionId:client.session
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

    getCategoryAttributeOptions: function(attribute) {

        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.catalogCategoryAttributeOptions({
                    sessionId:client.session,
                    attributeId: attribute
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

    getCategoryInfo: function(catId) {

        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.catalogCategoryInfo({
                    sessionId: client.session,
                    categoryId: catId
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