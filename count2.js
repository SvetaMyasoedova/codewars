function count (string) {  
	let count = {};
	string.split('').forEach(function(s) {
		count[s] ? count[s]++ : count[s] = 1;
	});
	return count;
 }

 console.log(count("aba")); //{ a: 2, b: 1 });
console.log(count("")); //{});