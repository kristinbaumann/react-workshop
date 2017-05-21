import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: 'Tim'
    };
    this.updateCounter = this.updateCounter.bind(this);
  }
  // this binding in constructor
  updateCounter(e) {
    let factor = 1;
    if (e.shiftKey) {
      factor = 10;
    } 
    this.setState((prevState, props) => ({
      counter: prevState.counter + factor
    }));
  }
  // this binding with arrow function 
  updateInput(e){
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <div>
        <div>
          <p>Counter: {this.state.counter}</p>
          <button onClick={this.updateCounter}>
            Increment Counter
          </button>
        </div>
        <br />
        <div>
          <p>Name: {this.state.name}</p>
          <input 
            defaultValue={this.state.name} 
            onChange={(e) => this.updateInput(e)} />
        </div>
       </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));


