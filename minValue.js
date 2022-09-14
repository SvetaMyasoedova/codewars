function minValue(arr){
	let uniqueArray = Array.from(new Set(arr))
	return +(uniqueArray.sort((a, b) => a-b).join(""))
 }


console.log(minValue([1, 3, 1])); //13
console.log(minValue([4, 7, 5, 7])); //457
console.log(minValue([4, 8, 1, 4])); //148
console.log(minValue([5, 7, 9, 5, 7])); //579
console.log(minValue([6, 7, 8, 7, 6, 6])); //678

//Best Practices
function minValue(values){
	let arr = Array.from(new Set(values))
	return parseInt(arr.sort().join(''))
 }