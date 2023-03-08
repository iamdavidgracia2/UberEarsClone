import React from 'react'
import { Navbar } from '../components/Navbar'
import './groceries.css'

export const Groceries = () => {
  return (
    <div className='groceries-page-container'>
        <h1 className="groceries-page-title">
            Groceries
        </h1>
        <div className="groceries-list-container">
            <div className="groceries-list">
                Groceries List Component
            </div>
        </div>
        <Navbar/>
    </div>
  )
}
