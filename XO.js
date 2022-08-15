//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. when no 'x' and 'o' is present should return true
function XO(str) {
  countX = 0;
  countO = 0;
  if (!(str.includes("o") || str.includes("O")) &&!(str.includes("x") || str.includes("X"))) return true;
  for (letter of str) {
	
    
    if (letter === "o" || letter === "O") {
      countO++;
    }
    if (letter === "x" || letter === "X") {
      countX++;
    }
  }
 
  if (countO === countX) {
    return true;
  } else return false;
}

console.log(XO('xo')); //true
console.log(XO("xxOoo")); //false
console.log(XO("zpzpzpp")); //true
console.log(XO("Oo"));//false

//Best Practices
function XO(str) {
	let strLower = str.toLowerCase()
	return strLower.split('x').length === strLower.split('o').length;
 }

 //or
 const XO = str => {
	str = str.toLowerCase().split('');
	return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
 }