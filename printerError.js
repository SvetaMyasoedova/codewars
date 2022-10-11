function printerError(str) {
	// your code
	let reference  = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
	let mistakes = []
	let arr = str.split('')
	for (elem of arr) {
		if(!reference.includes(elem)) {
			mistakes.push(elem)
		}
	}

return `${mistakes.length}/${arr.length}`
}

let s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
console.log(printerError(s)); //"3/56"

//clever
const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;