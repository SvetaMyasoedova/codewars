//Valid smiley face examples: :) :D ;-D :~)
//Invalid smiley faces: ;( :> :} :]
//return the total number of smiling faces in the array
function countSmileys(arr) {
if(arguments.length === 0) return 0;
let count = 0;
for (smile of arr) {
	if(smile.match(/[:;][-~][)D]/g) || smile.match(/[:;][)D]/g)) {
		++count
	}
	
}
return count
}

console.log(countSmileys([])); //0
console.log(countSmileys([':D',':~)',';~D',':)'])); //4);
console.log(countSmileys([':)',':(',':D',':O',':;'])); //2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); //1);

//or
function countSmileys(arr) {
	return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
 }