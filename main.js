let value = "coding id good";
let value1 = "and cool";
let o1 = Object(value)
let o11 = Object(value1)
console.log("o1", o1)
console.log(o1.charAt(2))
const o2Assigned = Object.assign(o1, o11)

// Uncaught TypeError: Cannot assign to read only property '0' of object '[object String]'
// at Function.assign (<anonymous>)
// {/* at main.js:7 */}
