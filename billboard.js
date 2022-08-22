//You can not use multiplier "*" operator.
function billboard(name, price = 30){
let lengthOfName = name.length
let newArr = [...new Array(lengthOfName)].fill(price); //Fill all the elements with a value
let result = newArr.reduce((acc, item) => acc + item, 0);
return result;

} 

console.log(billboard("Jeong-Ho Aristotelis")); //600
console.log(billboard("Hadufuns John", 20)); //260

//or
function billboard(name, price = 30){

	var totalCost = 0;
	for(i=0; i<name.length; i++){
		 totalCost += price;
	} 
	
	return totalCost;
	
	}
	
//or
function billboard(name, price = 30){
	return name.repeat(price).length;
 } 