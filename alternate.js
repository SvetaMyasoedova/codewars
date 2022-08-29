function alternate(n, firstValue, secondValue) {
  let array = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      array.push(firstValue);
    } else {
      array.push(secondValue);
    }
  }
  return array;
}

console.log(alternate(5, true, false)); //[true, false, true, false, true]
