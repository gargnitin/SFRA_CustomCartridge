'use strict';

function getPrefix(gender){
	if(gender == "F"){
		return "Mrs";
	}
	else{
		return "Mr";
	}
}

module.exports = {
		getPrefix : getPrefix	
};