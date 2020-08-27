import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    return (
        <div class ="header">
            <img src={logo} alt=""/><span class="name">Durshikha Online Courses</span>
            <nav>
                <a href="/Courses">All Courses</a>
                <a href="/review">Review</a>
                <a href="/orders">Orders</a>

            </nav>
            
            
            
        </div>
    );
};

export default Header;