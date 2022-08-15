function removeExclamationMarks(s) {
	return s.replace(/!/g,'');
	
}

console.log(removeExclamationMarks("Hello World!")); //"Hello World"
console.log(removeExclamationMarks("He!llo World!!")); //"Hello World"

//or
function removeExclamationMarks(s) {
	return s.split('!').join('');
 }
