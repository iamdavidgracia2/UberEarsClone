import React from 'react'
import { Navbar } from '../components/Navbar';
import './home.css';

export const Home = () => {
  return (
    <div className='home-page-container'>
      <section className="home-page-top">
        <div className="search-bar-component">
        Search Bar Component
        </div>
      </section>
      <section className='home-page-middle-top'>
        <div className="restaurants-button">Restaurants Button</div>
      </section>
      <section className='home-page-middle-middle'>
        <span className="groceries-button">
          Groceries
        </span>
        <span className="alcohol-button">
          Alcohol
        </span>
      </section>
      <section className='home-page-middle-bottom'>
        <div className="advertisement">
          Advertisement/Discount 
        </div>
      </section>
      <section className='home-page-bottom'>
        <div className="favorites-component">
          Your Favorites Component
        </div>
      </section>
      <div className="home-page-navbar">
        <Navbar/>
      </div>
    </div>
  )
}

