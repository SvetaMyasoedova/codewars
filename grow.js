function grow(arr){
let result = 1;
for(num of arr) {
	result *= num;
}
return result;
}

console.log(grow([4, 1, 1, 1, 4])); //16
console.log(grow([2, 2, 2, 2, 2, 2])); //64

//Best Practices
const grow=arr=> arr.reduce((a,b) => a*b);