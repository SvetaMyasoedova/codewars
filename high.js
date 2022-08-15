function high(x) {
  let wordsArr = x.split(" ");
  let maxScore = 0;
  let maxScoreWord = "";
  for (word of wordsArr) {
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
      let code = word.codePointAt(i) - 96;

      sum += code;
    }

    if (sum > maxScore) {
      maxScore = sum;
      maxScoreWord = word;
    }
  }

  return maxScoreWord;
}

console.log(high("man i need a taxi up to ubud")); //'taxi');
console.log(high("what time are we climbing up the volcano")); //'volcano');
console.log(high("take me to semynak")); //'semynak');

//Best Practices
function high(s) {
  let as = s
    .split(" ")
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(" ")[as.indexOf(Math.max(...as))];
}
