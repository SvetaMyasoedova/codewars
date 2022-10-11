function duplicateEncode(word) {
  let result = "";
  let arr = word.toLowerCase().split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr.lastIndexOf(arr[i]) != arr.indexOf(arr[i])) {
      result += ")";
    } else {
      result += "(";
    }
  }
  return result;
}

console.log(duplicateEncode("din")); //"((("
console.log(duplicateEncode("recede")); //"()()()"
console.log(duplicateEncode("Success")); //")())())"
console.log(duplicateEncode("(( @")); //"))(("
