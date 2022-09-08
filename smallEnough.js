function smallEnough(arr, limit) {
  let filtered = arr.filter((val) => val > limit);

  if (filtered.length > 0) {
    return false;
  } else return true;
}

console.log(smallEnough([66, 101], 200)); //true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); //false

//clever
function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}
