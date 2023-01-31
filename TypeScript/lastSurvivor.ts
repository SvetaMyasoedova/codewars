//You are given a string of letters and an array of numbers.
//The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.

function lastSurvivor(letters: string, coords: number[]): string {
  if (coords.length === 0) {
    return letters;
  }
  const arr: string[] = letters.split("");

  while (coords.length >= 1 && letters.length > 1) {
    for (let letter of arr) {
      for (let num of coords) {
        arr.splice(coords[0], 1);
        console.log(arr);
        coords.splice(0, 1);
      }
    }
  }

  return arr.join();
}

// console.log(lastSurvivor("abc", [1, 1])); //"a");
// console.log(lastSurvivor("kbc", [0, 1])); //"b");
// console.log(lastSurvivor("c", [])); //'c'

console.log(
  lastSurvivor(
    "qexflplmuviafrlrhqillmujfjnlibr",
    [
      17, 17, 22, 19, 2, 12, 12, 12, 8, 12, 14, 11, 2, 17, 5, 4, 8, 10, 11, 4,
      2, 1, 8, 5, 0, 3, 2, 2, 1, 1,
    ]
  )
);
//"d"
