$(function(){



	$.validator.addMethod('strongPassword', function(value, element) {
    return this.optional(element) 
      || value.length >= 6
      &&/[_\-!\"@;,.:]/.test(value)
      && /\d/.test(value)
      && /[a-z]/i.test(value);
  }, 'Your password must be at least 6 characters long and contain at least one number and one char and special char\'.')




	$('#register').validate({
		rules:{ 
			email:{
				required:true,
				email:true
			},
			password:{
				required:true,
				strongPassword: true
			}
		},
		messages:{
			email:{
				required:"Please enter valid email address"
			},
			password:{
				
			}
		}


	});

});
