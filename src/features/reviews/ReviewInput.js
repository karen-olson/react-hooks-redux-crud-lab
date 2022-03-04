import { useState } from "react";

function ReviewInput({ handleAddReview, restaurantId }) {
  const [comment, setComment] = useState("");

  function handleChange(e) {
    setComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const review = {
      comment,
      restaurantId,
    };
    handleAddReview(review);
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment
        <textarea onChange={handleChange} value={comment} />
      </label>
      <input type="submit" value="Add Review" />
    </form>
  );
}

export default ReviewInput;
