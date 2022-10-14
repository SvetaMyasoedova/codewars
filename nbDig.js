function nbDig(n, d) {
  // your code
  let newArr = [];
  let result = [];

  while (n > -1) {
    let str = String(n ** 2);
    newArr.push(str);
    n--;
  }
  //console.log("array of squares", newArr);

  for (let elem of newArr) {
    let elemArr = elem.split("");
    let filterArr = elemArr.filter((item) => item == d);
    for (let i = 0; i < filterArr.length; i++) {
      result.push(elem);
    }
  }

  //console.log("array of includes d", result);
  return result.length;
}

console.log(nbDig(10, 1)); //4
console.log(nbDig(25, 1)); //11
console.log(nbDig(5750, 0)); //4700
console.log(nbDig(11011, 2)); //9481
console.log(nbDig(12224, 8)); //7733
console.log(nbDig(11549, 1)); //11905

//Best Practices
function nbDig(n, d) {
  var res=0;
      for (var g=0;g<=n;g++){
        var square=(g*g+"").split("");
        square.forEach((s)=>s==d?res++:null)
      }return res;
  }

