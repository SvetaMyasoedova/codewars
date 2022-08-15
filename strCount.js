function strCount(str, letter){  
	let count = 0;
	for(elem of str) {
		if(elem === letter) {
			++count
		}
	}
	return count
 }


console.log(strCount('Hello', 'o')) //1);
console.log(strCount('Hello', 'l')); // 2);
console.log(strCount('', 'z')); //0);

//clever
function strCount(str, letter){  
	return str.split('').filter(c => c == letter).length;
 }