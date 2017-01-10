var magentoApi = require('./api');
var soap = require('soap');
var db = require('../../support/db-connection');
var Q = require('q');
var _ = require('lodash');
var api = magentoApi();

module.exports = {

    buildCreatable: function () {
        return {
            'email': 'joeuser@example.com',
            'firstname': 'joe',
            'lastname': 'user',
            'password': 'pass',
            'website_id': 1,
            'store_id': 1,
            'group_id': 0
        };
    },

    create: function(newCustomer) {
        var customer = this.buildCreatable();

        if (newCustomer != null) {
            console.log('Passed a new customer');
            customer = _.assign(customer, newCustomer);
        }

        //var api = magentoApi();

        return Q.Promise(function(resolve, reject) {
            api.getClient().then(function (client) {
                api.getSession().then(function (session) {
                    client.customerCustomerCreate({
                        sessionId: session,
                        customerData: customer
                    }, function (err, result) {
                        if (err) {
                            reject(err);
                            return;
                        }
                        resolve(customer);
                    });
                });
            });
        });
    },

    get: function(email) {
        // get a customer with provided email
        // return the db user row

        return Q.Promise(function(resolve, reject) {
            db.query('SELECT * FROM customer_entity WHERE email = ?', [email], function (err, rows, fields) {
                if (err) {
                    reject(err);
                    return;
                }

                if (rows.length) {
                    resolve(rows[0]);
                }

                resolve(null);
            });

        });

    },

    deleteCustomer: function(custId) {
        
        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.customerCustomerDelete({
                    sessionId: client.session,
                    customerId: custId
                }, function (err, result) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(result);
                });
            });
        });
    },

    getCustomerList: function() {

        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.customerCustomerList({
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

    getCustomerInfo: function(custId) {

        return Q.Promise(function(resolve, reject) {
            api.getClientSession().then(function(client) {
                client.customerCustomerInfo({
                    sessionId: client.session,
                    customerId: custId
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

};