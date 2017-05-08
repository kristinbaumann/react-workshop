import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  updateCounter() {
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1
    }));
  }
  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={() => this.updateCounter()}>
          Increment Counter
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('mount'));


