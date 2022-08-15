function sumMix(x){
return x.reduce((s, v) => s + +v, 0);
}

console.log(sumMix([9, 3, '7', '3'])); //22
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])); //42
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])); //41 

//or
function sumMix(x){
	return x.map(a => +a).reduce((a, b) => a + b);
 }