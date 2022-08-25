//Upto and including n, this function will return the sum of all multiples of 3 and 5.
function findSum(n) {
	let resultSum = 0;
	for(let i = 0; i <n+1; i++)
	if(i%3 ===0 || i%5 ===0) {
		resultSum += i;
	}
	return resultSum;
 }

console.log(findSum(5)); //8
console.log(findSum(10)); //33 //(3 + 5 + 6 + 9 + 10)