// Full Reference: http://es6-features.org/#StringInterpolation
// in ES6
var user = { name: 'Tom' };
var myString = `Hello ${user.name}!`;

// in ES5
var user = { name: `Tom` };
var myString = "Hello " + user.name + "!";

