'use strict';

module.exports = function (object, apicustomer) {
    Object.defineProperty(object, 'firstName', {
        enumerable: true,
        value: apicustomer.firstName
    });
    
    Object.defineProperty(object, 'lastName', {
        enumerable: true,
        value: apicustomer.lastName
    })
};