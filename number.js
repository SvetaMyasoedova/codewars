function number(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(`${i + 1}: ${array[i]}`);
  }
  return result;
}

console.log(number([])); //[]
console.log(number(["a", "b", "c"])); //["1: a", "2: b", "3: c"]


//Best Practices
function number(arr) {
  return arr.map((e, i) => `${++i}: ${e}`);
}
