import axios from "axios";
import React from "react";
import { useState } from "react";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

export default function CollectionForm() {
  const [moviePoster, setMoviePoster] = useState("");
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieBudget, setMovieBudget] = useState("");
  const [movieGross, setMovieGross] = useState("");

  const [showError, setShowError] = useState();


  // useEffect(() => {
  //   const movieReviewData = collection(db, 'reviews');

  //   onSnapshot(movieReviewData, (reviewSnapshot) => {
  //     const allReviews = reviewSnapshot.docs.map((studentDocument) =>
  //       studentDocument.data()
  //     );
  //     console.log(':: All Review Data ::', allReviews);
  //   });

  //   onSnapshot(collection(db, 'reviews'), (reviewSnapshot) => {
  //     const reviews = reviewSnapshot.docs.map((todo) => {
  //       return {
  //         id: todo.id,
  //         ...todo.data(),
  //         todoDocument: todo,
  //       };
  //     });
  //     console.log(':: ALL Reviews ::', reviews);
  //     setTodos(reviews);
  //   });
  // }, []);

  const onSubmitClick = (e) => {
    e.preventDefault();

    if (moviePoster && movieName && movieBudget && movieGross) {
      const reviewObj = {
        moviePoster: moviePoster,
        movieName: movieName,
        movieDescription: movieDescription,
        movieBudget: movieBudget,
        movieGross: movieGross,
      };
      setShowError(false);
      const sheetUrl =
        "https://sheet.best/api/sheets/5341beec-1c74-48c7-800f-a7f37f42e9d0";

      axios.post(sheetUrl, reviewObj).then(() => {
        console.log("post successfully");
        setMovieName('');
        setMovieDescription('');
        setMoviePoster('');
        setMovieBudget('');
        setMovieGross('');
      });
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
        <label for="basic-url" className ="form-label">
          Movie Poster URL
        </label>
        <div>
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
        <div className="input-group mb-3">
          <span className="input-group-text">Movie Description</span>
          <textarea
            className ="form-control"
            aria-label="With textarea"
            placeholder="Write A Small Description"
            Value={movieDescription}
            // onChange={(e) => setMovieReview(e.target.value)}
          ></textarea>
        </div>
        <div className ="input-group mb-3">
          <span className ="input-group-text" id="basic-addon1">
            Budget
          </span>
          <input
            type="number"
            className ="form-control"
            placeholder="Movie Budget"
            aria-label="Username"
            aria-describedby="basic-addon1"
            Value={movieBudget}
            onChange={(e) => setMovieName(e.target.value)}
          />
        </div>
        <div className ="input-group mb-3">
          <span className ="input-group-text" id="basic-addon1">
            World Wide Gross
          </span>
          <input
            type="number"
            className ="form-control"
            placeholder="World Wide Gross"
            aria-label="Username"
            aria-describedby="basic-addon1"
            Value={movieGross}
            onChange={(e) => setMovieName(e.target.value)}
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
