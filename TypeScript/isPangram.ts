//A pangram is a sentence that contains every single letter of the alphabet at least once.
//For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
//because it uses the letters A-Z at least once (case is irrelevant).

function isPangram(phrase: string): boolean {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const arrOfLetters: string[] = phrase
    .replace(/[^a-z]+/gi, "")
    .toLowerCase()
    .split("");

  const uniqueArr: string[] = arrOfLetters.filter(
    (el, ind) => ind === arrOfLetters.indexOf(el)
  );

  const sortedString: string = uniqueArr.sort().join("");

  if (sortedString !== alphabet) {
    return false;
  }
  return true;
}

console.log(isPangram("How quickly daft jumping zebras vex.")); //true
//console.log(isPangram("This is not a pangram.")); //false

//Clever
export const isPangram_2 = (phrase: string): boolean => new Set(phrase.toLowerCase().match(/[a-z]/g)).size === 26;