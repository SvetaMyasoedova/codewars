// For a given string s find the character c (or C) with longest consecutive repetition and return:
// [c, l]: [string, number]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

function longestRepetition(text: string): [string, number] {
  if (text.length === 0) return ["", 0];

  let count: number = 0;
  let maxCount: number = 0;
  let letter: string = "";
  for (let i = 0; i < text.length; i++) {
    if (i === 0) {
      count = 1;
      letter = text[i];
      continue;
    }
    if (text[i] === text[i - 1]) {
      count++;
    } else {
      if (maxCount < count) {
        maxCount = count;
        letter = text[i - 1];
       
      }
		count = 1;
    }
  }
  if (maxCount < count) {
    maxCount = count;
    letter = text[text.length - 1];
  }

  return [letter, maxCount];
}

console.log(longestRepetition("aaaabb")); //['a', 4]
console.log(longestRepetition("bbbaaabaaaa")); //['a', 4]
console.log(longestRepetition("cbdeuuu900")); //['u', 3]
console.log(longestRepetition("abbbbb")); //['b', 5]
console.log(longestRepetition("aabb")); //['a', 2]
console.log(longestRepetition("ba")); //['b', 1]
console.log(longestRepetition("")); //['', 0]
