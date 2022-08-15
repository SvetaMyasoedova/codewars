function hero(bullets, dragons){
	if(dragons*2> bullets) {
		return false
	} else return true
	}

	console.log(hero(10,5)); //true
	console.log(hero(7,4)); //false

//Best Practices
	function hero(bullets, dragons){
		return bullets >= dragons * 2
	 }

