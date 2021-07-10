let value = "coding is good";
let value1 = "and cool";
let o1 = Object(value)
let o11 = Object(value1)
// console.log("o1", o1)
// console.log(o1.charAt(2))
// let o2Assigned = Object.assign(o1, o11)

// Uncaught TypeError: Cannot assign to read only property '0' of object '[object String]'
// at Function.assign (<anonymous>)
// {/* at main.js:7 */}

const firstKey = { fKey: "1" };
const secondKey = { sKey: "2" };
console.log(firstKey);
console.log(secondKey)
const thirdObject = Object.assign(firstKey, secondKey);
console.log(thirdObject)
thirdObject.string = [...o1]
console.log("thirdObject", thirdObject)
const tableOfO1 = [...o1]
console.log("tableOfO1", tableOfO1)
// console.log(tableOfO1.charAt(5)); // doesn't work outside string
let str = "string"
const fourthObject = Object.assign(thirdObject, str);
console.log("fourthObject", fourthObject)

const fObject = Object.assign(thirdObject, o1);
console.log("fObject", fObject)

const o111 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o111, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o111)
// copied without changing o111 because it's not the target.