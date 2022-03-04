import React from "react";

function Review({ review, handleDeleteReview }) {
  function handleDeleteClick() {
    handleDeleteReview(review.id);
  }

  return (
    <div>
      <li>{review.comment}</li>
      <button onClick={handleDeleteClick}> Delete Review </button>
    </div>
  );
}

export default Review;
