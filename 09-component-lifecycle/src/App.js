import React from 'react';
import Counter from './Counter';

const color = 'color: blue';

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('%cApp - constructor', color);
    this.state = {
      isCounterHidden: false,
      counterOperation: 1
    };
  }
  componentWillMount(){
    console.log('%cApp - componentWillMount()', color);
  }
  componentDidMount(){
    console.log('%cApp - componentDidMount()', color);
  }
  componentWillReceiveProps(nextProps){
    console.log('%cApp -componentWillReceiveProps()', color);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('%cApp - shouldComponentUpdate()', color);
    return true;
  }
  componentWillUpdate(){
    console.log('%cApp - componentWillUpdate()', color);
  }
  componentDidUpdate(){
    console.log('%cApp - componentDidUpdate()', color);
  }
  componentWillUnmount(){
    console.log('%cApp - componentWillUnmount()', color);
  }
  toggleCounterVisibility(){
    console.log('%c--- Set state within App Component (isCounterHidden) ---', color);
    this.setState((prevState, props) => ({
      isCounterHidden: !prevState.isCounterHidden
    }));
  }
  toggleCounterOperation(){
    console.log('%c--- Set state within App Component (counterOperation) ---', color);
    this.setState((prevState, props) => ({
      counterOperation: prevState.counterOperation * -1
    }));
  }
  render(){
    console.log('%cApp - render()', color);
    const { isCounterHidden, counterOperation } = this.state;
    return (
      <div>
        <h1>Lifecycle Example</h1>
        <button onClick={() => this.toggleCounterVisibility()}>
          { isCounterHidden ? 'Show' : 'Hide' } Counter
        </button>
        <button onClick={() => this.toggleCounterOperation()}>
          { counterOperation === -1 ? 'Change to Increment' : 'Change to Decrement' }
        </button>
        { 
          isCounterHidden ? null 
          : <Counter 
              isCounterHidden={isCounterHidden} 
              counterOperation={counterOperation}
            />
        }
      </div>
    );
  }
}

export default App;