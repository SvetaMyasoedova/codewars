//S is misinterpreted as 5
//O is misinterpreted as 0
//I is misinterpreted as 1

function correct(string) {
  let newArr = string.split("");

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == "5") {
      newArr.splice(i, 1, "S");
    }
    if (newArr[i] == "0") {
      newArr.splice(i, 1, "O");
    }
    if (newArr[i] == "1") {
      newArr.splice(i, 1, "I");
    }
  }

  return newArr.join("");
}

console.log(correct("L0ND0N")); //"LONDON");
console.log(correct("DUBL1N")); //"DUBLIN");
console.log(correct("51NGAP0RE")); //"SINGAPORE");


//clever
function correct(string) {
	return string.replace(/0/g, "O")
					 .replace(/5/g, "S")
					 .replace(/1/g, "I");
}