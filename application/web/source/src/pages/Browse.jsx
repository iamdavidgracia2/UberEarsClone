import React from 'react'
import { Categories } from '../components/Categories'
import SearchBar from '../components/SearchBar'
import './browse.css'

export const Browse = () => {
  return (
    <div className='browse-page-container'>
        <SearchBar/>
        <Categories/>
    </div>
  )
}
