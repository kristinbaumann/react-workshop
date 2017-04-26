// Full Reference: http://es6-features.org/#ExpressionBodies
// in ES6
odds  = evens.map(v => v + 1);

// in ES5
odds  = evens.map(function (v) { return v + 1; });
