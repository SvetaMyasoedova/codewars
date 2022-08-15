function positiveSum(arr) {
  let sum = 0;
  if (arr == []) return 0;
  for (num of arr) {
    if (num >= 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(positiveSum([1, 2, 3, 4, 5])); //15;
console.log(positiveSum([1, -2, 3, 4, 5])); //13
console.log(positiveSum([])); //0
