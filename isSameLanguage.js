//true if all developers in the list code in the same language; or
//false otherwise.

function isSameLanguage(list) {
  let newArr = [];
  let uniqSet = new Set();
  for (elem of list) {
    newArr.push(elem.language);
  }
  
  for(let i=0; i < newArr.length; i++) {
    uniqSet.add(newArr[i])
  }

  if(uniqSet.size == 1) {
    return true
  } else {
    return false
  }
}

let list1 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "JavaScript",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 65,
    language: "JavaScript",
  },
];

let list2 = [
  {
    firstName: "Mariami",
    lastName: "G.",
    country: "Georgia",
    continent: "Europe",
    age: 29,
    language: "Python",
  },
  {
    firstName: "Mia",
    lastName: "H.",
    country: "Germany",
    continent: "Europe",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Maria",
    lastName: "I.",
    country: "Greece",
    continent: "Europe",
    age: 32,
    language: "C",
  },
];

console.log(isSameLanguage(list1)); //true
console.log(isSameLanguage(list2)); //false

//clever
function isSameLanguage(list) {
  return list.every(e => e.language === list[0].language);
}