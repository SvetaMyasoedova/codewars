function ends(str, ending){

	return str.endsWith(ending);


}

console.log(ends('abcde', 'cde')); //true
console.log(ends('abcde', 'abc')); //false