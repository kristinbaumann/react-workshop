import React, { Component } from 'react';
import NavigationButton from '../NavigationButton/NavigationButton';
import './Navigation.css';

class Navigation extends Component {
  render() {
    const buttonList = this.props.days.map((item, index) => 
      <NavigationButton 
        key={index} 
        caption={item.text} 
        link={`/day/${item.day}`}
        selected={Number(this.props.dayFromURL) === item.day ? true : false }
        />
    );

    return (
      <div className="navigation">
        { buttonList }
      </div>
    );
  }
}

export default Navigation;
