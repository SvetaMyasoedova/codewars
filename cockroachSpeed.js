//a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
  return Math.floor((s * 100000) / 360 / 10);
}

console.log(cockroachSpeed(1.08)); //30
console.log(cockroachSpeed(1.09)); //30
console.log(cockroachSpeed(0)); //0

//Best Practices
const cockroachSpeed = (s) => Math.floor(s / 0.036);
