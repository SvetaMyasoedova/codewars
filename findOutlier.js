function findOutlier(arr) {
	let odd = [];
	let even = [];
	for(num of arr) {
		if(num % 2 === 0){
			even.push(num)
		} else {
			odd.push(num)
		}
	}
	if(odd.length == 1) {
		return odd[0]
	} else {
		return even[0]
	}
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); //11 (the only odd number)
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));  //160 (the only even number)

//Best Practices
function findOutlier(arr){
	let even = arr.filter(a=>a%2==0);
	let odd = arr.filter(a=>a%2!==0);
	return even.length==1? even[0] : odd[0];
 }