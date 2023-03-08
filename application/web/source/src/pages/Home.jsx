import React from 'react'
import { Navbar } from '../components/Navbar';
import './home.css';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LiquorIcon from '@mui/icons-material/Liquor';
import { Link } from 'react-router-dom';
import { Advertisement } from '../components/Advertisement';
import SearchBar from '../components/SearchBar';

export const Home = () => {
  return (
    <div className='home-page-container'>
      <section className="home-page-top">
        <div className="search-bar-component">
        <SearchBar/>
        </div> 
      </section>
      <section className='home-page-middle-top'>
        <span className="restaurants-text">
          <Link to='/restaurants'>Restaurants</Link>
        </span>
        <span className="restaurants-icon">
          <RestaurantIcon fontSize='large'/>
        </span>
      </section>
      <section className='home-page-middle-middle'>
        <span className="groceries-text">
          <Link to='/groceries'>Groceries </Link>
        </span>
        <span className="groceries-icon">
          <ShoppingCartCheckoutIcon/>
        </span>
        <span className="alcohol-text">
          <Link to='/alcohol'>Alcohol</Link>
        </span>
        <span className="alcohol-icon">
          <LiquorIcon/>
        </span>
      </section>
      <section className='home-page-middle-bottom'>
        <div className="advertisement">
          <Advertisement/>
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

