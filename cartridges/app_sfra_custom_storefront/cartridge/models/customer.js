'use strict';
var decorators = require('*/cartridge/scripts/decorators/index');

/*function getName(){
	return "Shafali";
}

function getNickName(){
	return "Dr Shafali Agarwal";
}*/

function customer(customerObj, apiCustomer){
	//this.name = getName();

	decorators.name(customerObj, apiCustomer);
	//decorators.prefix(customerObj, apiCustomer);
	
	return customerObj;
}

//customer.getNickName = getNickName;
module.exports = customer;

//module.exports.getNickName = getNickName;

/*
module.exports = {
		getSirName : function(){
			return getName() + "garg";
		}	
	}
*/
