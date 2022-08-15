function check(array, value) {
	return array.includes(value)
 }

console.log(check([66, 101], 66)); //true);
console.log(check([101, 45, 75, 105, 99, 107], 107)); //true);
console.log(check(['t', 'e', 's', 't'], 'e')); //true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat')); //false);