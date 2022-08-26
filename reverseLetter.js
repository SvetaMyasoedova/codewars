//reverse str and omit all non-alphabetic characters

function reverseLetter(str) {
	let newStr = str.split("").reverse().join("")
	let regExp = /[^a-zA-Z]/ig;
	return newStr.replace(regExp, "")
 }

console.log(reverseLetter("ultr53o?n")); //"nortlu"
console.log(reverseLetter("ab23c")); //"cba"