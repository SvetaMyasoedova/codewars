function findShort(str){
let arrOfStr = str.split(" ");
let arrOfLengths = [];
for(word of arrOfStr) {
	arrOfLengths.push(word.length)
}
const minLength = Math.min(...arrOfLengths);
return minLength;

}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); //3);
console.log(findShort("turns out random test cases are easier than writing out basic ones")); //3); 
console.log(findShort("Let's travel abroad shall we")); //2);

//Best Practices
function findShort(s){
	return Math.min.apply(null, s.split(' ').map(w => w.length));
 }