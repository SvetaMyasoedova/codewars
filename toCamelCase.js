function toCamelCase(str) {
   const regExp = /[-_]\w/ig;
   return str.replace(regExp,function(match){
		return match.charAt(1).toUpperCase();
 });
}

console.log(toCamelCase("")); //''
console.log(toCamelCase("the_stealth_warrior")); //"theStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior")); //"TheStealthWarrior"
console.log(toCamelCase("A-B-C")); //"ABC"
