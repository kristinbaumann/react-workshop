import React from 'react';

const color = 'color: green';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log('%cCounter - constructor()', color);
    this.state = {
      counter: 0
    };
  }
  componentWillMount(){
    console.log('%cCounter - componentWillMount()', color);
  }
  componentDidMount(){
    console.log('%cCounter - componentDidMount()', color);
  }
  componentWillReceiveProps(nextProps){
    console.log('%cCounter - componentWillReceiveProps()', color);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('%cCounter - shouldComponentUpdate()', color);
    return true;
  }
  componentWillUpdate(){
    console.log('%cCounter - componentWillUpdate()', color);
  }
  componentDidUpdate(){
    console.log('%cCounter - componentDidUpdate()', color);
  }
  componentWillUnmount(){
    console.log('%cCounter - componentWillUnmount()', color);
  }
  updateCounter() {
    console.log('%c--- Set state within Counter Component ---', color);
    this.setState((prevState, props) => ({
      counter: prevState.counter + this.props.counterOperation
    }));
  }
  render() {
    console.log('%cCounter - render()', color);
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <p>Operation: { this.props.counterOperation === -1 ? 'Decrement' : 'Increment' }</p>
        <button onClick={() => this.updateCounter()}>Update Counter</button>
      </div>
    );
  }
}

export default Counter;