import React, { Component } from 'react';
import Home from '../Home/Home';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
