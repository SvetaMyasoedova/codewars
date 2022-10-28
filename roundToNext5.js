function roundToNext5(n) {
  if (n == 0) return 0;
  while (!(n % 5 == 0)) {
    n++;
  }
  return n;
}



console.log(roundToNext5(0)); //0
console.log(roundToNext5(2)); //5
