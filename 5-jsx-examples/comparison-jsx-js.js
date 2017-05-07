// Built-in component
//  JSX code
<h1 id="myTitle">Hello World!</h1>

//  compiled JS code
React.createElement(h1, {id: 'myTitle'}, 'Hello World!');



// User-Defined component
//  JSX code
<MyButton size="big">Click Me</MyButton>

//  compiled JS code
React.createElement(MyButton, {size: 'big'}, 'Click Me');

