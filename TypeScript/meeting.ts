function meeting(s: string): string {
  const arrOfFullNames: string[] = s.split(";");
  const arrOfReverse: string[] = [];
  const arrOfSorts: string[] = [];
  for (let fullName of arrOfFullNames) {
    arrOfReverse.push(
      fullName.replace(":", " ").split(" ").reverse().join(", ").toUpperCase()
    );
  }

  arrOfReverse.sort();

  for (let friend of arrOfReverse) {
    arrOfSorts.push("(" + friend + ")");
  }

  return arrOfSorts.join("");
}

// console.log(
//   meeting(
//     "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
//   )
// );

//"(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)"

//Clever
function meeting_2(s: string): string {
	return s.toUpperCase()
			  .split(';')
			  .map(n => '(' + n.split(':').reverse().join(', ') +')')
			  .sort() 
			  .join('');
 }