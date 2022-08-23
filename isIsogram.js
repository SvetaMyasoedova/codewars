function isIsogram(str) {
  if (str.length === 0) return true;

  let newStr = str.toUpperCase();
  let newArr = [];

  for (letter of newStr) {
    if (!newArr.includes(letter)) {
      newArr.push(letter);
    }
  }
  return newArr.length === newStr.length;
}

console.log(isIsogram("Dermatoglyphics")); //true
console.log(isIsogram("isogram")); //true
console.log(isIsogram("aba")); //false
console.log(isIsogram("moOse")); //false
console.log(isIsogram("isIsogram")); //false
console.log(isIsogram("")); //true
