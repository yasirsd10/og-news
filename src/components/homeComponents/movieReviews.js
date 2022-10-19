import React from 'react'

function MovieReviews() {
  return (
    <div className='reviewsContainer'>
        <h1 className='text-light fw-bold'>Movie Reviews</h1>
        <div className=' d-flex reviewsPosterContainer'>
        <div>
            <img src="https://www.telugubulletin.com/wp-content/uploads/2022/02/images-48-497x616.jpeg"className='reviewPoster' />
            <img  className="reviewstar" />
        </div>
        <div>
            <img src="https://www.prokerala.com/images/1200/imax-unveils-yash-s-dhamakedaar-fierce-look-in-k-g-f-chapter-2-poster.jpg" className='reviewPoster'/>
            <img  className="reviewstar" />
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg" className='reviewPoster'/>
            <img   className="reviewstar" />
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/M/MV5BYTEyYjgzNmUtM2QyYi00MWMwLWExMDctZmY1NmZhNGY5MWNiXkEyXkFqcGdeQXVyOTcwMTQxMTM@._V1_.jpg" className='reviewPoster'/>
            <img  className="reviewstar" />
        </div>
        <div>
            <img src="https://resizing.flixster.com/8PNiwC2bpe9OecfYZSOVkvYC5vk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U5NGM0Y2Q1LTAyYTItNGFjNC1hNWZhLWMzYjJjOTdjMTFhOS5qcGc=" className='reviewPoster'/>
            <img  className="reviewstar" />
        </div>
        <div>
            <img src="https://www.pinkvilla.com/imageresize/karthikeya_2_motion_poster_of_nikhil_siddhartha_starrer_showcases_mysteries_of_dwarka_watch_1.jpg?width=752&t=pvorg" className='reviewPoster' />
            <img  className="reviewstar" />
        </div>
        </div>
    </div>
  )
}

export default MovieReviews