function highAndLow(numbers) {
  let newArr = numbers.split(" ");
  newArr.sort((a, b) => b - a);
  return [newArr[0], newArr[newArr.length - 1]].join(" ");
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); //"42 -9"
console.log(highAndLow("1 2 3")); //"3 1"

//clever
function highAndLow(numbers){
	numbers = numbers.split(' ');
	return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
 }