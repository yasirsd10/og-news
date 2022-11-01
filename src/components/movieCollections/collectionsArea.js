import React from "react";

function CollectionArea( { reviewApiData = {} } ) {
    console.log("reviewApiData", reviewApiData);
  return (
        <div className="card mb-3" style={{ width: "540px" }}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">{reviewApiData.movieName}</h3>
                <p className="card-text">
                 Budget: {reviewApiData.movieBudget}
                </p>
                <p className="card-text">
                 Gross: {reviewApiData.movieGross}
                </p>
              </div>
            </div>
          </div>
        </div>
  );
}

export default CollectionArea;
