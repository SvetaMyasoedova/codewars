function count(string) {
  let map = new Map();
  let arr = string.split("");

  if (arr === "") return {};
  for (let i = 0; i < arr.length; i++) {
    if (map.get(arr[i]) === undefined) {
      map.set(arr[i], 1);
    } else {
      let counter = map.get(arr[i]);
      counter++;
      map.set(arr[i], counter);
    }
  }
  let obj = {};
   map.forEach((values, keys) => {
		obj[keys] = values;
   
  });
  return obj;
}

console.log(count("aba")); //{ a: 2, b: 1 });
console.log(count("")); //{});
