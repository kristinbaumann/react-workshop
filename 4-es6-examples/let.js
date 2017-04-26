// Full Reference: http://es6-features.org/#BlockScopedVariables
// in ES6
function letTest() {
  let x = 31;
  if (true) {
    let x = 71;  // other variable
    console.log(x);  // 71
  }
  console.log(x);  // 31
}

// in ES5
function varTest() {
  var x = 31;
  if (true) {
    var x = 71;  // same variable!
    console.log(x);  // 71
  }
  console.log(x);  // 71
}

