const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
console.log(person)
person.printIntroduction();

const betterPerson = Object.create(person);
console.log("betterPerson", betterPerson)

betterPerson.name = "John";
betterPerson.age = 18;
betterPerson.origin = "British";

console.log("betterPerson later", betterPerson);
betterPerson.printIntroduction()
betterPerson.printIntroduction = function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman} I'm ${this.age}`);
}
betterPerson.printIntroduction()
betterPerson.printIntroduction = function (origin) {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman} I'm ${this.age} and ${origin}`);
}
betterPerson.printIntroduction("British")

let str = "string"
let destructed2 = [...str]
console.log(destructed2)

let destructed3 = { ...person }
console.log(destructed3)

let destructed = [...person]
console.log(destructed)