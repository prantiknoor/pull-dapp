import React from 'react';
import './header.css';

const Header = () => {
    return (
        <nav>
            <div className='div-header'>
                <div id='logo'>Pull DAPP</div>
                <div>
                    <button className='blue-button'>Create new pull</button>
                </div>
            </div>
        </nav>
    );
}

export default Header;