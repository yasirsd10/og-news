import React from "react";

function CollectionArea( { collectionApiData = {} } ) {
    console.log("collectionsApiData", collectionApiData);
  return (
        <div className="shadow item m-3" style={{ width: "480px" }}>
          <div className="">
            <div className="col-md-8">
              <div className="p-3 text-center">
                <h3 className="">{collectionApiData.movieName}</h3>
                <p className="">
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
