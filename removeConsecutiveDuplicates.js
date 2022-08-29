function removeConsecutiveDuplicates(str) {
let newArr = str.split(" ");
let filtered = newArr.filter((el,i)=> el !== newArr[i+1]);
return filtered.join(' ')
}

console.log(
  removeConsecutiveDuplicates(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
); // 'alpha beta gamma delta alpha beta gamma delta'
