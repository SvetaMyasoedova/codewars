function wave(str) {
  

  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }

    let strArr = str.split("");
    strArr[i] = strArr[i].toUpperCase();
    result.push(strArr.join(""));
  }

  return result;
}

console.log(wave(" gap ")); //[" Gap ", " gAp ", " gaP "]
console.log(wave("hello")); //["Hello", "hEllo", "heLlo", "helLo", "hellO"];
