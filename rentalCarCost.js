function rentalCarCost(d) {
	if(d <= 2) return d*40
	if(3 <= d && d< 7) return (d*40)-20
	if(d >= 7) return (d*40)-50
 }

 console.log(rentalCarCost(1)); //40
 console.log(rentalCarCost(4)); //140)
 console.log(rentalCarCost(8)); //270)
