import React from "react";
import ReviewsContainer from "../reviews/ReviewsContainer";

function Restaurant({ restaurant, handleDeleteRestaurant }) {
  function handleDeleteClick() {
    handleDeleteRestaurant(restaurant.id);
  }

  return (
    <div>
      <li>
        {restaurant.name}
        <button onClick={handleDeleteClick}> Delete Restaurant </button>
        <ReviewsContainer restaurantId={restaurant.id} />
      </li>
    </div>
  );
}

export default Restaurant;
