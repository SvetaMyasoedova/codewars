function howMuchILoveYou(nbPetals) {
  let phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly','not at all'];
  return phrases[(nbPetals - 1) % phrases.length]
}

console.log(howMuchILoveYou(7)); //"I love you"
console.log(howMuchILoveYou(3)); //"a lot"
console.log(howMuchILoveYou(6)); //"not at all"

//or
// return phrase[nbPetals%6]