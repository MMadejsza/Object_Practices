var o = {}; // Creates a new object

Object.defineProperty(o, 'a', {
    value: 37,
    writable: false
});

console.log(o.a); // logs 37
o.a = 25; // No error thrown
// (it would throw in strict mode,
// even if the value had been the same)
console.log(o.a); // logs 37. The assignment didn't work.