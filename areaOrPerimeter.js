const areaOrPerimeter = function (a, b) {
  return a === b ? a * b : a * 2 + b * 2;
};

console.log(areaOrPerimeter(4, 4)); //16
console.log(areaOrPerimeter(6, 10)); //32
