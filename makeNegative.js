function makeNegative(num) {
	if(num < 0 || num === 0) {
		return num
	} else {
		return -num;
	}
 }

console.log(makeNegative(1)) ;    // return -1
console.log(makeNegative(-5));   // return -5
console.log(makeNegative(0));    // return 0

//or
function makeNegative(num) {
	return num < 0 ? num : -num;
 }