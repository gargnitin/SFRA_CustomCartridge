'use strict';

function getEmployee(){
	var employee = {
			firstName : 'Shrot',
			lastName : 'Garg',
			company : 'n/a'
	};
	
	return employee;
}

function employee(req){
	this.employeeDetails = getEmployee();
	this.country = 'India'
}

module.exports = employee;