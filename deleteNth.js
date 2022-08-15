function deleteNth(arr, n) {
	let newArr =[];
	let count = {};
	arr.forEach(function(s) {
		count[s] ? count[s]++ : count[s] = 1;
		if(count[s] <= n) {
			newArr.push(s);
		 }
	});
return newArr;
}
console.log(deleteNth([20, 37, 20, 21], 1)); //[20,37,21]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); //[1, 1, 3, 3, 7, 2, 2, 2]

//Best Practices
function deleteNth(arr,x) {
	let cache = {};
	return arr.filter(function(n) {
	  cache[n] = (cache[n]||0) + 1;
	  return cache[n] <= x;
	});
 }