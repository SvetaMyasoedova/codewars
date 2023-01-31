//Given a Divisor and a Bound , Find the largest integer N , Such That ,
//Conditions:
//N is divisible by divisor
//N is less than or equal to bound
//N is greater than 0.

function maxMultiple(divisor: number, bound: number): number {
  let N: number = 0;

  if (bound % divisor === 0) {
    N = bound;
  } else {
    while (!(bound % divisor === 0)) {
      bound--;
      N = bound;
    }
  }

  return N;
}

console.log(maxMultiple(7, 17)); //14
console.log(maxMultiple(10, 50)); //50
console.log(maxMultiple(37, 200)); //185


//clever
function maxMultiple_2(divisor: number, bound: number) {
	return bound - bound % divisor;
	}
