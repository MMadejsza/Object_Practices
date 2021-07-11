const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
console.log(person)
person.printIntroduction();

const betterPerson = Object.create(person);
betterPerson.name = "John";
betterPerson.age = 18;
betterPerson.origin = "British";


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

Object.defineProperty(betterPerson, 'Religion', {
    value: "Muslim",
    writable: true, // value changeable
    configurable: false, //By default not to delete
    enumerable: true, //Object.keys works now
})