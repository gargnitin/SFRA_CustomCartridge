'use strict';

var helpers = require('*/cartridge/scripts/helpers/customerHelpers');

module.exports = function (object, apicustomer) {
    Object.defineProperty(object, 'prefix', {
        enumerable: true,
        value: helpers.getPrefix(apicustomer.gender)
    })
};