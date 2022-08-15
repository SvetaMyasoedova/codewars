function duplicateCount(text) {
  if (text.length === 0) return 0;
  let count = {};
  let str = text.toLowerCase();
  let arr = str.split("");
  let newArr = [];

  arr.forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });

  for (let key in count) {
    if (count[key] > 1) {
      newArr.push(key);
    }
  }
  return newArr.length;
}

console.log(duplicateCount("")); //0
console.log(duplicateCount("aabbcde")); //2
console.log(duplicateCount("aabBcde")); //2, should ignore case
console.log(duplicateCount("Indivisibilities")); //2
console.log(duplicateCount("Indivisibility")); //1

//Best Practices
function duplicateCount(text){
	return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
 }