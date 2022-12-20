function dontGiveMeFive(start: number, end: number): number {
  const arrOfAllNumbers: number[] = [];
  const arrWithoutFive: number[] = [];
  for (let i = start; i <= end; i++) {
    arrOfAllNumbers.push(i);
  }
  for (let number of arrOfAllNumbers) {
    if (!String(number).includes("5")) {
      arrWithoutFive.push(number);
    }
  }

  return arrWithoutFive.length;
}

console.log(dontGiveMeFive(1, 9)); //8
console.log(dontGiveMeFive(4, 17)); //12

//clever
function dontGiveMeFive_2(start:number, end:number) : number
{
  let total: number = 0;
  
  for(let i = start; i <= end; i++){
    if(!i.toString().includes('5')){
      total += 1;
    }

  };
  return total;
}
