import React from 'react';
import './NavigationButton.css';

const NavigationButton = ({ caption }) => (
  <button className="navigationButton">{caption}</button>
)

NavigationButton.defaultProps = {
  caption: 'Caption'
};

export default NavigationButton;
