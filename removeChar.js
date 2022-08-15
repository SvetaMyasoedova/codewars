function removeChar(str) {
  let str2 = str.substr(1);
  return str2.substring(0, str2.length - 1);
}

console.log(removeChar("eloquent")); //'loquen'
console.log(removeChar("country")); //'ountr'
console.log(removeChar("person")); //'erso'

//Best Practices
function removeChar(str) {
  return str.slice(1, -1);
}
