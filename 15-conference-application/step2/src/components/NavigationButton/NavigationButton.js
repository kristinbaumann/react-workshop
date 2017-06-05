import React from 'react';
import './NavigationButton.css';

const NavigationButton = ({ caption, selected, onClickAction}) => (
  <button 
    className={`navigationButton ${selected ? `navigationButton-selected`: ``}`}
    onClick={onClickAction}
    >{caption}</button>
)

NavigationButton.defaultProps = {
  caption: 'Caption',
  selected: false
};

export default NavigationButton;
