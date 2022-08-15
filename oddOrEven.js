function oddOrEven(array) {
	let sum = array.reduce((acc, num) => acc+num, 0)
	if(sum % 2 === 0) {
		return 'even'
	} else return 'odd'
}

console.log(oddOrEven([0])); //'even'
console.log(oddOrEven([1])); //'odd'
console.log(oddOrEven([])); //'even'
console.log(oddOrEven([0, 1, 5])); //'even'

//or
function oddOrEven(arr) {
	return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
 }