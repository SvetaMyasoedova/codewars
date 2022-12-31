function findMissingLetter(array: string[]): string {
const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


	if(array[0] === array[0].toLowerCase()) {
		let firstIndex: number = lower.indexOf(array[0]);
		let lastIndex: number = lower.indexOf(array[array.length-1]);
		const sliced: string[] = lower.slice(firstIndex, lastIndex+1)
		let letter: string[] = sliced.filter((letter) => !array.includes(letter));
		return letter.join('')
	} else {
		let firstIndex: number = upper.indexOf(array[0]);
		let lastIndex: number = upper.indexOf(array[array.length-1]);
		const sliced: string[] = upper.slice(firstIndex, lastIndex+1)
		let letter: string[] = sliced.filter((letter) => !array.includes(letter));
		return letter.join('')
	}
	

	
}

console.log(findMissingLetter(['a','b','c','d','f'])); //'e'
console.log(findMissingLetter(['O','Q','R','S'])); //'P'


//clever
function findMissingLetter_2(array:string[]):string
{
    for(let i = 0; i < array.length; i++) {
        if(array[i].charCodeAt(0) + 1 != array[i+1].charCodeAt(0))
            return String.fromCharCode(array[i].charCodeAt(0) + 1);
    }
}
