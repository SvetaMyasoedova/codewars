function sumArray(array) {
	if(array===null || array===undefined) return 0;
	if(array.length === 0 || array.length <= 2) return 0;
	
	array.sort((a,b) => a-b).shift()
	array.pop()
	return array.reduce((acc,num) => acc+num, 0)
	

}

console.log( sumArray(null));   //0 );
console.log( sumArray([ ]));    //0 );
console.log( sumArray([ 3 ]));  //0 );
console.log( sumArray([ 3, 5 ]));  //0 );
console.log( sumArray([ 6, 2, 1, 8, 10 ]));  //16 );
console.log( sumArray([ 0, 1, 6, 10, 10 ]));  //17 );