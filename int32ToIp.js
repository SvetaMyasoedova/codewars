function int32ToIp(int32) {
  let part1 = int32 & 255;
  let part2 = (int32 >> 8) & 255;
  let part3 = (int32 >> 16) & 255;
  let part4 = (int32 >> 24) & 255;

  return part4 + "." + part3 + "." + part2 + "." + part1;
}

console.log(int32ToIp(2154959208)); //"128.114.17.104"
console.log(int32ToIp(2149583361)); //"128.32.10.1"
console.log(int32ToIp(0)); //'0.0.0.0'
console.log(int32ToIp(2 ** 32 - 1)); //"255.255.255.255"
