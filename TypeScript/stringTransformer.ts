function stringTransformer(str: string): string {
  str = str.split(" ").reverse().join(" ");
  let newStr: string = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newStr = newStr + str[i].toLowerCase();
    } else {
      newStr = newStr + str[i].toUpperCase();
    }
  }

  return newStr;
}

console.log(stringTransformer("Example Input")); //'iNPUT eXAMPLE'
console.log(stringTransformer(" A b C d E f G ")); //' g F e D c B a '
