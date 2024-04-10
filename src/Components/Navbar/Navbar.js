import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as Redux } from './../../assets/icons8-redux.svg';
import './Navbar.css';

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <div> <Redux/>
            <span className="logo">REDUX STORE</span></div>
           
            <div>
                <Link className="navLink" to="/">
                    HOME
                </Link>
                <Link className="navLink" to="/cart">
                    CART
                </Link>
                <span className="cartCount">CART ITEMS: {items.length}</span>
            </div>
        </div>
    );
};

export default Navbar;