function longest(s1, s2) {
  let set = [...new Set(s1 + s2)].sort().join("");
  return set;
}

console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); //"abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions")); //"acefghilmnoprstuy"
