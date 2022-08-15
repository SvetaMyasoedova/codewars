function countSheeps(arrayOfSheep) {
	let count = 0;
	for(sheep of arrayOfSheep) {
		if(sheep === true) {
			count++;
		}
	}
	return count;

 }

 let array1 = [true,  true,  true,  false,
	true,  true,  true,  true ,
	true,  false, true,  false,
	true,  false, false, true ,
	true,  true,  true,  true ,
	false, false, true,  true ];

	console.log(countSheeps(array1));