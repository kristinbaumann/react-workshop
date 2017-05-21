import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    const data = [
      { id: 'A1', text: 'My awesome item'},
      { id: 'B7', text: 'My premium item'},
      { id: 'C9', text: 'My wonderful item'}
    ];
    const listItems = data.map((item) => 
      <li key={item.id}>
        <p>{item.text}</p>
      </li>
    );
    return (
      <ul>
        {listItems}
       </ul>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));


