function accum(str) {
  let newArr = str.toUpperCase().split("");
  console.log(newArr);
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    let letter = newArr[i];
    let repeatLetter = newArr[i].toLocaleLowerCase().repeat(i)
    result.push(letter+repeatLetter);
    
  }
  return result.join('-')
  
}

console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"



//clever
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}