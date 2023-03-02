import React from 'react'
import './navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';





export const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="navbar-section-container">
                <div className="home-section">
                    <div className="home-section-icon"><HomeIcon/></div>
                    <div className="home-section-text">Home</div>
                </div>
                <div className="browse-section">
                    <div className="browse-section-icon"><ManageSearchIcon/></div>
                    <div className="browse-section-text">Browse</div>
                </div>
                <div className="cart-section">
                <div className="-cart-section-icon"><ShoppingCartIcon/></div>
                    <div className="cart-section-text">Cart</div>
                </div>
                <div className="account-section">
                    <div className="account-section-icon"><AccountBoxIcon/></div>
                    <div className="account-section-text">Account</div>
                </div>
            </div>
        </div>
    )
}
