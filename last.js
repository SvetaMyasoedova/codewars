//Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

function last(x) {
  let newArr = x.split(" ");
  let sorted = newArr.sort((a, b) => {
    if (a[a.length - 1] > b[b.length - 1]) {
      return 1;
    } else if (a[a.length - 1] < b[b.length - 1]) {
      return -1;
    }
    return 0;
  });

  return sorted;
}

console.log(last("man i need a taxi up to ubud")); //['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
