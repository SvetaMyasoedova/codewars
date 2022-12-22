function persistence(num: number): number {
  if (num < 10) return 0;
  let counter: number = 0;
  let resultOfMultiplication: number = 11;
  const arrOfDigit: number[] = String(num)
    .split("")
    .map((value) => Number(value));

  resultOfMultiplication = arrOfDigit.reduce((acc, rec) => acc * rec);
  counter += 1;
  while (resultOfMultiplication >= 10) {
    const newArr: number[] = String(resultOfMultiplication)
      .split("")
      .map((value) => Number(value));
    resultOfMultiplication = newArr.reduce((acc, rec) => acc * rec);
    counter += 1;
  }

  return counter;
}

console.log(persistence(39)); //3 //(because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
console.log(persistence(4)); //0
console.log(persistence(25)); //2
console.log(persistence(999)); //4


//Clever
function persistence_2(num: number): number {
  let count = 0
  while (num > 9) {
    num = String(num).split('').map(d => +d).reduce((prev, current) => prev *= current);
    count++;
  }
  return count;
}
