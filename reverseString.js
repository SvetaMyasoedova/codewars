function reverseString(str) {
return str.split("").reverse().join("")
}

console.log(reverseString('world')); //'dlrow'
console.log(reverseString('hello')); //'olleh'
console.log(reverseString('')); //''
console.log(reverseString('h')); //'h'