function validatePIN (pin) {
	if(isNaN(Number(pin))) return false;
	
	if(pin.split("").includes("." )) return false;
	if(pin.split("").includes("-" )) return false;
	if(pin.split("").includes(" ")) return false;
	
	if(pin.length ==4 || pin.length ==6)  {
		return true
	} else return false
	
 }

 console.log(isNaN(Number('2e9608')))



//console.log(validatePIN("1234"));
//console.log(validatePIN("12345"));
//console.log(validatePIN("a234"));
//console.log(validatePIN("-1.234"));
console.log(validatePIN("123  "));
