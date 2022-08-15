function disemvowel(str) {
	let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

	let arr = str.split('');
	let filtered = arr.filter(ltr => vowels.includes(ltr));
	let res = "";
     
    for(var i = 0; i < str.length; i++)
    {
         
        if (!vowels.includes(str[i]))
        {
            res += str[i];
        }
    }

    return res;
	
}
	

	
 

console.log(disemvowel("This website is for losers LOL!")) //"Ths wbst s fr lsrs LL!"
