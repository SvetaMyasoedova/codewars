const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft >= distanceToPump) {
    return true;
  } else return false;
};

console.log(zeroFuel(50, 25, 2));//true
console.log(zeroFuel(100, 50, 1)); //false


//best practices
const zeroFuels = (distanceToPump, mpg, fuelLeft) => {
	return distanceToPump/mpg <= fuelLeft
 };