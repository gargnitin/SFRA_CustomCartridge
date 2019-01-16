'use strict';

function getCustomerProfileFromDB(){
	var customer = {
			firstName : 'Shafali',
			lastName : 'Agarwal',
			gender : 'F'
	};
	
	return customer;
}

function customerManager(){
	this.customer = getCustomerProfileFromDB();
}

module.exports = customerManager;