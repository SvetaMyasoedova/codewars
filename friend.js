function friend(friends) {
  let len;
  let tempArr = [];
  for (name of friends) {
    len = name.length;
    if (len === 4) {
      tempArr.push(name);
    }
  }
  return tempArr;
}

console.log(friend(["Ryan", "Kieran", "Mark"])); //["Ryan", "Mark"])
