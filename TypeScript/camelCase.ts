export function camelCase(str: string): string {
  if (str.length === 0) return "";

  const arrOfStr: string[] = str.split(" ");
  const newArr: string[] = [];
  console.log(arrOfStr);
  for (let str of arrOfStr) {
    if (str.length > 0) {
      newArr.push(str[0].toUpperCase() + str.slice(1));
    }
  }

  return newArr.join("");
}

//console.log(camelCase("")); //""
console.log(camelCase("say hello ")); //"SayHello"
//console.log(camelCase("camel case method")); //"CamelCaseMethod"
