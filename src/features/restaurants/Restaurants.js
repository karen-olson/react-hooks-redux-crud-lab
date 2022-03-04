import React from "react";
import Restaurant from "./Restaurant";

function Restaurants({ restaurants, handleDeleteRestaurant }) {
  const restaurantComponents = restaurants.map((restaurant) => (
    <Restaurant
      key={restaurant.id}
      restaurant={restaurant}
      handleDeleteRestaurant={handleDeleteRestaurant}
    />
  ));

  return <ul>{restaurantComponents}</ul>;
}

export default Restaurants;
