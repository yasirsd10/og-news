import React from "react";
import { useState } from "react";
import { db } from "../../firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function NewsForm() {
  const formik = useFormik({
    initialValues: {
      articleHeadline: "",
      articleBody: "",
    },
    validationSchema: Yup.object({
      articleHeadline: Yup.string()
        .required("Please Provide the Article Headline")
        .max(100, "Article Headline Must be Less Than 100 Characters")
        .min(10, "Article Headline Must Be 10 Characters or More"),
      articleBody: Yup.string()
        .required("Please Provide the Aticle")
        .max(500, "Aricle Must Be Less Than 500 Characters")
        .min(50, "Article Must Be 50 Characters or More"),
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
            {formik.touched.articleHeadline && formik.errors.articleHeadline ? (
              <div className="errorMessage">
                {formik.errors.articleHeadline}
              </div>
            ) : null}
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              Article Headline
            </span>
            <input
              id="articleHeadline"
              name="articleHeadline"
              type="text"
              class="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.articleHeadline}
            />
          </div>

          <div className="mb-1">
            {formik.touched.articleBody && formik.errors.articleBody ? (
              <div className="errorMessage">{formik.errors.articleBody}</div>
            ) : null}
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              Article
            </span>
            <input
              id="articleBody"
              name="articleBody"
              type="text"
              class="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.articleBody}
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
