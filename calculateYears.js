function calculateYears(principal, interest, tax, desired) {
  if (principal == desired) return 0;
  let countOfYears = 0;
  while (principal < desired) {
    principal = principal + ((principal * interest) - (principal * interest * tax));
   
    countOfYears++;
  }
  return countOfYears;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100)); //3
console.log(calculateYears(1000,0.01625,0.18,1200)); //14
console.log(calculateYears(1000, 0.05, 0.18, 1000)); //0
