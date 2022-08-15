function spinWords(string) {
  let arr = string.split(" ");
  let len;
  let tempArr = [];
  let rev;
  for (a of arr) {
    len = a.length;
    if (len >= 5) {
      rev = a.split("").reverse().join("");
      tempArr.push(rev);
    } else {
      tempArr.push(a);
    }
  }
  let newStr = tempArr.join(" ")
  return console.log(newStr);

}

spinWords("Welcome");
spinWords("Hey fellow warriors");
