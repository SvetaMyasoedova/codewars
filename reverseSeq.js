function reverseSeq(num) {
  let array = Array.from({length: num}, (_,num) => num+1)
  return array.reverse()

  
}

	console.log(reverseSeq(5)); //[5, 4, 3, 2, 1]

//or
const reverseSeq = n => {
	let arr = [];
	  for (let i=n; i>0; i--) {
		 arr.push(i);
		 } return arr;
	};
