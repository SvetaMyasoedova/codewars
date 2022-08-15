function squareSum(arr) {
  let result = 0;

  for (number of arr) {
    result += number ** 2;
  }
  return result;
}

console.log(squareSum([1, 2])); //5
console.log(squareSum([0, 3, 4, 5])); //50
console.log(squareSum([])); //0

//Best Practices
function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}
