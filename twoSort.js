function twoSort(arr) {
  arr.sort();
  let firstValueArr = arr[0].split("");
  let result = [];
  for (let i = 0; i < firstValueArr.length; i++) {
    if (i == firstValueArr.length - 1) {
      result.push(firstValueArr[i]);
    } else {
      result.push(firstValueArr[i]);
      result.push("***");
    }
  }
  return result.join("");
}

console.log(
  twoSort([
    "turns",
    "out",
    "random",
    "test",
    "cases",
    "are",
    "easier",
    "than",
    "writing",
    "out",
    "basic",
    "ones",
  ])
);
//'a***r***e'


//clever
function twoSort(s) {
	s.sort();
	return s[0].split('').join('***');
 }