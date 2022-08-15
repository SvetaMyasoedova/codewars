function getPrize(guessScore, realScore) {
  guessArr = guessScore.split(":");
  realArr = realScore.split(":");

  if (guessArr[0] == realArr[0] && guessArr[1] == realArr[1]) return 2;

  if (
    (guessArr[0] > guessArr[1] && realArr[0] > realArr[1]) ||
    (guessArr[0] < guessArr[1] && realArr[0] < realArr[1]) ||
    (guessArr[0] == guessArr[1] && realArr[0] == realArr[1])
  ) {
    return 1;
  } else return 0;
}

console.log(getPrize("1:2", "1:2")); //2
console.log(getPrize("2:1", "5:0")); //1
console.log(getPrize("1:2", "0:5")); //1
console.log(getPrize("2:2", "5:5")); //1
console.log(getPrize("3:0", "2:2")); //0
