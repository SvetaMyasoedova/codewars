function sortArray(array) {
  if (array.length == 0) return [];
  let odds = [];
  let evens = [];
  let sorted = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evens.push(array[i]);
    } else {
      odds.push(array[i]);
    }
  }
  odds.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
      sorted.push(evens.shift());
    } else {
      sorted.push(odds.shift());
    }
  }
  return sorted;
}

//best practices
function sortArr(array) {
	const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
	return array.map((x) => x % 2 ? odd.shift() : x);
 }

console.log(sortArray([5, 3, 2, 8, 1, 4])); //[1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])); //[1, 3, 5, 8, 0]
console.log(sortArray([])); //[]
