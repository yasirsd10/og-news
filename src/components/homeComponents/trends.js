import React from "react";

function Trends() {
  return (
    <div>
      <div className="trends bg-dark rounded">
        <h1 className="text-light">Trends</h1>
        <div className="d-flex">
            <div className="twitterTrandes trendsContainer">
              <h1 className="text-light"> Top Twitter Trends Based On Hashtags </h1>
              <button type="button" class="btn btn-primary trendsDivBtn">
                See more
              </button>
          </div>
          <div className="youtubeTrandes trendsContainer">
            <h1 className="text-white"> Top Youtube Trends Based On Hashtags </h1>
            <button type="button" class="btn btn-primary trendsDivBtn">
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trends;
