//The function must return an ordered list containing the indexes of all capital letters in the string.
function capitals(word) {
  let arrOfIndex = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == word[i]) {
      arrOfIndex.push(i);
    }
  }
  return arrOfIndex;
}

console.log(capitals("CodEWaRs")); //[0,3,4,6]
