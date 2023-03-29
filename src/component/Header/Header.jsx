import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <a href="/Home">Home</a>
                <a href="/Blog">Blog</a>
                <a href="/Meals">Meals</a>
                <a href="/Tutorial">Tutorial</a>
            </nav>
        </div>
    );
};

export default Header;