str = Object("String");
console.log(str)
console.log(
    Object.entries(str)
)
let s = Object.entries(str);
const anObj = { 100: 'a', 2: 'b', 7: 'd', 101: 'c' };
console.log(Object.entries(anObj));

console.log(Object.entries('string'));

const obj = { a: 5, b: 7, c: 9 };
let o = Object.entries(obj)
console.log(o)
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} ${value}`);
}

Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});

console.log(Object.fromEntries(s))

let c = [['0', 'a'], ['1', 'b'], ['2', 'c']]
console.log(Object.fromEntries(c))

const object1 = { a: 1, b: 2, c: 3 };
console.log(object1)
const object2 = Object.fromEntries(Object.entries(object1).map(([key, value]) => [key, value ** 3]))
console.log(object2)