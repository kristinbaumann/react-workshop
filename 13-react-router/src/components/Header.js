import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const tabData = [
        { text: 'Home', link: '/' },
        { text: 'Recipes', link: '/recipes' },
    ];
    const tabs = tabData.map((tab, index) => (<li key={index}><Link to={tab.link}>{tab.text}</Link></li>));
    return(<ul>{tabs}</ul>);
}

export default Header;