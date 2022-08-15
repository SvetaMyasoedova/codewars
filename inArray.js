function inArray(array1, array2) {
  let newArr = [];

  for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < array1.length; j++) {
      if (array2[i].includes(array1[j])) {
        newArr.push(array1[j]);
      }
    }
  }
  let setOfArr = new Set(newArr.sort());
  let result = Array.from(setOfArr);
 
  return result;
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
a1 = ["arp", "live", "strong"];
console.log(inArray(a1, a2)); //["arp", "live", "strong"]

b2 = ["lively", "alive", "harp", "sharp", "armstrong"];
b1 = ["tarp", "mice", "bull"];
console.log(inArray(b1, b2)); //[]

c2 = ["lively", "alive", "harp", "sharp", "armstrong"];
c1 = ["xyz", "live", "strong"];
console.log(inArray(c1, c2)); //["live", "strong"]

//or
function inArray(array1,array2){
	return array1
	  .filter(a1 => array2.find(a2 => a2.match(a1)))
	  .sort()
 }