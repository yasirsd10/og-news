import axios from "axios";
import React, { useState, useEffect } from "react";
import ReviewArea from "./reviewArea";

function ReviewMapping() {
  const [reviewData, setReviewData] = useState([]);

  const reviewEndPoint =
    "https://sheet.best/api/sheets/5341beec-1c74-48c7-800f-a7f37f42e9d0";
  useEffect(() => {
    axios.get(reviewEndPoint).then((res) => {
      const apiResponse = res.data;
      setReviewData(apiResponse);
    });
  }, []);

  return (
    <div className=" container text-center">
        {/* <pre>{JSON.stringify(reviewData, null,2)}</pre> */}
      <div className="row">
        {reviewData.map((movie) => (
          <ReviewArea reviewApiData={movie} />
        ))}
      </div>
    </div>
  );
}

export default ReviewMapping;
