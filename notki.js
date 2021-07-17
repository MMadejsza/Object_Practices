d = Object.getOwnPropertyDescriptor(o, Symbol.for('baz'));

map(([key, value]) => [key, value ** 3]))

Object.is() //??

Object.freeze() "vs" Object.preventExtensions()

configurable, writtable,

    constructor i klasy

Promise i proxy

arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
    arr.pop()
    console.log(`[${arr}][${index}] -> ${elem}`)
    return elem < 4
})

// Loop runs for 2 iterations only, as the remaining
// items are `pop()`ed off
//
// 1st iteration: [1,2,3][0] -> 1
// 2nd iteration: [1,2][1] -> 2
Dlaczego tylko 2 iteracje a nie do 0 ?

    https ://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter nie rozumiem w ogóle tego zastosowania w przykładach i tych returnów

metoda Array.sort() dla rosnącej kolejności cyfr lub stringów