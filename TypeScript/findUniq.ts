//There is an array of strings. All strings contains similar letters except one. Try to find it!

function findUniq(arr: string[]): string {
  const arrStr: string[][] = [];
  const uniqLetters: string[][] = [];
  for (let i = 0; i < arr.length; i++) {
    arrStr.push(arr[i].toLowerCase().trim().split("").sort());
  }
  for (let i = 0; i < arrStr.length; i++) {
    uniqLetters.push(Array.from(new Set(arrStr[i])));
  }

  const uniqString: string[] = uniqLetters.map((value) => value.join(""));
  
  let uniq: string = uniqString
    .filter((el) => uniqString.indexOf(el) === uniqString.lastIndexOf(el))
    .join("");

  let index: number = uniqString.indexOf(uniq);

  return arr[index];
}

console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"])); //'BbBb'
console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"])); //'foo'
console.log(findUniq(["silvia", "vasili", "victor"])); //'victor'
console.log(
  findUniq(["Tom Marvolo Riddle", "I am Lord Voldemort", "Harry Potter"])
); //'Harry Potter'
console.log(findUniq(["    ", "a", " "])); //'a'

//clever
function findUniq_2(arr: string[]): string {
	let newArr = arr.map(a => [...new Set(a.toLowerCase())].sort().join(''));
	return arr.find((str, i) => newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i]))!;
 }
