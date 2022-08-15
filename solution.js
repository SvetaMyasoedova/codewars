function solution(string) {
	let newS = string.replace(/([A-Z])/g, " $1").trim();
	return newS;
}
console.log(solution('camelCasing')); 