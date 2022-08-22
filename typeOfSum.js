function typeOfSum(a, b) {
return typeof(a+b)

}

console.log(typeOfSum(12, 1)); //"number"
console.log(typeOfSum("d", 1)); //"string"
console.log(typeOfSum(1, "a")); //"string"
