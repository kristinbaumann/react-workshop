import React, { Component } from 'react';
import NavigationButton from '../NavigationButton/NavigationButton';
import './Navigation.css';

class Navigation extends Component {
  render() {
    const buttonData = [
      { text: '20th June' },
      { text: '21th June' },
      { text: '22th June' },
    ];
    const buttonList = buttonData.map((date, index) => <NavigationButton key={index} caption={date.text}/>);

    return (
      <div className="navigation">
        { buttonList }
      </div>
    );
  }
}

export default Navigation;
