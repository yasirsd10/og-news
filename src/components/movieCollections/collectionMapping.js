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
import CollectionArea from './collectionsArea';

function CollectionMapping() {

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
    <div className=" container text-center">
        {/* <pre>{JSON.stringify(reviewData, null,2)}</pre> */}
      <div className="row">
        {movieCol.map((movie) => (
          <CollectionArea collectionApiData={movie} />
        ))}
      </div>
    </div>
  );
}

export default CollectionMapping;
