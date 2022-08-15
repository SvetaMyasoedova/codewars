function humanYearsCatYearsDogYears(humanYears) {
  if (humanYears === 1) return [humanYears, 15, 15];
  if (humanYears === 2) return [humanYears, 24, 24];
  if (humanYears > 2) return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
}

console.log(humanYearsCatYearsDogYears(1)); //[1,15,15]
console.log(humanYearsCatYearsDogYears(10)); //[10,56,64]
