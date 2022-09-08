function getAge(inputString){
	 let newArr = inputString.split(" ")
	 return +newArr[0]
	}

	console.log(getAge("4 years old")); //4

	//Clever
	function getAge(inputString){
		return parseInt(inputString);
	 }