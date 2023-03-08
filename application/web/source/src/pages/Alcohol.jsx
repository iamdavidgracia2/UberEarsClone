import React from 'react'
import { Navbar } from '../components/Navbar'
import './alcohol.css'

export const Alcohol = () => {
  return (
    <div className='alcohol-page-container'>
        <h1 className="alcohol-page-title">
            Alcohol
        </h1>
        <div className="alcohol-list-container">
            <div className="alcohol-list">
                Alcohol List Component
            </div>
        </div>
        <div><Navbar/></div>
    </div>
  )
}
