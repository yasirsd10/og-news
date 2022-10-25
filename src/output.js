import React from 'react'
import Moviearticle from './components/moviearticle'
import Collections from './components/movieCollections/collections'
import Trends from './components/trends'
import MovieReviews from './components/homeComponents/movieReviews'

function Output() {
  return (
    <div>
        <div className='container d-flex mt-2'>
        <Moviearticle />
        <Moviearticle />  
        </div>
        <div className='container mt-4'>
        <Collections />
        </div>
        <div className='container mt-4'>
            <MovieReviews />
        </div>
        <div className='container mt-4'>
        <Trends />
        </div>

    </div>
  )
}

export default Output