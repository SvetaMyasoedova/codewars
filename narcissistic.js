function narcissistic(number) {
	let arrOfNumbers = String(number).split("");
	let base = arrOfNumbers.length;
	let sum = 0;

	for (num of arrOfNumbers) {
		sum += Math.pow(+num, base)
	}

	return sum === number
}

console.log(narcissistic(7)); //true
console.log(narcissistic(371)); //true
console.log(narcissistic(1652)); //false

//or
function narcissistic( value ) {
	return ('' + value).split('').reduce(function(p, c){
	  return p + Math.pow(c, ('' + value).length)
	  }, 0) == value;
 }

 //or
 function narcissistic(value) {
	return value.toString()
					.split('')
					.map( (x,i,arr) => x ** arr.length)
					.reduce( (a,b)=> +a + +b) 
					 === value
 }
