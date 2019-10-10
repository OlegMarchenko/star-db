import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <a href="/" className="header-logo">Star DB</a>
            <nav className="header-nav">
                <ul>
                    <li><a href="/">People</a></li>
                    <li><a href="/">Planets</a></li>
                    <li><a href="/">Starships</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;