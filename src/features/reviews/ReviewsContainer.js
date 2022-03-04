import React from "react";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";
import { useSelector, useDispatch } from "react-redux";
import { reviewAdded, reviewRemoved } from "./reviewsSlice";

function ReviewsContainer({ restaurantId }) {
  const reviews = useSelector((state) =>
    state.reviews.entities.filter(
      (review) => review.restaurantId === restaurantId
    )
  );
  const dispatch = useDispatch();

  function handleAddReview(review) {
    dispatch(reviewAdded(review));
  }

  function handleDeleteReview(id) {
    dispatch(reviewRemoved(id));
  }

  return (
    <div>
      <ReviewInput
        handleAddReview={handleAddReview}
        restaurantId={restaurantId}
      />
      <Reviews reviews={reviews} handleDeleteReview={handleDeleteReview} />
    </div>
  );
}

export default ReviewsContainer;
