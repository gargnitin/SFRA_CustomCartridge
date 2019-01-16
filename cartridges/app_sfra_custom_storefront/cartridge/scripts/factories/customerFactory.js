'use strict';

module.exports = {
	getCustomer : function(){
		var CustomerManagerModel = require('*/cartridge/models/customerManager');
		var customerManagerModel = new CustomerManagerModel();
		var apiCustomer = customerManagerModel.customer;
		
		var CustomerModel = require('*/cartridge/models/customer');
		var customerObj = Object.create(null);
		var customerObj = new CustomerModel(customerObj, apiCustomer);
		
		return customerObj;
	}
}

