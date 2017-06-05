import React, { Component } from 'react';
//import Home from '../Home/Home';
import TalkOverview from '../TalkOverview/TalkOverview';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <TalkOverview />
      </div>
    );
  }
}

export default App;
