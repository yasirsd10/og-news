import React from "react";

function ReviewArea( { reviewApiData = {} } ) {
    console.log("reviewApiData", reviewApiData);
  return (
        <div className=" mb-3 item m-3" style={{ width: "540px" }}>
          <div className="d-flex text-center g-0">
            <div className="col-md-4">
              <img src={reviewApiData.moviePoster} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{reviewApiData.movieName}</h5>
                <p className="card-text">
                  {reviewApiData.movieReview}
                </p>
              </div>
            </div>
          </div>
        </div>
  );
}

export default ReviewArea;
