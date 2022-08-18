function validatePIN (pin) {
	
	if((/^\d+$/g.test(pin))  && (pin.length ==4 || pin.length ==6) )    {
		return true
	} else return false
	
 }

 
console.log(validatePIN("1234")); //true
console.log(validatePIN("a234")); //false
console.log(validatePIN("-1.234")); //false
console.log(validatePIN("12.0")); //false

//Best Practices
function validatePIN(pin) {
	return /^(\d{4}|\d{6})$/.test(pin)
 }