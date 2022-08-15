function countBy(x, n) {
  let arr = [];
  
	for(i = 1; i<n+1; i++) {
		arr.push(i*x)
	}
  return arr;
}

console.log(countBy(1, 10)); //[1,2,3,4,5,6,7,8,9,10],
console.log(countBy(2, 5)); //[2,4,6,8,10]
