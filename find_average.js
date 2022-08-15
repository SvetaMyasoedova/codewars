function find_average(array) {
  if (array.length === 0) return 0;
  let sumOfNumbers = array.reduce((sum, num) => sum + num, 0);

  return sumOfNumbers / array.length;
}

console.log(find_average([1, 1, 1])); //1
console.log(find_average([1, 2, 3])); //2
console.log(find_average([1, 2, 3, 4])); //2.5
console.log(find_average([])); //0

//Best Practices
function find_average(array) {
  return array.length === 0
    ? 0
    : array.reduce((sum, num) => sum + num, 0) / array.length;
}
