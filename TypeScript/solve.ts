//Given a lowercase string that has alphabetic characters only and no spaces, 
//return the highest value of consonant substrings. 
//Consonants are any letters of the alphabet except "aeiou".

function solve(s: string): number {
const arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const arr_en_vowel: string[] = ['a', 'e', 'i', 'o', 'u']
const newArr: any = s.split('');
const arrOfIndex: number[] = [];
for(let letter of newArr) {
	for(let vowel of arr_en_vowel) {
		if(letter === vowel) {
				let idx: number = newArr.indexOf(letter);
				while (idx != -1) {
					arrOfIndex.push(idx);
				  idx = newArr.indexOf(letter, idx + 1);
				}
		}
	}
}


for(let index of arrOfIndex.sort()) {
	newArr.splice(index, 1, '!');
}

let arrOfConsonants: string[] =  newArr.join("").split('!');
let result: number[] = [];

for(let consonant of arrOfConsonants) {
	if(consonant.length === 1) {
		result.push(arr_en.indexOf(consonant)+1)
	} else {
		const arr: string[]= consonant.split('')
		let sum: number[] = [];

		for(let letter of  arr) {
			sum.push(arr_en.indexOf(letter)+1)
		}
		let sumOfLetter: number = sum.reduce((acc, rec) => acc+rec, 0)
		
		result.push(sumOfLetter)
	}
}
const sort: number[] = result.sort((a, b) => a - b);

return sort[sort.length-1];
}

console.log(solve("chruschtschov")); //80



//Clever
function solve_2(s: string) {
	let highest = 0
	let sum = 0
	
	for (let i = 0; i < s.length; i++) {
	  if ('aeiou'.includes(s[i])) {
		 sum = 0
		 continue
	  }
	  
	  sum += s.charCodeAt(i) - 96
		 
	  if (highest < sum) {
		 highest = sum
	  }
	}  
	
	return highest  
 }
