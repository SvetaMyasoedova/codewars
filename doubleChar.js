function doubleChar(str) {
	let resultArr = [];
	let newArr = str.split("");
	for(elem of newArr) {
		resultArr.push(elem);
		resultArr.push(elem);
	}
	return resultArr.join("")
 }

console.log(doubleChar("Adidas")); //"AAddiiddaass"
console.log(doubleChar("1337")); //"11333377"

//or
const doubleChar = (str) => str.split("").map(c => c + c).join("");