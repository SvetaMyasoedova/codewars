//find the sum of all the integers between a and b and including them and return it. If the two numbers are equal return a or b.
//Note: a and b are not ordered!

function getSum(a, b) {
	if (a == b) return a; 
   if (a < b) {
      return a + getSum(a+1, b); 
   }else {
      return a + getSum(a-1,b); 
   }
}

console.log(getSum(0, -1)); //-1
console.log(getSum(0, 1)); //1
console.log(getSum(1, 3)); //6