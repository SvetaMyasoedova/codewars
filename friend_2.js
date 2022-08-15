function friend(friends){
	return friends.filter(n => n.length === 4)
 }

 console.log(friend(["Ryan", "Kieran", "Mark"]));