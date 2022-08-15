function betterThanAverage(classPoints, yourPoints) {
classPoints.push(yourPoints)
let average = classPoints.reduce((a, b)=>a + b) / classPoints.length
if(yourPoints >= average) {
	return true
} else return false

 }

 console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); //true
 console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)); //false

 //Best Practices
 function betterThanAverage(classPoints, yourPoints) {
	return yourPoints > classPoints.reduce(function(sum, x){return sum + x},yourPoints)/(classPoints.length+1)
 }