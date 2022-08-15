function removeEveryOther(arr) {
	
  let resultArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    resultArr.push(arr[i]);
  }
  return resultArr
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"])); //['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //[1, 3, 5, 7, 9]);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}])); //[['Goodbye']])

//clever
function removeEveryOther(arr){
	return arr.filter(function(elem, index) {
	  return index % 2 === 0;
	});
 }