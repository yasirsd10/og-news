import React from 'react'

function Moviearticle() {
  return (
    <div className='movieArticle rounded'>
        <h1 className='text-dark'>
          Latest Movie News Articles
        </h1>
        <a type="button" class="btn btn-primary movieArticleBtn" href='/latestMovieArticles'>See more</a>
    </div>
  )
}

export default Moviearticle