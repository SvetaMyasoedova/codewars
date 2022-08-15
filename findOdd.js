function findOdd(A) {
  let count = {};
  A.forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });

  for (let key in count) {
    if (count[key] % 2 > 0) {
      return +key;
    }
  }
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));


