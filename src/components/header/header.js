import React from 'react';
import {Link} from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <Link className="header-logo" to="/">Star DB</Link>
            <nav className="header-nav">
                <ul>
                    <li>
                        <Link to="/people">People</Link>
                    </li>
                    <li>
                        <Link to="/planets">Planets</Link>
                    </li>
                    <li>
                        <Link to="/starships">Starships</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;