function digitalRoot(number) {
  let tempString = number.toString();
  let sum = 0;
  for( i = 0 ; i < tempString.length; i++){
	sum += +tempString[i];
}
if(sum > 9){
	return digitalRoot(sum); 
}
return sum;
}

console.log(digitalRoot(16)); //7
console.log(digitalRoot(456)); //6
console.log(digitalRoot(493193)); //2
