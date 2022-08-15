function createPhoneNumber(numbers){
	let str = numbers.join("");
	let one = str.slice(0, 3);
	let two= str.slice(3, 6);
	let three = str.slice(6);

	let onePart = "("+one+")"+" ";
	let twoPart = two+"-";
	let finalNumber = onePart+twoPart+three;


	return finalNumber;
 }

 console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
 console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
 console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));