'use strict';

var processInclude = require('./base/util');

$(document).ready(function () {
    console.log("hi this is console test from test cartridge");	
    processInclude(require('./customer/customer'));
});