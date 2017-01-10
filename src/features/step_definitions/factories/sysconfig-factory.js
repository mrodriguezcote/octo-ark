var magentoApi = require('./api');
var soap = require('soap');
var db = require('../../support/db-connection');
var Q = require('q');
var _ = require('lodash');
var api = magentoApi();

module.exports = {

		editSysConfig: function() {

		return Q.Promise(function(resolve, reject) {
			api.getClientSession().then(function(client) {
				client.shoppingCartCreate({
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
	}

}