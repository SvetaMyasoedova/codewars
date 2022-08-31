function digitize(num) {
	let arraOfNum = String(num).split("").reverse()
	return arraOfNum.map(string => +string)
 }

 console.log(digitize(35231)); //[1,3,2,5,3]