function sumCubes(n: number): number {
  let sum: number = 0;

  for (let i = 1; i <= n; i++) {
    let cube = Math.pow(i, 3);
    sum += cube;
  }

  return sum;
}

console.log(sumCubes(3)); //36))
console.log(sumCubes(4)); //100))
console.log(sumCubes(10)); //3025))
