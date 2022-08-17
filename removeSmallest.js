//Do not mutate the original array
function removeSmallest(arrOfNumbers) {
	if(arrOfNumbers.length === 0) return arrOfNumbers;
	let newArr = [...arrOfNumbers];
	let smallest= newArr.sort((a,b) => a-b).shift()
	let index = arrOfNumbers.findIndex(item => item ==smallest);
	let resultArr = [...arrOfNumbers]
	resultArr.splice(index, 1)
	return resultArr
	
 }

 console.log(removeSmallest([1, 2, 3, 4, 5])); //[2, 3, 4, 5]
 console.log(removeSmallest([])); //[]
 console.log(removeSmallest([5, 3, 2, 1, 4])); // [5, 3, 2, 4]