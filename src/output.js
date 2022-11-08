import React from 'react'
import Moviearticle from './components/movieArticles/moviearticle'
import Collections from './components/collections'
import Trends from './components/trends'
import MovieReviews from './components/homeComponents/movieReviews'
import MostReadMoviearticle from './components/movieArticles/mostReadMovieArticle'

function Output() {
  return (
    <div>
        <div className='container d-flex mt-2'>
        <Moviearticle />
        <MostReadMoviearticle />
        </div>
        <div className='container mt-4'>
        <Collections />
        </div>
        <div className='container mt-4'>
            <MovieReviews />
        </div>
        {/* <div className='container mt-4'>
        <Trends />
        </div> */}

    </div>
  )
}

export default Output