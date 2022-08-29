function cakes(recipe, available) {
	let result =[]
	for (let component in recipe) {
	  if (available[component]) {
		 const counterOfCakes = Math.floor(available[component] / recipe[component] || 0)
		 result.push(counterOfCakes)
	  } else {
		 return 0
	  }
	}
	return Math.min(...result)
 }

 let recipe = {flour: 500, sugar: 200, eggs: 1};
 let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
 console.log(cakes(recipe, available)); //2

let recipe1 = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
let  available1 = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe1, available1)); //0