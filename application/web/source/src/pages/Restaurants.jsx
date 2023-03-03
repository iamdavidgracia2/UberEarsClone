import React from 'react'
import { RestaurantsList } from '../components/RestaurantsList'
import './restaurants.css'

export const Restaurants = () => {
  return (
    <div className='restaurants-page-container'>
        <div className="restaurants-page-title-container">
            <h1 className="restaurants-page-title">
                Restaurants
            </h1>
        </div>
        <div className="food-filter-container">
            <div className="food-filter-category">Fast Food</div>
            <div className="food-filter-category">Asian</div>
            <div className="food-filter-category">Wings</div>
            <div className="food-filter-category">Mexican</div>
            <div className="food-filter-category">Pizza</div>
        </div>
        <div className="restaurants-list-container">
            <div className="restaurants-list">
                <div className="restaurants-list-component">
                    <RestaurantsList/>
                </div>
            </div>
        </div>
    </div>
  )
}
