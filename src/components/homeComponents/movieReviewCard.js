import React from 'react'

function MovieReviewCard( { reviewApiData = {} } ) {
  return (
    <div className ="reviewCard m-3 shadow" >
  <img src={reviewApiData.moviePoster} className ="reviewCardImg" alt="..." />
  <div className ="">
    <h5 className ="fw-bolder pt-1">{reviewApiData.movieName}</h5>
    <p className ="c">{reviewApiData.movieReview}</p>
  </div>
</div>
  )
}

export default MovieReviewCard;