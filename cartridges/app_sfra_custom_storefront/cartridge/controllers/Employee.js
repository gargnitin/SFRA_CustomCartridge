'use strict';

var server = require('server');

server.get('Show', function(req, res, next){	 
	 //var AccountModel = require('*/cartridge/models/account');
	 //var accountModel = new AccountModel(req.currentCustomer);
	 
	// var firstName = accountModel.profile.firstName;
	 //var fullName = accountModel.fullName;
	 
	 var EmployeeModel = require('*/cartridge/models/employee');
	 var employeeObj = new EmployeeModel(req);
	 	 
	 var employeeForm = server.forms.getForm('employee');
	 employeeForm.clear();
	 employeeForm.customer.firstname.value = employeeObj.employeeDetails.firstName;
	 employeeForm.customer.lastname.value = employeeObj.employeeDetails.lastName;
	 employeeForm.customer.company.value = employeeObj.employeeDetails.company;
	 employeeForm.customer.country.value = employeeObj.country;
	 
	 res.render('employeedetails', 
		 {
	 		employeeForm : employeeForm
		 });
	 next();
	
});

server.post('Save', function(req, res, next){
	 //var EmployeeModel = require('*/cartridge/models/employee');
	 //var employeeObj = new EmployeeModel();
	 
	 var employeeForm = server.forms.getForm('employee');
	 
	 var result = {
        firstName: employeeForm.customer.firstname.value,
        lastName: employeeForm.customer.lastname.value,
        company: employeeForm.customer.company.value,
        country: employeeForm.customer.country.value
    };
	 
	 //employeeForm.clear();
	 
	 res.render('displayemployee', 
		 {
	 		employeeDetails : result
		 });
	 next();
});
module.exports = server.exports();