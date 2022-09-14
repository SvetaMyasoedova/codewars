function getMiddle(str) {
  if (str.length % 2 == 0) {
    return `${str[str.length / 2 - 1]}${str[str.length / 2]}`;
  } else {
    return str[Math.round(str.length / 2) - 1];
  }
}

console.log(getMiddle("test")); //"es"
console.log(getMiddle("testing")); //"t"
console.log(getMiddle("middle")); //"dd"
console.log(getMiddle("A")); //"A"
