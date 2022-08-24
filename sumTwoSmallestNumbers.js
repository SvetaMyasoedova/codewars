function sumTwoSmallestNumbers(arrayOfNumbers) {
 let sorted = arrayOfNumbers.sort((a, b) => a-b)
 return sorted[0] + sorted[1]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); //13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); //6
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); //10
