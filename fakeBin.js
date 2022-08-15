function fakeBin(x){
let arr = x.split("")
let sorted;
for(val of arr) {
	sorted = arr.map((val) => val>=5 ? val=1 : val=0)
	return sorted.join('')
}
return sorted.join('')
}
console.log(fakeBin('45385593107843568')); //'01011110001100111'

//Best Practices
function fakeBin(x) {
	return x.split('').map(n => n < 5 ? 0 : 1).join('');
}