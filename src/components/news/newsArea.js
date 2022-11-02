import React from "react";

function NewsArea( { newsApiData = {} } ) {
    console.log("newsApiData", newsApiData);
  return (
        <div className="card m-3" style={{ width: "440px" }}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{newsApiData.articleHeadline}</h5>
                <p className="card-text">
                    {newsApiData.articleBody}
                </p>
              </div>
            </div>
          </div>
        </div>
  );
}

export default NewsArea;
