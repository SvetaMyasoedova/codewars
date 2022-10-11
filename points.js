function points(games) {
  let xscore = [];
  let result = 0;

  for (let score of games) {
    let newArr = score.split(":");
    xscore.push(newArr);
  }
  for (let elem of xscore) {
    if (+elem[0] > +elem[1]) {
      result += 3;
    }
    if (+elem[0] < +elem[1]) {
      result += 0;
    }
    if (+elem[0] == +elem[1]) {
      result += 1;
    }
  }
  return result;
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
); //30

//clever
const points=games=>games.reduce((output,current)=>{
  return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
},0)
