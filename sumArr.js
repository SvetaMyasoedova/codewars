function sumArr (arrOfNumbers) {

	return arrOfNumbers.length === 0 ? 0 : arrOfNumbers.reduce((a,b) => a+b);
	
  
}


console.log(sumArr([])); //0
console.log(sumArr([1, 5.2, 4, 0, -1])); //9.2
console.log(sumArr([-2.398])); //-2.398

//or
function sum(numbers) {
	return numbers.reduce((a, b) => a + b, 0);
 }