import './Header.css'
import React from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to={"/shop"}>Shop</Link>            {/* ekhane je link deya ache thik same link dite hobe route e o nahole jotoi click koruk pabe na. */}
                <Link to={"/orders"}>Order</Link>
                <Link to={"/inventory"}>Inventory</Link>
                <Link to={"/about"} > About</Link>
            </div >
        </nav >
    );
};

export default Header;