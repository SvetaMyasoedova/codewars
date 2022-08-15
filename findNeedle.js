function findNeedle(haystack) {
	if(haystack === undefined) return "Your function didn't return anything"

	if(haystack.includes("needle")) {
		
		return `found the needle at position ${haystack.indexOf("needle")}`
	} 
 }


 let haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
 let haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
console.log(findNeedle(haystack_1));
console.log(findNeedle(haystack_2));
