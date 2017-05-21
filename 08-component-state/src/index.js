import React from 'react';
import ReactDOM from 'react-dom';

// stateless component
const CounterText = ({ count }) => {
  return (<p>Counter: {count}</p>)
}

// stateful component
// class CounterText extends React.Component {
//   render(){
//     return (<p>Counter: {this.props.count}</p>);
//   }
// }

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
        <CounterText count={this.state.counter}/>
        <button onClick={() => this.updateCounter()}>
          Increment Counter
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('mount'));


