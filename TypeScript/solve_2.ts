function solve(s: string): string {
  const upper: string[] = [];
  const lower: string[] = [];

  for (let letter of s) {
    letter === letter.toUpperCase() ? upper.push(letter) : lower.push(letter);
  }
 if (upper.length === lower.length || lower.length > upper.length) {
	return s.toLowerCase()
 } else {
	return s.toUpperCase()
 }

}

console.log(solve("code")); //"code"));
console.log(solve("CODe")); //"CODE"));
console.log(solve("COde")); //"code"));
console.log(solve("Code")); //"code"));
