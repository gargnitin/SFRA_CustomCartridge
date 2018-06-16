'use strict';

var processInclude = require('./base/util');

$(document).ready(function () {
    console.log("hi this is console test from mac");	
	processInclude(require('./base/product/quickView'));
});