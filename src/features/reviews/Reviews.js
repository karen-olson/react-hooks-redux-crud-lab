import React from "react";
import Review from "./Review";

function Reviews({ reviews, handleDeleteReview }) {
  const reviewComponents = reviews.map((review) => (
    <Review
      review={review}
      handleDeleteReview={handleDeleteReview}
      key={review.id}
    />
  ));

  return <ul>Reviews: {reviewComponents}</ul>;
}

export default Reviews;
