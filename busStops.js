function busStops(arr) {
	let exit = 0;
	let entry = 0;
	for(let i=0; i<arr.length; i++) {
		for(let j=0; j< arr[i].length; j++){
			if(j == 0) {
				entry+=arr[i][j]
			} else exit+=arr[i][j]
		}
	}
	return entry-exit
}

console.log(busStops([[10, 0],[3, 5],[5, 8]])); //5
console.log(busStops([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])); //17
console.log(busStops([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])); //21
console.log(busStops([[0,0]])); //0

//Best Practices
var number = function(busStops){
	var totalPeople = 0;
	for (var i=0; i<busStops.length; i++) {
	  totalPeople += busStops[i][0];
	  totalPeople -= busStops[i][1];
	}
	return totalPeople;
 }