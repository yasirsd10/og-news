import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import Firebase from "../../firebase";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";
// import "./newsForm.css";

export default function CollectionForm() {
  const formik = useFormik({
    initialValues: {
      movieName: "",
      movieBudget: "",
      movieGross: "",
    },
    validationSchema: Yup.object({
      movieName: Yup.string()
        .max(100, "Movie Name Must be Less Than 100 Characters")
        .required("Please Provide the Movie Name"),
      movieBudget: Yup.number()
        .min(100000, "Please Provide the Validate Detais")
        .required("Please Provide the Movie Budget")
        .typeError("Movie Budget Must Be a Number"),
      movieGross: Yup.number()
        .min(100000, "Please Provide the Valid Details")
        .typeError("Movie Gross Must Be a Number")
        .required("Please Provide the Movie Gross"),
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
            {formik.touched.movieBudget && formik.errors.movieBudget ? (
              <div className="errorMessage">{formik.errors.movieBudget}</div>
            ) : null}
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              Movie Budget
            </span>
            <input
              id="movieBudget"
              name="movieBudget"
              type="text"
              class="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.movieBudget}
            />
          </div>

          <div className="mb-1">
            {formik.touched.movieGross && formik.errors.movieGross ? (
              <div className="errorMessage">{formik.errors.movieGross}</div>
            ) : null}
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              World Wide Gross
            </span>
            <input
              id="movieGross"
              name="movieGross"
              type="movieGross"
              class="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.movieGross}
            />
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
