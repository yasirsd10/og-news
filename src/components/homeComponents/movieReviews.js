import React, { useEffect, useState } from 'react';
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../../firebase';
import MovieReviewCard from './movieReviewCard';

function ReviewMapping() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const movieReviewCollection = collection(db, 'reviews');

    onSnapshot(movieReviewCollection, (movieReviewSnapshot) => {
      const allReviews = movieReviewSnapshot.docs.map((movieReviewDocument) =>
      movieReviewDocument.data()
      );
      console.log(':: All Review Data ::', allReviews);
    });

    onSnapshot(collection(db, 'reviews'), (reviewSnapshot) => {
      const reviews = reviewSnapshot.docs.map((review) => {
        return {
          movieName: review.movieName,
          ...review.data(),
          reviewDocument: review,
        };
      });
      console.log(':: ALL REVIEWS ::', reviews);
      setReviews(reviews);
    });
  }, []);

  return (
    <div className=" container text-center movieReviewDiv">
        {/* <pre>{JSON.stringify(reviewData, null,2)}</pre> */}
      <div className="reviewWrapper">
        {reviews.map((movie) => (
          <MovieReviewCard reviewApiData={movie} />
        ))}
      </div>
      <a type="button" class="btn btn-primary movieArticleBtn mt-3" href='/reviewArea'>See more</a>
    </div>
  );
}

export default ReviewMapping;
