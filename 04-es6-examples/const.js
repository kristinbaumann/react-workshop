// Full Reference: http://es6-features.org/#Constants
// in ES6
const PI = 3.141593;

// in ES5
//  only through the help of object properties
//  and only in global context and not in a block scope
Object.defineProperty(typeof global === "object" ? global : window, "PI", {
    value:        3.141593,
    enumerable:   true,
    writable:     false,
    configurable: false
})

