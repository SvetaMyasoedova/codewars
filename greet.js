function greet (name, owner) {
	if(name === owner) {
		return 'Hello boss'
	} else return 'Hello guest'
 }

 console.log(greet('Daniel', 'Daniel'));//'Hello boss'
console.log(greet('Greg', 'Daniel')); //'Hello guest'

// Best Practices
function greet (name, owner) {
	return name === owner ? 'Hello boss' :  'Hello guest';
 }