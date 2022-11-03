import axios from "axios";
import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { db } from '../../firebase';
import Errorform from "../homeComponents/Errorsform";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

export default function ReviewForm() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [moviePoster, setMoviePoster] = useState("");
  const [movieName, setMovieName] = useState("");
  const [movieReview, setMovieReview] = useState("");
  const [showError, setShowError] = useState();


  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const createReview = () => {
    addDoc(collection(db, 'reviews'), {
      moviePoster: moviePoster,
      movieName: movieName,
      movieReview: movieReview });
      console.log("post successfully");
        setMovieName('');
        setMovieReview('');
        setMoviePoster('');
  };

  const onSubmitClick = (e) => {
    e.preventDefault();

    if (moviePoster && movieName && movieReview) {
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <form onSubmit={onSubmitClick}>
      <div style={styles.container} className="mt-5">
      { showError ? <div >
          <strong><Errorform  poster = {moviePoster} /></strong>  
          </div> : null}
        <label for="basic-url" className ="form-label">
          Movie Poster URL
        </label>
        <div className ="input-group mb-3">
          <span className ="input-group-text" id="basic-addon3">
            https://example.com/users/
          </span>
          <input
            type="text"
            className ="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            value={moviePoster}
            onChange={(e) => {
              setMoviePoster(e.target.value);
            }}
          />
        </div>
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
            Value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Movie Review</span>
          <textarea
            className ="form-control"
            aria-label="With textarea"
            placeholder="Write A Movie Review"
            Value={movieReview}
            onChange={(e) => setMovieReview(e.target.value)}
          ></textarea>
        </div>
        <div className="starsContainer d-flex justify-content-center" style={styles.starsContainer}>
          <h3> Overal Rating </h3>
          <div className="d-flex justify-content-center" style={styles.stars}>
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => {
                    handleClick(index + 1);
                  }}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={
                    (hoverValue || currentValue) > index
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
          onClick={createReview}
            className="my-4 btn btn-primary"
            style={styles.button}
            type="submit"
          >
            Submit
          </button>
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
    justifycontent: "center",
    margin: "0 auto",
    width: "50%",
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
