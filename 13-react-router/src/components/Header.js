import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const tabData = [
        { text: 'Home', link: '/' },
        { text: 'Recipes', link: '/recipes' },
    ];
    const tabs = tabData.map((t) => (<li><Link to={t.link}>{t.text}</Link></li>));
    return(<ul>{tabs}</ul>);
}

export default Header;