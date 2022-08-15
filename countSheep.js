let countSheep = function (num){
	if(num == 0) return ""
	let str = "";
	for(let i = 1; i <= num; i++) { 
	str+= `${i} sheep...`; }
	return str;
 }

 console.log(countSheep(0));  //""
 console.log(countSheep(1)); //"1 sheep...");
 console.log (countSheep(2)); //"1 sheep...2 sheep..."