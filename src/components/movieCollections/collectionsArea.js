import React from "react";

function CollectionArea( { collectionApiData = {} } ) {
    console.log("collectionsApiData", collectionApiData);
  return (
        <div className="card m-3" style={{ width: "440px" }}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">{collectionApiData.movieName}</h3>
                <p className="card-text">
                 Budget: {collectionApiData.movieBudget}
                </p>
                <p className="card-text">
                 Gross: {collectionApiData.movieGross}
                </p>
              </div>
            </div>
          </div>
        </div>
  );
}

export default CollectionArea;
