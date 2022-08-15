//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

function countPositivesSumNegatives(array) {
if(array == null) return [];

  let countOfPositives = 0;
  let sumOfNegatives =0;
  for(num of array) {
	if(num > 0) {
		countOfPositives++;
	}
	if(num < 0) {
		sumOfNegatives += num;
	}
  }
  let resultArr = [countOfPositives, sumOfNegatives];

  if(resultArr[0] ===0 && resultArr[1] === 0) return [];
  return resultArr
}


console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); //[10, -65]
console.log(countPositivesSumNegatives([0,0])); //[]

