function invert(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(-1 * +array[i]);
  }
  return newArr;
}

console.log(invert([1, -2, 3, -4, 5])); //[-1,2,-3,4,-5]
console.log(invert([])); //[]

//Best Practices
function invert(array) {
   return array.map(el => -el);
}