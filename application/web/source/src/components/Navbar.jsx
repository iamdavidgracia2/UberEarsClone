import React from 'react'
import './navbar.css'

export const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="navbar-section-container">
                <div className="home-section">
                    <div className="home-section-icon"></div>
                    <div className="home-section-text">Home</div>
                </div>
                <div className="browse-section">
                    <div className="browse-section-icon"></div>
                    <div className="browse-section-text">Browse</div>
                </div>
                <div className="cart-section">
                <div className="-cart-section-icon"></div>
                    <div className="cart-section-text">Cart</div>
                </div>
                <div className="account-section">
                    <div className="account-section-icon"></div>
                    <div className="account-section-text">Account</div>

                </div>
            </div>
        </div>
    )
}
