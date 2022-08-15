function openOrSenior(data){
	let newArr = []
	for(val of data) {
		if(val[0]>=55 && val[1]>7){
			newArr.push("Senior")
		} else newArr.push("Open")
	}
	return newArr
 }

 console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])); //['Open', 'Senior', 'Open', 'Senior'])

//Best Practices
function openOrSenior(data){
	return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
 }
 