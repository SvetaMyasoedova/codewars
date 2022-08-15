function areYouPlayingBanjo(name) {
  
  
  if(name[0] === "r"|| name[0] === "R") {
	return name + " plays banjo" 
  } else return name + " does not play banjo"
	
 }

 console.log(areYouPlayingBanjo("Ringo")); //"Ringo plays banjo"
 console.log(areYouPlayingBanjo("bravo")); //"bravo does not play banjo"
 console.log(areYouPlayingBanjo("rolf")); //"rolf plays banjo"

//best practices
function areYouPlayingBanjo(name) {
	return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
 }