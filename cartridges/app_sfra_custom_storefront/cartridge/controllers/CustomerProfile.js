'use strict';

var server = require('server');

server.get('Show', function(req, res, next){

	//var testModel = require('*/cartridge/models/test');
	//var testObj = new testModel();
	//var nick = testModel.getNickName();
	//var name = testModel.getName();
	
	//this.on('route:BeforeComplete', listener2);
	
	// Model Pattern
	//var CustomerModel = require('*/cartridge/models/customer');
	//var customerModel = new CustomerModel();
	//CustomerProfileForm.customer.firstname.value = customerModel.name;

	//CustomerProfileForm.customer.firstname.value = CustomerModel.getNickName();
	//CustomerProfileForm.customer.firstname.value = CustomerModel.getSirName(); //customerModel.name;

	//Factory pattern
	var CustomerFactory = require('*/cartridge/scripts/factories/customerFactory');
	var customer = CustomerFactory.getCustomer();	
	
	var CustomerProfileForm = server.forms.getForm('customer');
	CustomerProfileForm.clear();
	CustomerProfileForm.customer.firstname.value = customer.prefix + " " + customer.firstName;
	
	// Hooks
	var HookMgr = require('dw/system/HookMgr');
	var age = HookMgr.callHook('app.calculateAge', 'getAge', 4);
	

	res.render('customerProfile', {
		CustomerProfileForm:CustomerProfileForm 
		}
	);
	
	/*res.json({
		name : 'test name',
		success : false
	});*/
	
	next();
});

server.post('Save', server.middleware.https, server.middleware.post, function(req, res, next){
	 this.on('route:BeforeComplete', listener3);
	 this.on('route:Complete', listener4);
	 //this.removeListener('route:BeforeComplete', listener1);
	 
	//var abc = req;
	var URLUtils = require('dw/web/URLUtils');
	var formErrors = require('*/cartridge/scripts/formErrors');

	var CustomerProfileForm = server.forms.getForm('customer');
	
	 var nickname = CustomerProfileForm.customer.firstname.value;
	 var viewData = res.getViewData();
	 
	 if(nickname == "nitin"){
		 CustomerProfileForm.customer.firstname.valid = false;
		 CustomerProfileForm.valid = false;
		 CustomerProfileForm.customer.firstname.error = "name is incorrect";
	 }
	 
	 if(CustomerProfileForm.valid){
		 viewData.nickname = nickname; 
		 res.setViewData(viewData);
		 
		 /*res.render('displayCustomer', {
			 firstName : nickname
		 })*/
		 res.json({
			 success: true,
             redirectUrl: URLUtils.url('Account-Show').toString() 
		 });
	 }
	 else{
		 res.json({
			 success: false,
			 fields: formErrors.getFormErrors(CustomerProfileForm)
		 });
	 }
	 next();
})


function listener1(req, res){
	var CustomerProfileForm = server.forms.getForm('customer');
	var nickname = CustomerProfileForm.customer.firstname.value;
	if(nickname == "nitin"){
		var data = res.getViewData();
		data.isValid = false;
		res.setViewData(data);
	}	
}

function listener2(req, res){
	var data = res.getViewData();
	var name = data.nickname;	
}

function listener3(req, res){
	var data = res.getViewData();
}

function listener4(req, res){
	var data = res.getViewData();
}
module.exports = server.exports();

// Register start and step listener events
server.getRoute('Save').on('route:Start', listener1);
server.getRoute('Save').on('route:Step', listener2);