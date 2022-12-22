// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
// The function parts_sums will take as parameter a list ls and return a list of the sums of its parts as defined above.

function partsSums(ls: number[]): number[] {
  if (ls.length === 0) return [0];
  let sum: number = ls.reduce((acc, rec) => acc + rec);
  const arrOfResult: number[] = [sum];
  for (let num of ls) {
    arrOfResult.push(arrOfResult[arrOfResult.length - 1] - num);
  }

  return arrOfResult;
}

//console.log(partsSums([])); //[0]
console.log(partsSums([0, 1, 3, 6, 10])); //[20, 20, 19, 16, 10, 0]

//clever
function partsSums_2(ls: number[]): number[] {
  const sum: number[] = new Array(ls.length + 1);
  sum[ls.length] = 0;
  
  ls.reduceRight((a, c, i) => {
    let nA: number = a + c;
    sum[i] = nA;
    return nA;
  }, 0)
  
  return sum;
}

