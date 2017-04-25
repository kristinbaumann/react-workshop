// Full Reference: http://es6-features.org/#ParameterContextMatching
// in ES6:
function test ({ name, val }) {
    console.log(name, val);
}
test({ name: "bar", val: 42 });

// in ES5:
function test (arg) {
    var name = arg.name;
    var val  = arg.val;
    console.log(name, val);
};
test({ name: "bar", val: 42 });

