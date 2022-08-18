function sortArr(arr){
if(arr == null) return []
return arr.sort((a,b) => a-b)
}

console.log(sortArr([1,2,3,10,5])); //[1,2,3,5,10])
console.log(sortArr(null)); //[])
console.log(sortArr([])); //[])