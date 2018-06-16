'use strict';

var server = require('server');
var cache = require('*/cartridge/scripts/middleware/cache');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
//var userLoggedIn = require('*/cartridge/scripts/middleware/userLoggedIn');

var page = module.superModule;
server.extend(page);


server.append('Show', function (req, res, next) {
	//server.middleware.https();
	//server.middleware.http();
	//userLoggedIn.validateLoggedIn();
	//session.custom.name = 'nitin garg';
	//var aaa = request;
	//https://github.com/gargnitin/SFRA_CustomCartridge.git
	
	var viewData = res.getViewData();
	viewData.name = "this is test string from mac"; 
	viewData.feature = "sfra append feature";
	res.setViewData(viewData);
	 
	var ree = res;
	var aa = req;
	res.render('/home/homePage1',{
		param1: 'Nitin',
		param2 : 'Garg'
	});
   
	next();
});


/*
server.append('Show', function (req, res, next) {
	 var viewData = res.getViewData();
	 viewData.name = "this is test string"; 
	 viewData.feature = "sfra append feature";
	 res.setViewData(viewData);
	 
	res.render('/home/homePage1');
    next();
});
*/

/*
server.replace('Show', consentTracking.consent, cache.applyDefaultCache, function (req, res, next) {
	 var viewData = res.getViewData();
	 viewData.name = "this is test string"; 
	 viewData.feature = "sfra append feature";
	 res.setViewData(viewData);
	 
	 res.render('/home/homePage2');
	 next();
});*/


server.get('Display', function(req, res, next){
	 res.render('/home/homePage1');
	 next();
	
});

module.exports = server.exports();