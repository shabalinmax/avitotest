import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className={'header'}>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Header;
