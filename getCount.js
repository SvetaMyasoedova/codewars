//Return the number (count) of vowels in the given string.

function getCount(str) {
	let vowels = ['a', 'e', 'i', 'o', 'u'];
	let arr = str.split('');
	let filteredArr = arr.filter(letter => vowels.includes(letter));
	return filteredArr.length;
 }

 console.log(getCount("abracadabra"));//5


 //or
 function getCount(str) {
	return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
  }