function squareDigits(num){
	let arrOfNumbers = num.toString().split('');
	let arrOfSquare = [];
	for(element of arrOfNumbers) {
		arrOfSquare.push(Math.pow(+element, 2))
	}
	let result = arrOfSquare.join("")
	return +result
 }
 
 console.log(squareDigits(3212)); //9414
 console.log(squareDigits(2112)); //4114
 console.log(squareDigits(0)); //0


//Best Practices
 function squareDigits(num){
	return +num.toString().split('').map(i => i*i).join('');
 }