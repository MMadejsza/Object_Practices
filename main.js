let value = 0;
let value1 = 1;
let value2 = 2;
let value3 = 3;
let o1 = Object()
let o2 = Object(value)
let o3 = Object(value1, value2, value3)
let o4 = Object(null)
let o5 = Object(undefined)

console.log(o1);
console.log(o2)
console.log(o3)
console.log(o4)
console.log(o5)