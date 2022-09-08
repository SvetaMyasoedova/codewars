function sumDigits(number) {
  let newStr = number.toString();
  let newArr = newStr.split("");
  if (newArr[0] == "-") {
    newArr.shift();
  }

  return newArr.reduce((acc, el) => {
    return acc + +el;
  }, 0);
}

console.log(sumDigits(10)); //1
console.log(sumDigits(99)); //18
console.log(sumDigits(-32)); //5
