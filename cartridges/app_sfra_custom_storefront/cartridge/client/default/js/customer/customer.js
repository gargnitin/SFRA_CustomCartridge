'use strict';

var formValidation = require('../base/components/formValidation');

module.exports = {
	registerCustomer : function(){
        $('form.customer').submit(function (e) {
        	console.log("register customer");
            var form = $(this);
            e.preventDefault();
            var url = form.attr('action');
            form.spinner().start();
            //$('form.customer').trigger('login:submit', e);
            $.ajax({
                url: url,
                type: 'post',
                dataType: 'json',
                data: form.serialize(),
                success: function (data) {
                	console.log("Success");
                    form.spinner().stop();
                    if (!data.success) {
                        formValidation(form, data);
                        console.log(data);
                        //$('form.customer').trigger('login:error', data);
                    } else {
                        //$('form.login').trigger('login:success', data);
                    	console.log(data);
                    	//location.href = data.redirectUrl;
                    }
                },
                error: function (data) {
                	console.log("error");
                    if (data.responseJSON.redirectUrl) {
                        window.location.href = data.responseJSON.redirectUrl;
                    } else {
                    	console.log(data);
                        //$('form.login').trigger('login:error', data);
                        form.spinner().stop();
                    }
                }
            });
            return false;
        });
	}
};