import React, { useEffect, useState } from 'react';
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from './../firebase';
import CollectionArea from './movieCollections/collectionsArea';

function Collections() {

  const [movieCol, setMovieCol] = useState([]);

  useEffect(() => {
    const collectionsCollection = collection(db, 'collections');

    onSnapshot(collectionsCollection, (movieColSnapshot) => {
      const allMovieCol = movieColSnapshot.docs.map((movieColDocument) =>
      movieColDocument.data()
      );
      console.log(':: All Movie collections Data ::', allMovieCol);
    });

    onSnapshot(collection(db, 'collections'), (collSnapshot) => {
      const movieCol = collSnapshot.docs.map((coll) => {
        return {
          movieName: coll.movieName,
          ...coll.data(),
          collDocument: coll,
        };
      });
      console.log(':: ALL Movie Collections ::', movieCol);
      setMovieCol(movieCol);
    });
  }, []);

  return (
    <div className=" container text-center collectionsDiv">
      <h2>Movie Collections</h2>
        {/* <pre>{JSON.stringify(reviewData, null,2)}</pre> */}
      <div className="collectionsWrapper">
        {movieCol.map((movie) => (
          <CollectionArea  collectionApiData={movie} />
        ))}
      </div>
      <a type="button" class="btn btn-primary movieArticleBtn mt-3" href='/collectionMapping'>See more</a>
    </div>
  );
}

export default Collections;
