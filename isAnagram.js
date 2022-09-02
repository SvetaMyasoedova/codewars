function isAnagram(test, original) {
  let testLower = test.toLowerCase().split("").sort().join("");
  let originalLower = original.toLowerCase().split("").sort().join("");
  return testLower == originalLower;
}

console.log(isAnagram("foefet", "toffee")); //true,
console.log(isAnagram("dumble", "bumble")); //false,
