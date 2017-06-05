import React from 'react';
import {Link} from 'react-router-dom';
import './NavigationButton.css';

const NavigationButton = ({ caption, selected, link }) => (
  <Link to={link}>
    <button className={`navigationButton ${selected ? `navigationButton-selected`: ``}`}>{caption}</button>
  </Link>
)

NavigationButton.defaultProps = {
  caption: 'Caption',
  selected: false
};

export default NavigationButton;
