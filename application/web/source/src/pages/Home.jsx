import React from 'react'
import './home.css';

export const Home = () => {
  return (
    <div className='home-page-container'>
      <div className="home-page-top">
        Search Bar Component
      </div>
      <section className='home-page-middle-top'>
        <button className="restaurants-button">Restaurants Button</button>
      </section>
      <section className='home-page-middle-middle'>
        <div className="groceries-button">
          Groceries Button
        </div>
        <div className="alcohol-button">
          Alcohol Button
        </div>
      </section>
      <section className='home-page-middle-bottom'>
        <div className="advertisement">
          Advertisement/Discount Deal
        </div>
      </section>
      <section className='home-page-bottom'>
        <div className="favorites-component">
          Your Favorites Component
        </div>
      </section>
      <div className="home-page-navbar">
        Navbar Component
      </div>
    </div>
  )
}

