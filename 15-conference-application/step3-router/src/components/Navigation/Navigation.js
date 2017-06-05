import React, { Component } from 'react';
import NavigationButton from '../NavigationButton/NavigationButton';
import './Navigation.css';

class Navigation extends Component {
  render() {
    const { days, dayFromURL } = this.props;
    const buttonList = days.map((item, index) => 
      <NavigationButton 
        key={index} 
        caption={item.text} 
        link={`/day/${item.day}`}
        selected={Number(dayFromURL) === item.day}
        />
    );
    return (
      <div className="navigation">{ buttonList }</div>
    );
  }
}

Navigation.defaultProps = {
  days: [],
  dayFromURL: -1
};

export default Navigation;
