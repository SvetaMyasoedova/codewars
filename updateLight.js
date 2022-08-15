function updateLight(current) {
  
	switch (current) {
		case 'green': return "yellow"
		case 'yellow': return "red"
		case 'red': return "green"
		default: return 'oops';
  }
 
 }

console.log(updateLight("green")); //"yellow"
console.log(updateLight("yellow")); //"red"
console.log(updateLight("red")); //"green"

//Best Practices
function updateLight(current) {
  
	return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
 
 }
