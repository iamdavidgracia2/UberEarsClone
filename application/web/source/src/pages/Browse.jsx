import React from 'react'
import SearchBar from '../components/SearchBar'
import './browse.css'

export const Browse = () => {
  return (
    <div className='browse-page-container'>
        <SearchBar/>
        <div className="categories-component">Categories Component</div>
    </div>
  )
}
