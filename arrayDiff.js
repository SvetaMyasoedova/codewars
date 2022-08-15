function arrayDiff(a, b) {
  if (b.length === 0 || a.length === 0) return a;

  let newArr = [];
  for (num of a) {
    if (!b.includes(num)) newArr.push(num);
  }

  return newArr;
}

console.log(arrayDiff([1, 2], [1])); //[2],
console.log(arrayDiff([1, 2, 2], [1])); //[2,2],
console.log(arrayDiff([1, 2, 2], [])); //[1,2,2],
console.log(arrayDiff([1, 2, 3], [1, 2])); //[3],

//Best Practices
function array_diff(a, b) {
	return a.filter(e => !b.includes(e));
 }