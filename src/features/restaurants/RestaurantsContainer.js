import { useState } from "react";
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";
import RestaurantEditForm from "./RestaurantEditForm";
import { useSelector, useDispatch } from "react-redux";
import {
  restaurantAdded,
  restaurantRemoved,
  restaurantUpdated,
} from "./restaurantsSlice";

function RestaurantsContainer() {
  const restaurants = useSelector((state) => state.restaurants.entities);
  const dispatch = useDispatch();

  function handleAddRestaurant(restaurant) {
    dispatch(restaurantAdded(restaurant));
  }

  function handleDeleteRestaurant(id) {
    dispatch(restaurantRemoved(id));
  }

  return (
    <div>
      <RestaurantInput handleAddRestaurant={handleAddRestaurant} />
      <Restaurants
        restaurants={restaurants}
        handleDeleteRestaurant={handleDeleteRestaurant}
      />
    </div>
  );
}

export default RestaurantsContainer;
