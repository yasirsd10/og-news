import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { db } from "../../firebase";
import Errorform from "../homeComponents/Errorsform";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

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

  const formik = useFormik({
    initialValues: {
      moviePoster: "",
      movieName: "",
      movieReview: "",
    },
    validationSchema: Yup.object({
      moviePoster: Yup.string().required("Please Provide the Movie Poster URL"),
      movieName: Yup.string()
        .max(100, "Movie Name Must Be Less Than 100 Characters")
        .required("Please Provide the Movie Name"),
      movieReview: Yup.string()
        .max(300, "Movie Review Must Be Less Than 300 Characters")
        .min(10, "Movie Review Must Be 10 Characters or More")
        .required("Please Provide the Movie Review"),
    }),
    onSubmit: (values) => {
      //   let ref1 = Firebase.database().ref().child('collections').push()
      // ref1.set(values)
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div style={styles.container} className="mt-5">
        <div className="shadow-sm p-3 mb-5 bg-body rounded ">
          <div className="mb-1">
            {formik.touched.moviePoster && formik.errors.moviePoster ? (
              <div className="errorMessage">{formik.errors.moviePoster}</div>
            ) : null}
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              https://example.com/users/
            </span>
            <input
              id="moviePoster"
              name="moviePoster"
              type="text"
              placeholder="Movie Poster URL"
              class="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.moviePoster}
            />
          </div>

          <div className="mb-1">
            {formik.touched.movieName && formik.errors.movieName ? (
              <div className="errorMessage">{formik.errors.movieName}</div>
            ) : null}
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              Movie Name
            </span>
            <input
              id="movieName"
              name="movieName"
              type="text"
              class="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.movieName}
            />
          </div>

          <div className="mb-1">
            {formik.touched.movieReview && formik.errors.movieReview ? (
              <div className="errorMessage">{formik.errors.movieReview}</div>
            ) : null}
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              Movie Review
            </span>
            <input
              id="movieReview"
              name="movieReview"
              type="movieReview"
              class="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.movieReview}
            />
          </div>
          <div
            className="starsContainer d-flex justify-content-center"
            style={styles.starsContainer}
          >
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
              className="my-4 btn btn-primary"
              style={styles.button}
              type="submit"
            >
              Submit
            </button>
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
