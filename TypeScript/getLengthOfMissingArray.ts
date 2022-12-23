// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!
// You have to write a method, that return the length of the missing array.

function getLengthOfMissingArray(arrayOfArrays: any[]): number {
  if (arrayOfArrays.length === 0) return 0;
  const arrOfLength: number[] = arrayOfArrays.map((value) => value.length);
  if(arrOfLength.includes(0)) return 0;
  let result: number = 0;
  const sorted: number[] = arrOfLength.sort((a, b) => a-b);
  for (let i = 0; i <= sorted[sorted.length - 1]; i++) {
    if (!sorted.includes(i)) {
      result = i;
    }
  }
  return result;
}

// console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] )); //3
// console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] )); //2
// console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] )); //2
// console.log(getLengthOfMissingArray([ ])) //0

