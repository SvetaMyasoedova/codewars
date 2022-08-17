const dataBase = {
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
}

function greetLanguage(language) {
	for (let key in dataBase) {
		if(key===language) {
			return dataBase[key]
		}
	}
	return 'Welcome'
}

console.log(greetLanguage('english'));//'Welcome'
console.log(greetLanguage('dutch')); //'Welkom'
console.log(greetLanguage('IP_ADDRESS_INVALID')); //'Welcome'

//Best Practice
function greetLanguage(language) {

	defaultLanguage = 'english';
	return dataBase[language] || dataBase[defaultLanguage];
 }