import React from 'react'
import './navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';





export const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="navbar-section-container">
                <div className="home-section">
                    <div className="home-section-icon"><HomeIcon/></div>
                    <Link to='/'>Home</Link>
                </div>
                <div className="browse-section">
                    <div className="browse-section-icon"><ManageSearchIcon/></div>
                    <Link to='/browse'>Browse</Link>
                </div>
                <div className="cart-section">
                <div className="-cart-section-icon"><ShoppingCartIcon/></div>
                    <Link to='/cart'>Cart</Link>
                </div>
                <div className="account-section">
                    <div className="account-section-icon"><AccountBoxIcon/></div>
                    <Link to='/admin'>Admin</Link>
                </div>
            </div>
        </div>
    )
}
