import React from "react";
import { useState } from "react";
import { db } from '../../firebase';
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

export default function CollectionForm() {
  const [movieName, setMovieName] = useState("");
  const [movieBudget, setMovieBudget] = useState("");
  const [movieGross, setMovieGross] = useState("");
  const [showError, setShowError] = useState(false);

  const createCollections = (e) => {
    e.preventDefault();
    addDoc(collection(db, 'collections'), {
      movieGross: movieGross,
      movieName: movieName,
      movieBudget: movieBudget });
      console.log("post successfully");
        setMovieName('');
        setMovieBudget('');
        setMovieGross('');
  };
  const onSubmitClick = (e) => {
    

    if (movieBudget && movieName && movieGross) {
      setShowError(false);
    } else {
      setShowError(true);
    }
  };


  return (
    <form onSubmit={onSubmitClick}>
      <div style={styles.container} className="mt-5">
        <div className="shadow-sm p-3 mb-5 bg-body rounded ">
        { showError ? <div className ="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Please Fill All Inputs</strong> 
          <button type="button" className ="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div> : null}
        <div>
        <div className ="input-group mb-3">
          <span className ="input-group-text" id="basic-addon1">
            Movie Name
          </span>
          <input
            type="text"
            className ="form-control"
            placeholder="Movie Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            Value={movieName ? movieName: null}
            onChange={(e) => setMovieName(e.target.value)}
          />
        </div>
        <div className ="input-group mb-3">
          <span className ="input-group-text" id="basic-addon1">
            Budget
          </span>
          <input
            type="text"
            className ="form-control"
            placeholder="Movie Budget"
            aria-label="Username"
            aria-describedby="basic-addon1"
            Value={movieBudget}
            onChange={(e) => setMovieBudget(e.target.value)}
          />
        </div>
        <div className ="input-group mb-3">
          <span className ="input-group-text" id="basic-addon1">
            World Wide Gross
          </span>
          <input
            type="text"
            className ="form-control"
            placeholder="World Wide Gross"
            aria-label="Username"
            aria-describedby="basic-addon1"
            Value={movieGross}
            onChange={(e) => setMovieGross(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="my-4 btn btn-primary"
            style={styles.button}
            type="submit"
            onClick={createCollections}
          >
            Submit
          </button>
        </div>
        </div>
        </div>
      </div>
    </form>
  );
}










const styles = {
  container: {
    display: "flex",
    minHeight: "100%",
    flexDirection: "column",
    alignitems: "start",
    justifycontent: "start",
    margin: "0 auto",
    width: "50%",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(0, 0, 0, .5)",
    boxshadow: "1px 1px 2px rgba(255, 255, 255, .5)",
  },
  movieName: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    minHeight: 50,
    width: 300,
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    justifycontent: "center",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  starsContainer: {
    display: "flex",
    flexDirection: "column",
    alignitems: "center",
  },

  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};
