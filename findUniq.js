function findUniq(arr) {
	const uniqNumber = arr.find(v => arr.indexOf(v) === arr.lastIndexOf(v))
	return uniqNumber;
}




console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); //2
console.log(findUniq([0, 1, 0])); //1
console.log(findUniq([ 3, 10, 3, 3, 3 ])); //10
