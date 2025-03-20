import React from 'react';
import './Header.css';
import { Link, NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <Link to ="/">Home</Link>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/posts">Posts</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;