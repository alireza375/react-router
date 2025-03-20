import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <Link to ="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/users">Users</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;