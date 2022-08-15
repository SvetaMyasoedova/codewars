var uniqueInOrder=function(iterable){
	let newArr = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] != newArr[newArr.length - 1] || i == 0) {
            newArr.push(iterable[i])
        }   
    }
    return newArr;
 }

 console.log(uniqueInOrder('AAAABBBCCDAABBB'))  //['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'))        //['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]))      //[1,2,3]