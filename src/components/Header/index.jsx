import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className={'header'}>
            <Link to="/">Home</Link>
            <Link to="/postPage">Post</Link>

        </div>
    );
};

export default Header;
