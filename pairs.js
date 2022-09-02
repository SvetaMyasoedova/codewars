function pairs(str) {
  if (str.length == 0) return [];

  if (str.length % 2 == 0) {
    return str.match(/.{2}/g);
  }

  if (str.length % 2 != 0) {
    let newStr = str + "_";
    return (newArr = newStr.match(/.{2}/g));
  }
}

console.log(pairs("abcdef")); //["ab", "cd", "ef"]
console.log(pairs("abcdefg")); //["ab", "cd", "ef", "g_"]
console.log(pairs("")); //[]
