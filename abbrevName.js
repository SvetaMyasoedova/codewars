function abbrevName(name){
let arr =  name.split(" ");
let str1 = arr[0].split().join();
let letter1 = str1[0].toUpperCase();
let str2 = arr[1].split().join();
let letter2 = str2[0].toUpperCase();

return `${letter1}.${letter2}`;

}
	

//best practices
function abbrevNames(name){

	const nameArray = name.split(" ");
	return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
 }

console.log(abbrevName("Sam Harris")); //"S.H")
console.log(abbrevName("patrick feenan")); //"P.F"

    