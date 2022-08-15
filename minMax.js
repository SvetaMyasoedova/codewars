function minMax(arr) {
  let newArr = [];
  arr.sort((a, b) => a - b);

  newArr.push(arr[0]);
  newArr.push(arr[arr.length - 1]);
  return newArr;
}

console.log(minMax([1, 2, 3, 4, 5])); //[1, 5]
console.log(minMax([2334454, 5])); //[5, 2334454]
console.log(minMax([5])); //[5, 5]

//Best Practices
function minMax(arr){
	return [Math.min(...arr), Math.max(...arr)];
 }