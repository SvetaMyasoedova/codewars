function alphabetPosition(text) {
	let engArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
 
	let arrOfLetters = text.toLowerCase().split('')
	let resultArr = [];

	for(let i = 0; i < arrOfLetters.length; i++) {
		for(let j = 0; j < engArr.length; j++) {
			if(arrOfLetters[i] == engArr[j]) {
				let indexOfLetter = engArr.indexOf(engArr[j]);
				resultArr.push(indexOfLetter+1)
			}
		}
	}
return resultArr.join(' ')

}

 console.log(alphabetPosition("The narwhal bacons at midnight."));
 //"20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"