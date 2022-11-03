import React from "react";

function Trends() {
  return (
    <div>
      <div className="trends bg-dark rounded">
        <h1 className="text-light">Trends</h1>
        <div className="d-flex">
            <div className="twitterTrandes trendsContainer">
              <h1 className="text-light"> No Twitter Trends Found </h1>
              <a type="button" class="btn btn-primary trendsDivBtn" href="/trendsArea" >
              See more
            </a>
          </div>
          <div className="youtubeTrandes trendsContainer">
            <h1 className="text-white"> No Youtube Trends Found  </h1>
            <a type="button" class="btn btn-primary trendsDivBtn" href="/trendsArea" >
              See more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trends;
