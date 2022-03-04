import React from "react";
import ReviewsContainer from "../reviews/ReviewsContainer";

function Restaurant({ restaurant, handleDeleteRestaurant }) {
  function handleDeleteClick() {
    handleDeleteRestaurant(restaurant.id);
  }

  function handleEditClick() {
    // do some stuff to edit the form
  }

  return (
    <div>
      <li>
        {restaurant.name}
        <button onClick={handleDeleteClick}> Delete Restaurant </button>
        <button onClick={handleEditClick}> Edit Restaurant </button>
        <ReviewsContainer restaurantId={restaurant.id} />
      </li>
    </div>
  );
}

export default Restaurant;
