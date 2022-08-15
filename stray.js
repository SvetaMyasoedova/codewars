function stray(arr) {
	const uniqNumber = arr.find(v => arr.indexOf(v) === arr.lastIndexOf(v))
	return uniqNumber;
}

console.log(stray([1, 1, 2])); //2
